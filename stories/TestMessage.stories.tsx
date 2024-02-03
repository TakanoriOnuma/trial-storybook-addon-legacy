import { Meta, StoryObj } from "@storybook/react";

import { TestMessage } from "./TestMessage";
import { useMyAddonState, createAssignableParametersForMyAddon } from "../src";

type Story = StoryObj<typeof TestMessage>;

const Template: Story["render"] = (args) => {
  const myAddonState = useMyAddonState();

  return (
    <div>
      <TestMessage {...args} />
      <div>myAddonState: {JSON.stringify(myAddonState)}</div>
    </div>
  );
};

const meta: Meta<typeof TestMessage> = {
  title: "TestMessage",
  render: Template,
  component: TestMessage,
  args: {
    message: "Hello World",
  },
};

export default meta;

export const Default: Story = {};

export const Text: Story = {
  args: {
    message: "こんにちは！",
  },
};

export const DefaultWithParams: Story = {
  parameters: {
    ...createAssignableParametersForMyAddon({
      num: 10,
    }),
  },
};

export const TextWithParams: Story = {
  args: {
    message: "こんにちは！",
  },
  parameters: {
    ...createAssignableParametersForMyAddon({
      flag: true,
      num: 10,
    }),
  },
};
