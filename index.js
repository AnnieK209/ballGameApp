window.onload = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var inf = document.getElementById('info');
  //info.innerHTML = x + ' , ' + y;
  var prevX = 300;
  var prevY = 300;
  var coordArr = [[300,300]]



  canvas.addEventListener("mousemove", function() {
    inf.innerHTML = coordArr;
    dot(coordArr[0][0],coordArr[0][1],'white', 5.8);
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    //dot(x+1,y+1,'white');
    dot(x,y,'red', 5);
    coordArr[0] = [x,y];


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
