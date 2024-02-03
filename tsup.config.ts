// ここを参考に設定
// https://github.com/storybookjs/addon-kit/blob/d1647c4177d876f3592d562d1b554988f262533c/tsup.config.ts

import { defineConfig, Options } from "tsup";
import { globalPackages as globalManagerPackages } from "@storybook/manager/globals";
import { globalPackages as globalPreviewPackages } from "@storybook/preview/globals";

// The current browsers supported by Storybook v7
const BROWSER_TARGET: Options["target"] = [
  "chrome100",
  "safari15",
  "firefox91",
];
const NODE_TARGET: Options["target"] = ["node16"];

export default defineConfig(async (options) => {
  const commonConfig: Options = {
    splitting: false,
    minify: !options.watch,
    treeshake: true,
    sourcemap: true,
    clean: true,
  };

  const exportConfig: Options = {
    ...commonConfig,
    entry: ["./src/index.ts"],
    dts: {
      resolve: true,
    },
    format: ["esm", "cjs"],
    target: [...BROWSER_TARGET, ...NODE_TARGET],
    platform: "neutral",
    external: [...globalManagerPackages, ...globalPreviewPackages],
  };

  const managerConfig: Options = {
    ...commonConfig,
    entry: ["./src/manager.ts"],
    format: ["esm"],
    target: BROWSER_TARGET,
    platform: "browser",
    external: globalManagerPackages,
  };

  const previewConfig: Options = {
    ...commonConfig,
    entry: ["./src/preview.ts"],
    format: ["esm"],
    target: BROWSER_TARGET,
    platform: "browser",
    external: globalPreviewPackages,
  };

  return [exportConfig, managerConfig, previewConfig];
});
