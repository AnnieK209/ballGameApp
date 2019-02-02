window.onload = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var inf = document.getElementById('info');

  var prevX;
  var prevY;

  canvas.addEventListener("mousemove", function() {
    inf.innerHTML = '('+ prevX + ', ' + prevY + ')';
    dot(prevX,prevY,'white', 5.8);
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Get current mouse x,y
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;

    dot(x,y,'red', 5);

    // Replace the previous x,y with new x,y
    prevX = x;
    prevY = y;

  });

  function dot(xVal,yVal, col, siz) {
    ctx.beginPath();
    ctx.arc(xVal,yVal, siz, 0, 2 * Math.PI); //x, y, radius, start angle, end angle
    ctx.fillStyle  = col;
    ctx.fill();
    ctx.strokeStyle = col;

    ctx.closePath();
  }

  function drawCircles() {
    for (var i = 30; i >= 0; i--) {
      ctx.beginPath();
      var xPos = Math.floor(Math.random()*601);
      var yPos = Math.floor(Math.random()*601);
      var siz = Math.floor(Math.random()*50);
      ctx.arc(xPos,yPos,siz,0,2*Math.PI);
      ctx.fillStyle = 'blue';
      ctx.fill();
    }
  }

  drawCircles();


}




/*

- when the mouse move event occurs a red circle is drawn
-  and moves to where to mouse is.
- after very x and y movement
- the canvas is cleared

*/
