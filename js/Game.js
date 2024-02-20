class Game {
    constructor(width,height,deltaTime){
        this.width = width;
        this.height = height;
        this.player = new Player(this);
        this.keys = [];
        this.input = new InputHandler(this);
        this.ammo = 20;
        this.ammoInterval = 500;
        this.maxAmmo = 50;
        this.ammoTimer = 0;
        this.ui = new UI (this);
        this.enemies = [];
        this.enemyTimer = 0;
        this.enemyInterval = 1000;
        this.gameOver = false;
        

    }
    update(deltaTime){
        this.player.update();

        if(this.ammoTimer>this.ammoInterval){
            if(this.ammo<this.maxAmmo){this.ammo++};
            this.ammoTimer = 0;

        }else{
            this.ammoTimer += deltaTime;
        };

        if (this.enemyTimer > this.enemyInterval && !this.gameOver && this.enemies.length<10){
            this.addEnemy();
            this.enemyTimer = 0;
            
        }else{
            this.enemyTimer += deltaTime;
        }
      
        this.enemies.forEach(enemy =>{ 
            enemy.update();
            if (this.checkCollision(this.player,enemy)){
                enemy.marker = true;
            }
            this.player.projectiles.forEach(projectile =>{
                if (this.checkCollision1(projectile,enemy)){
                    projectile.marker = true;
                    enemy.marker = true;
                }
            });
        });
        this.enemies = this.enemies.filter(enemy => !enemy.marker);




    }
    draw(context){
        this.player.draw(context)
        this.ui.draw(context)
        this.enemies.forEach(enemy => enemy.draw(context))
    }
    addEnemy(){
        const randommize = Math.random();
        if (randommize<1){this.enemies.push(new Angler1(this))}
    }
    checkCollision(rect1,rect2){
        return(
            rect1.y-10 < rect2.y && rect2.y < rect1.y && rect1.x < rect2.x+rect2.width && rect2.x < rect1.x+rect1.width

        )

    }
    checkCollision1(rect1,rect2){
        return(
            rect1.y - 8 < rect2.y && rect2.y < rect1.y && rect1.x < rect2.x+rect2.width && rect2.x < rect1.x+rect1.width

        )

    }
}
