// 地图类
function Map(game) {
    // 自己的中介者
    this.owner = game;
    // 自己的编码，就是8*16的矩阵
    this.code = [
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        [1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0],
        [1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0],
        [1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 2, 1, 0],
        [1, 2, 1, 0, 1, 2, 2, 2, 2, 1, 0, 0, 1, 2, 1, 0],
        [1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 0],
        [1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
    ];
}
Map.prototype.render = function () {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 16; j++) {
            if (this.code[i][j] != 0) {
                this.owner.ctx.drawImage(this.owner.R[this.code[i][j] + ".png"], j * 50, i * 50, 50, 50)
            }
        }
    }
}