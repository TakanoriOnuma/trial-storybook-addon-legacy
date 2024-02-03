import { Addon_Type } from "@storybook/types";
import { AddonPanel } from "@storybook/components";
import { PureArgsTable } from "@storybook/blocks";
import { useParameter, useStorybookState } from "@storybook/manager-api";
import { PARAM_KEY } from "./constants";

import { useEffect } from "react";
import { useMyAddonStateFromManager } from "./myAddonState/useMyAddonStateFromManager";
import { INITIAL_MY_ADDON_STATE } from "./myAddonState/MyAddonState";

// この辺のコードを参考にパラメータを設定するコンポーネントを作った
// https://github.com/storybookjs/storybook/blob/v7.6.10/code/addons/controls/src/ControlsPanel.tsx

export const Panel: Addon_Type["render"] = ({ key, active }) => {
  const [myAddonState, setMyAddonState] = useMyAddonStateFromManager();

  const params = useParameter(PARAM_KEY, INITIAL_MY_ADDON_STATE);
  const { path, previewInitialized } = useStorybookState();

  // pathが変わった時にパラメータをリセットする
  useEffect(() => {
    // まだpreviewが初期化されていない場合はスキップする
    if (!previewInitialized) {
      return;
    }
    setMyAddonState(params);
  }, [path]);

  return (
    <AddonPanel key={key} active={active ?? false}>
      <h2>パラメータ設定（レガシー）</h2>
      <PureArgsTable
        // みているStoryが変わったら作り直す
        key={path}
        // v7.0.26時点では渡すとバグってしまうのでコメントアウト
        // isLoading={!previewInitialized}
        args={myAddonState}
        rows={{
          flag: {
            name: "flag",
            control: {
              type: "boolean",
            },
          },
          num: {
            name: "num",
            control: {
              type: "number",
            },
          },
        }}
        compact
        inAddonPanel
        updateArgs={(newArgs) => {
          setMyAddonState({
            ...myAddonState,
            ...newArgs,
          });
        }}
        resetArgs={() => {
          setMyAddonState(params);
        }}
      />
    </AddonPanel>
  );
};
