import { MyAddonState } from "./myAddonState/MyAddonState";
import { PARAM_KEY } from "./constants";

/**
 * storybookのparametersにassignして差し込めるオブジェクトを生成する
 * @param params - 自作アドオン用のパラメータ
 */
export const createAssignableParametersForMyAddon = (params: MyAddonState) => {
  return {
    [PARAM_KEY]: params,
  };
};
