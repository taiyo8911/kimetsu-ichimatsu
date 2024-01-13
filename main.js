// 画面のサイズを取得する
const displayWidth = window.innerWidth;
const displayHeight = window.innerHeight;

// bodyにcanvas要素を作成する
const canvas = document.createElement("canvas");
canvas.id = "canvas";
canvas.width = displayWidth;
canvas.height = displayHeight;
document.body.appendChild(canvas);
const context = canvas.getContext("2d");

// セルの数を計算する
const numCols = Math.sqrt(displayWidth);
const numRows = Math.sqrt(displayHeight);
const cellSize = Math.sqrt(displayWidth);

// セルの数だけループして四角形を描画する
for (let row = 1; row <= numRows; row++) {
    for (let col = 1; col <= numCols; col++) {
        const isOddRow = row % 2 !== 0;
        const isOddColumn = col % 2 !== 0;

        const x = col * cellSize - cellSize;
        const y = row * cellSize - cellSize;

        if ((isOddColumn && isOddRow) || (!isOddColumn && !isOddRow)) {
            context.fillStyle = "#56b99a"; // green
        } else {
            context.fillStyle = "#352b29"; // black
        }
        context.fillRect(x, y, cellSize, cellSize);
    }
}
