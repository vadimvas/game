class Projectile {
    constructor(game,x,y){
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = 6;
        this.height = 16;
        this.speed = 5;
        this.marker = false;
        this.image = document.getElementById('patron')
    }
    update(){
        this.y -= this.speed;
        if (this.y < 50){this.marker = true }

    }
    draw(context){
        context.drawImage(this.image,this.x-2,this.y+100,this.width,this.height)
    }
}