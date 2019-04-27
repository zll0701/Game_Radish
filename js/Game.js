function Game(){
    //获得画布
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    // 本游戏需要的所有图片对象
    var imgArr = [
        "1.png",
        "2.png",
        "3.png",
    ];

    this.R = {};
    var alreadyDownCount = 0;
     //加载图片，加载完成游戏开始
    for(var i = 0; i < imgArr.length; i++){
        var image = new Image();
        image.src = "images/" + imgArr[i];
        this.R[imgArr[i]] = image;
        image.onload = function () {
            alreadyDownCount++;
            if (alreadyDownCount == imgArr.length) {
                self.start();
            }

            //设置字体样式
            self.ctx.font = "20px 微软雅黑";
            self.ctx.textAlign = "center";
            self.ctx.textBaseline = "middle";
            //清屏
            self.ctx.clearRect(0, 0, 360, 360);
            var gradient = self.ctx.createLinearGradient(0, 0, self.canvas.width, 0);
            gradient.addColorStop("0", "magenta");
            gradient.addColorStop("0.5", "blue");
            gradient.addColorStop("1.0", "red");
            self.ctx.fillStyle = gradient;
            self.ctx.fillText("正在加载图片" + alreadyDownCount + "/" + imgArr.length, 180, 180);
        }
    }
}

Game.prototype.start = function () {
    var self = this;
    //帧数
    this.f = 0;

    this.map = new Map(this);

    this.timer = setInterval(function() {
        //清屏、更新、渲染
        self.ctx.clearRect(0, 0, 544, 544);
        self.f++;
        self.map.render();
    }, 20);
}
//键盘监听
/* Game.prototype.bindEvent = function () {
    var self = this;
    document.onkeydown = function (e) {
        if (e.keyCode == 37) {
            self.rabbit.changeDirection("left");
            self.rabbit.go();
        } else if (e.keyCode == 38) {
            self.rabbit.changeDirection("up");
            self.rabbit.go();
        } else if (e.keyCode == 39) {
            self.rabbit.changeDirection("right");
            self.rabbit.go();
        } else if (e.keyCode == 40) {
            self.rabbit.changeDirection("down");
            self.rabbit.go();
        }
    }
} */