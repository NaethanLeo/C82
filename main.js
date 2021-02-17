mouseEvent = "empty";
var lastX, lastY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width = 1;

canvas.addEventListener("mouseDown", mDown);

function mDown(e){
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", mMove);

function mMove(e){
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;

    console.log("x =" + currentX + ", y = " + currentY);

    if (mouseEvent == "mouseDown"){
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("last position of x and y = " );
        console.log("x =" + lastX + ", y = " + lastY);
        ctx.moveTo(lastX, lastY);

        console.log("current position of x and y = " );
        console.log("x =" + currentX + ", y = " + currentY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }

    lastX = currentX;
    lastY = currentY;
}

canvas.addEventListener("mouseup", mUp);

function mUp(e){

    mouseEvent = "mouseup";

}

canvas.addEventListener("mouseleave", mLeave);

function mLeave(e){

    mouseEvent = "mouseleave";

}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}