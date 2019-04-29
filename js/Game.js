function Game(){
    // 画布，现在是Game类的实例的属性
    this.canvas = document.getElementById("canvas");
    // 上下文也是属性
    this.ctx = this.canvas.getContext("2d");
    //音乐
    this.b = document.getElementById("b");
    b.load();
    //备份
    var self = this;
    //键盘监听
    this.bindEvent();
    // 资源
    var imgArr = [
        "1.png",
        "2.png",
        "3.png",
        "x0.png",
        "x1.png",
        "x2.png",
        "s0.png",
        "s1.png",
        "s2.png",
        "z0.png",
        "z1.png",
        "z2.png",
        "y0.png",
        "y1.png",
        "y2.png",
        "guai.png",
    ]
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
        }
    }

}
// 开始游戏
Game.prototype.start = function(){
    var self = this;
    this.f = 0;

    this.map = new Map(this);
    this.ball = new Ball(this);
    this.guai = new Guai(this);
    this.guai2 = new Guai2(this);

    this.dianArr = [];
    for (var i = 0; i < this.map.code.length; i++) {
        for (var j = 0; j < 18; j++) {
            if (this.map.code[i][j] == 2) {
                new Dian(i, j, this);
            }
        }
    }

    this.timer = setInterval(function(){
        // 清屏
        self.ctx.clearRect(0, 0, 430, 600);

        // 帧编号加1
        self.f++;
        // 打印帧编号
        self.ctx.fillStyle = "white";
        self.ctx.fillText(self.f, 10, 20);

        self.map.update();
        self.map.render();

        self.ball.update();
        self.ball.render();
        self.ball.eat();
        self.ball.die();
        
        self.guai.update();
        self.guai.render();

        self.guai2.update();
        self.guai2.render();

        //self.dian.render();
    }, 10);
};
Game.prototype.bindEvent = function () {
    var self = this;
    document.onkeydown = function(e){
        if (e.keyCode == 37) {
            self.ball.isMoving = true;
            self.ball.gaibianfx("z");
        }else if(e.keyCode == 38){
            self.ball.isMoving = true;
            self.ball.gaibianfx("s");
        }else if(e.keyCode == 39){
            self.ball.isMoving = true;
            self.ball.gaibianfx( "y")
        }else if(e.keyCode == 40){
            self.ball.isMoving = true;
            self.ball.gaibianfx("x");
        }   
    }

}