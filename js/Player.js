class Player {
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = 20;
        this.y = 690;
        this.speedX = 0;
        this.image = document.getElementById('player');
        this.maxSpeed = 8;
        this.projectiles = [];

    }
    update(){
        if (this.game.keys.includes('ArrowLeft')){
            this.speedX = -this.maxSpeed
            if (this.x<(0-this.width/2)){
                this.speedX = 0
            }
        }else if ((this.game.keys.includes('ArrowRight'))){
            this.speedX = this.maxSpeed
            if(this.x>this.game.width-this.width/2){
                this.speedX = 0
            }
            
        }else{this.speedX = 0};
        
        this.x += this.speedX;
        //снаряды
        this.projectiles.forEach(pr=>{pr.update()})
        this.projectiles = this.projectiles.filter(pr => !pr.marker)

    }
    draw(context){
        context.drawImage(this.image,this.x,this.y,this.width,this.height)
        this.projectiles.forEach(pr => pr.draw(context))
    }

    shootTop(){
        if (this.game.ammo>0){
            this.projectiles.push(new Projectile(this.game,this.x+50,this.y-100));
            this.game.ammo --;
        }
    }
 
}