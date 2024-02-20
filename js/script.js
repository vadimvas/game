
window.addEventListener('load', function () {
    const canvas = this.document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1500;
    canvas.height = 800;   
    let button2 = this.document.querySelector('#button2') ;

    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;
    

    function animate(currentTime) {
        const deltaTime = currentTime - lastTime;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.draw(ctx);
        game.update(deltaTime);
        lastTime = currentTime;
      
        requestAnimationFrame(animate)
    }
    animate(0)
   

})
    
    


 


















