// ここを参考にローカルで確認するためのaddonを用意する
// https://github.com/storybookjs/addon-kit/blob/d1647c4177d876f3592d562d1b554988f262533c/.storybook/local-preset.js

function previewAnnotations(entry = []) {
  return [...entry, require.resolve("../dist/preview.mjs")];
}

function managerEntries(entry = []) {
  return [...entry, require.resolve("../dist/manager.mjs")];
}

module.exports = {
  managerEntries,
  previewAnnotations,
};
