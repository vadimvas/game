class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 65;
        this.fontFamaly = 'Helvetica';
        this.color = 'red';
    }
    draw(context){
        context.fillStyle = this.color;
        for (let i = 0; i < this.game.ammo; i++){
            context.fillRect(5*i+20,50,3,20)
            context.fillText('SCORE',70,20,700)
        }
    }
}