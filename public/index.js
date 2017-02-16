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
      x: event.x,
      y: event.y
    };
  }

  var handleSelectChange = function(event) {
    context.lineWidth = this.value;
  }

  var dropDown = document.getElementById('dropdown');
  dropDown.onchange = handleSelectChange;

}

window.onload = app;