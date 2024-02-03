import { FC } from "react";

export type TestMessageProps = {
  /** メッセージ */
  message: string;
};

/**
 * メッセージを表示するテストコンポーネント
 */
export const TestMessage: FC<TestMessageProps> = ({ message }) => {
  return <div>{message}</div>;
};
