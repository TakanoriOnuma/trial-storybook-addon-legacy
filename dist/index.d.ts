type MyAddonState = {
    /** フラグ */
    flag?: boolean;
    /** 数値 */
    num?: number;
};

/**
 * preview側で使用できる読み取り専用のMyAddonStateを参照するhooks
 */
declare const useReadonlyMyAddonStateFromPreview: () => MyAddonState;

/**
 * storybookのparametersにassignして差し込めるオブジェクトを生成する
 * @param params - 自作アドオン用のパラメータ
 */
declare const createAssignableParametersForMyAddon: (params: MyAddonState) => {
    myAddonParameter: MyAddonState;
};

export { type MyAddonState, createAssignableParametersForMyAddon, useReadonlyMyAddonStateFromPreview as useMyAddonState };
