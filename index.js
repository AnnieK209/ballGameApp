var mouseX;
var mouseY;

window.onload = function() {
  var canvas = document.getElementById('canvas');
  var coords = document.getElementById('coordinates');
  ctx = canvas.getContext('2d');
  document.addEventListener("mouseover", function() {
    coords.innerHTML = ('x: '+ event.clientX + ', y: '+ event.clientY);

    ctx.beginPath();
    ctx.arc(event.clientX, event.clientY, 5, 0, 2 * Math.PI); //x, y, radius, start angle, end angle,  - dont really need this false (anti clockwise)/true
    ctx.fillStyle  = 'red';
    ctx.fill();
    ctx.strokeStyle = 'red';
    ctx.stroke();

  });
}






/* set up canvas */

// instance of canvas rendering 2d object
//represents a flat surface whose origin is 0,0
//at top left. x value increase as you go left
// y value increase as you go down
 //context object - can access context methods and properties.
//
// let dot = function() {
//   ctx.beginPath();
//   ctx.arc(300, 300, 5, 0, 2 * Math.PI); //x, y, radius, start angle, end angle,  - dont really need this false (anti clockwise)/true
//   ctx.fillStyle  = 'red';
//   ctx.fill();
//   ctx.strokeStyle = 'red';
//   ctx.stroke();
// }
