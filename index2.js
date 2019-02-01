window.onload = function() {
  let mouseX = 0;
  let mouseY = 0;
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var canvasPos = getPos(canvas);

   canvas.addEventListener("mousemove", setMousePos, false);

   function setMousePos(e) {
     mouseX = e.pageX - canvasPos.x;
     mouseY = e.pageY - canvasPos.y;
   }

  function circleUpdate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 5, 0, 2 * Math.PI, true); //x, y, radius, start angle, end angle
    ctx.fillStyle  = 'red';
    ctx.fill();
    requestAnimationFrame(circleUpdate);
  }

  circleUpdate();

  function getPos(el) {
    var xPos = 0;
    var yPos = 0;

    while (el) {
      xPos += el.offsetLeft;
      yPos += el.offsetTop;
      el = el.offsetParent;
    }

    return {
      x: xPos,
      y: yPos
    };
  }

}

/*

- when the mouse move event occurs the x and y coordinates are noted
- these coordinates are altered to keep within the canvas
- and then the action of a circle being draw happens at the
- x and y coordinates of the mouse (info from event occuring)
- everytime the coordinate changes the canvas is cleared.

*/
