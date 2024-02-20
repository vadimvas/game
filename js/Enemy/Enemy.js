class Enemy {
    constructor(game){
        this.game = game;
        this.y = 10;
        this.speedY = Math.random();
        this.marker = false;
     
    }
    update(){
        this.y += this.speedY;
        if (this.y > 800){this.marker = true}
    }
    draw(context){
        context.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
}

class Angler1 extends Enemy {
    constructor(game){
        super(game)
        this.width = 100;
        this.height = 100;
        this.x = Math.random()*(this.game.width*0.95)
        this.image = document.getElementById('alien1')
    }
    draw(context){
        context.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
  
}