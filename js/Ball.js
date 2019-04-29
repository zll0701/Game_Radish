function Ball(game){
    this.game = game;
    this.x = 24;
    this.y = 24;
    this.fangxiang = "x";
    this.step = 0;
    this.sudu = 1;
    this.row = 2;
    this.col = 2;
     // 有限状态，是否在运动
     this.isMoving = false;
}
Ball.prototype.update = function(){
    if(this.game.f % 8 == 0 ){
        this.step++;
        if(this.step >2){
            this.step=0;
        }
    };
    if(this.isMoving){
        this.row_m = parseInt(this.y / 24);
        this.col_m = parseInt(this.x / 24);
    
       
        if(this.fangxiang == "z"){
            if(this.game.map.code[this.row_m][this.col_m] != 1){
                this.x -= this.sudu;
            }
        }else if(this.fangxiang == "s"){
            if(this.game.map.code[this.row_m][this.col_m] != 1){
                this.y -= this.sudu;
            }
        }else if(this.fangxiang == "y"){
            if(this.game.map.code[this.row_m][this.col_m+1] != 1){
                this.x += this.sudu;
            }
        }else if(this.fangxiang == "x"){
            if(this.game.map.code[this.row_m+1][this.col_m] !=1){
                this.y+= this.sudu;
            }
        }  
    }
    //为了算在地图上的行列
   
}
Ball.prototype.gaibianfx = function (fangxiang) {
    if (fangxiang == "s" || fangxiang == "x") {
        this.x = Math.round(this.x / 24) * 24;
    } else if (fangxiang == "z" || fangxiang == "y") {
        this.y = Math.round(this.y / 24) * 24;
    }
    this.fangxiang = fangxiang;
}
Ball.prototype.eat = function(){
    this.row = parseInt(this.y / 24);
    this.col = parseInt(this.x / 24);

    for (var i = 0; i < this.game.dianArr.length; i++) {
        if (this.game.dianArr[i].row == this.row && this.game.dianArr[i].col == this.col) {
            this.game.b.play();
            if( this.fangxiang == "s"){
                this.game.map.code[this.row+1][this.col] = 3;
               
            }else if(this.fangxiang == "z"){
                this.game.map.code[this.row][this.col+1] = 3;
                //this.game.b.play();
            }else if(this.fangxiang == "y"){
                this.game.map.code[this.row][this.col] = 3;
                //this.game.b.play();
            }else if(this.fangxiang == "x"){
                this.game.map.code[this.row][this.col] = 3;
                //this.game.b.play();
            } 
        }
    }
}
Ball.prototype.die = function(){
    if(this.x == this.game.guai.x && this.y == this.game.guai.y){
        clearInterval(this.game.timer);
        alert("GAME OVER");
    }else if(this.x == this.game.guai2.x && this.y == this.game.guai2.y){
        clearInterval(this.game.timer);
        alert("GAME OVER");
    }
}
Ball.prototype.render = function(){
    this.game.ctx.drawImage(this.game.R[ this.fangxiang+ this.step+".png"],0,0,20,20,this.x,this.y,24,24);
}