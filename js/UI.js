class UI {
    constructor(game){
        this.game = game;
        this.color = 'red';
    }
    draw(context){
        context.save();
        context.fillStyle = this.color;
        context.font = "20px arial"
        context.fillText('SCORE : '+this.game.score,20,40);
      
      
        for (let i = 0; i < this.game.ammo; i++){
            context.fillRect(5*i+20,50,3,20);
            
        }
        context.restore();
    }
}