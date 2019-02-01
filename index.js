window.onload = function() {
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  canvas.addEventListener("mousemove", function circle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc((event.pageX - canvas.offsetLeft), (event.pageY - canvas.offsetTop), 5, 0, 2 * Math.PI); //x, y, radius, start angle, end angle
    ctx.fillStyle  = 'red';
    ctx.fill();
    
  });
}


/*

- when the mouse move event occurs a red circle is drawn
-  and moves to where to mouse is.
- after very x and y movement
- the canvas is cleared

*/
