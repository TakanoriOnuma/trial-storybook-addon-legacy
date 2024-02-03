import { StorybookConfig } from "@storybook/react-vite";

const storybookConfig: StorybookConfig = {
  framework: "@storybook/react-vite",
  addons: ["./local-preset.js"],
  stories: ["../stories/**/*.stories.tsx"],
};

export default storybookConfig;
