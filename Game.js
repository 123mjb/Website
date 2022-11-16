function startGame() {
    myGameArea.initialize();
    myGameComponent = new component(30, 20, "blue", 20, 120);  
}
var myGameArea = {
    canvas : document.getElementById("Game"),
    initialize : function() {
        this.context = this.canvas.getContext("2d");
    this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {  
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);  
    }  
}
function component(width, height, color, a, b) {  
    this.width = width;  
    this.height = height;  
    this.a = a;  
    this.b = b;     
    this.update = function() {   
    ctx = myGameArea.context;  
    ctx.fillStyle = color;  
    ctx.fillRect(this.a, this.b, this.width, this.height);  
}  
}  
  
function updateGameArea() {  
    myGameArea.clear();  
    myGameComponent.update();  
}  