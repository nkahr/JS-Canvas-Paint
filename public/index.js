var populateDropDown = function() {
  var dropDown = document.getElementById('dropdown');
  for (var i = 1; i <= 30; i++) {
    var option = document.createElement('option');
    option.innerText = i.toString();
    dropDown.appendChild(option);
  }
}



var app = function() {

  var canvas = document.querySelector("#main-canvas");
  var context = canvas.getContext("2d");

  // context.strokeStyle = "dodgerBlue";

  // context.fillStyle = 'green';
  // context.fillRect(10, 10, 50, 50);
  // context.fillRect(10, 100, 50, 50);

  // context.beginPath();
  // context.moveTo(200, 200);
  // context.lineTo(200, 300);
  // context.lineTo(100, 300);
  // context.closePath();
  // context.stroke(); 

  // context.beginPath();
  // context.arc(400, 400, 100, 0, Math.PI * 2, true); 
  // context.stroke(); 

  // var drawCircle = function(x,y) {
  //   context.beginPath();
  //   context.arc(x, y, 10, 0, Math.PI * 2, true); 
  //   context.stroke();
  // }



  populateDropDown();

  var eventListener = function(event) {
    var currentPosition = getMousePos(canvas, event);
    var xPos = currentPosition.x;
    var yPos = currentPosition.y;
    context.lineTo(xPos, yPos);
    context.stroke();
  }

  canvas.onmousedown = function(event) {
    changeColor();
    context.beginPath();
    context.moveTo(event.x, event.y);
    canvas.addEventListener('mousemove', eventListener, false);
  }

  canvas.onmouseup = function(event) {
    canvas.removeEventListener('mousemove', eventListener, eventListener);
  }

  var changeColor = function() {
    console.log(context);
    context.strokeStyle = this.value;
  }

  var colorPicker = document.querySelector('#input-color');
  colorPicker.onchange = changeColor;

  function getMousePos(canvas, event) {
    return {
      x: event.clientX,//clientX - rect.left,
      y: event.clientY//clientY - rect.top
    };
  }

  var handleSelectChange = function(event) {
    context.lineWidth = this.value;
  }

  var dropDown = document.getElementById('dropdown');
  dropDown.onchange = handleSelectChange;

}

window.onload = app;