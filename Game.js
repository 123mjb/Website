
var myGameComponent;  
  
function startGame() {  
    myGameArea.start();  
    myGameComponent = new component(30, 20, "blue", 20, 120);  
}  
  
var myGameArea = {  
    canvas : document.createElement("canvas"),  
    start : function() {  
        this.canvas.width = 600;  
        this.canvas.height = 600;  
        thisthis.context = this.canvas.getContext("2d");  
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);  
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
    this.update = function(){   
    ctx = myGameArea.context;  
    ctx.fillStyle = color;  
    ctx.fillRect(this.a, this.b, this.width, this.height);  
}  
}  
  
function updateGameArea() {  
    myGameArea.clear();  
    myGameComponent.update();  
}  