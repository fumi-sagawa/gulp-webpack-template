// import 文を使って sub.js ファイルを読み込む。
import { backfaceFixed } from "./lib/backfaceFixed";
import objectFitImages from "object-fit-images";

// objectfitPolyfill
objectFitImages();
// subjsに定義されたJavaScriptを実行する。
hello();

const open = () => {
  // 背面コンテンツのスクロールを無効にする
  backfaceFixed(true);
};

const close = () => {
  // 背面コンテンツのスクロールの無効を解除する
  backfaceFixed(false);
};
