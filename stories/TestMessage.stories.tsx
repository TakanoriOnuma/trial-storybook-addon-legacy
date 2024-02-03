import { Meta, StoryObj } from "@storybook/react";

import { TestMessage } from "./TestMessage";

type Story = StoryObj<typeof TestMessage>;

const meta: Meta<typeof TestMessage> = {
  title: "TestMessage",
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
