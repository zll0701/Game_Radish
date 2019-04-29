function Guai(game){
    this.game=game;
    this.step=0;
    this.x = 24*3;
    this.y = 24*8;
    this.sudu = 1;
    this.fangxiang = "s";
   
    
}
Guai.prototype.update = function(){
    if(this.game.f % 8 == 0 ){
        this.step++;
        if(this.step>6){
            this.step=0
        }
    };
    this.row = parseInt(this.y / 24);
    this.col = parseInt(this.x / 24);
    // 根据方向来改变x或者y
    switch (this.fangxiang) {
        case "s":
            // 判断死路
            if(checkNo1(this.game.map.code[this.row][this.col])){
                this.y -= this.sudu;
            }else{
                var m = ["x","y","z"][parseInt(Math.random() * 3)];
                this.gaibianfx(m);
            }
            var row = parseInt(this.y / 24);
            var col = parseInt(this.x / 24);

            // 当移动了row的时候
           
            if(this.row != row){
                // 判断左有没有路
                if(checkNo1(this.game.map.code[row][col])){
                     
                    if(Math.random() > 0.8){
                        this.gaibianfx("z");
                    }
                }
                // // 判断右有没有路
                if(checkNo1(this.game.map.code[row][col + 1])){
                    // 有一定概率转弯
                    if(Math.random() > 0.8){
                        this.gaibianfx("y");
                    }
                }
            }
            
            break;
        case "y":
            // 判断死路
            if(checkNo1(this.game.map.code[this.row][this.col + 1])){
                this.x += this.sudu;
            }else{
               
                var m = ["x","z","s"][parseInt(Math.random() * 3)];
                this.gaibianfx(m);
            }
            var row = parseInt(this.y / 24);
            var col = parseInt(this.x / 24);

            // 当移动了col的时候
            
            if(this.col != col){
                // 判断上有没有路
                if(checkNo1(this.game.map.code[row][col])){
                    if(Math.random() > 0.8){
                        this.gaibianfx("s");
                    }
                }
                // // 判断下有没有路
                if(checkNo1(this.game.map.code[row + 1][col])){
                    // 有一定概率转弯
                    if(Math.random() > 0.8){
                        this.gaibianfx("x");
                    }
                }
            }
            
            break;
        case "x":
            // 判断死路
            if(checkNo1(this.game.map.code[this.row + 1][this.col]) ){
                this.y += this.sudu;
            }else{
                var m = ["s","z","y"][parseInt(Math.random() * 3)];
                this.gaibianfx(m);
            }

            var row = parseInt(this.y / 24);
            var col = parseInt(this.x / 24);

            // 当移动了row的时候
            
            if(this.row != row){
                // 判断左有没有路
                if(checkNo1(this.game.map.code[row][col]) ){
                     
                   if(Math.random() > 0.8){
                        this.gaibianfx("z");
                    }
                }
                // // 判断右有没有路
                if(checkNo1(this.game.map.code[row][col + 1]) ){
                    // 有一定概率转弯
                    if(Math.random() > 0.8){
                        this.gaibianfx("y");
                    }
                }
            }
             
            break;
        case "z":
            // 判断死路
            if(checkNo1(this.game.map.code[this.row][this.col])){
                this.x -= this.sudu;
            }else{
                var m = ["s","x","y"][parseInt(Math.random() * 3)];
                this.gaibianfx(m);
                
            }
            var row = parseInt(this.y / 24);
            var col = parseInt(this.x / 24);

            // 当移动了col的时候
            
            if(this.col != col){
                // 判断上有没有路
                if(checkNo1(this.game.map.code[row][col])){
                    if(Math.random() > 0.8){
                        this.gaibianfx("s");
                    }
                }
                // // 判断下有没有路
                if(checkNo1(this.game.map.code[row + 1][col])){
                    // 有一定概率转弯
                    if(Math.random() > 0.8){
                        this.gaibianfx("x");
                    }
                }
            }
             
            break;
    }
   
  
}
Guai.prototype.gaibianfx = function (fangxiang) {
    if (fangxiang == "s" || fangxiang == "x") {
        this.x = Math.round(this.x / 24) * 24;
    } else if (fangxiang == "z" || fangxiang == "y") {
        this.y = Math.round(this.y / 24) * 24;
    }
    this.fangxiang = fangxiang;
}
Guai.prototype.render = function(){
    this.game.ctx.drawImage(this.game.R["guai.png"],this.step*16,0,16,16,this.x,this.y,24,24);
}
function checkNo1(m){
    return m != 1;
}