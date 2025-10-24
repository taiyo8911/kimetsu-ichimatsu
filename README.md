# kimetsu-ichimatsu

Canvas APIを使用して市松模様（鬼滅の刃の主人公・竈門炭治郎の羽織柄）を描画するJavaScriptプロジェクトです。画面幅に応じて描画を自動調整するレスポンシブデザインを実装しています。

## 特徴

- **レスポンシブデザイン**: 画面サイズに応じて自動的にパターンを調整
- **Canvas API**: HTML5のCanvas要素を使用した高速な描画
- **シンプルな実装**: 純粋なJavaScriptで実装、外部ライブラリ不要
- **数学的アプローチ**: 平方根を使用したセルサイズの計算

## デモ

ブラウザでindex.htmlを開くと、画面全体に市松模様が表示されます。

配色：
- 緑色: `#56b99a`
- 黒色: `#352b29`

## ファイル構成

```
kimetsu-ichimatsu/
├── index.html    # メインHTMLファイル
├── main.js       # 市松模様描画スクリプト
└── README.md     # プロジェクト説明書
```

## 使い方

1. リポジトリをクローンまたはダウンロード
   ```bash
   git clone https://github.com/taiyo8911/kimetsu-ichimatsu.git
   cd kimetsu-ichimatsu
   ```

2. ブラウザでindex.htmlを開く
   ```bash
   open index.html
   # または
   # Windowsの場合: start index.html
   # Linuxの場合: xdg-open index.html
   ```

3. 画面全体に市松模様が表示されます

## 技術仕様

### 描画ロジック

- **セル数の計算**: `Math.sqrt(displayWidth)` と `Math.sqrt(displayHeight)` を使用
- **セルサイズ**: 画面幅の平方根を使用して計算
- **パターン生成**: 行と列の奇数・偶数を判定して色を切り替え

### コードの仕組み

```javascript
// 画面サイズを取得
const displayWidth = window.innerWidth;
const displayHeight = window.innerHeight;

// セルの数とサイズを計算（平方根を使用）
const numCols = Math.sqrt(displayWidth);
const numRows = Math.sqrt(displayHeight);
const cellSize = Math.sqrt(displayWidth);

// 市松模様を描画
// (奇数行 & 奇数列) または (偶数行 & 偶数列) → 緑色
// それ以外 → 黒色
```

## ブラウザ対応

- Chrome
- Firefox
- Safari
- Edge

Canvas APIをサポートするモダンブラウザで動作します。

## 参考サイト

- [平方根を計算する - JavaDrive](https://www.javadrive.jp/javascript/math_class/index16.html)
- [Canvasのサイズが難解で困る - note](https://note.affi-sapo-sv.com/js-canvas-size.php)
- [ウィンドウの幅と高さを取得する - JavaDrive](https://www.javadrive.jp/javascript/webpage/index6.html)

## ライセンス

MIT License

## 作者

[taiyo8911](https://github.com/taiyo8911)
