window.onload = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var inf = document.getElementById('info');
  var blueShades = ['#AED6F1', '#85C1E9', '#5DADE2', '#3498DB','#2E86C1','#1F618D','#1B4F72']
  var prevX;
  var prevY;
  var circles = [];


  // For pointer
  // If pointer on the canvas display a red dot whereever the pointer is.
  canvas.addEventListener("mousemove", function() {
    inf.innerHTML = '('+ prevX + ', ' + prevY + ')';
    // Create a white dot at the previous position of the red dot
    dot(prevX,prevY,'white', 5.8);

    // Get current mouse x,y
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;

    // Display a red dot at the current postion of pointer.
    dot(x,y,'red', 5);

    // Replace the previous x,y with new x,y
    prevX = x;
    prevY = y;

  });

  // Create a red.
  function dot(xVal,yVal, col, siz) {
    ctx.beginPath();
    ctx.arc(xVal,yVal, siz, 0, 2 * Math.PI); //x, y, radius, start angle, end angle
    ctx.fillStyle  = col;
    ctx.fill();
    ctx.closePath();
  }

  // For Circle obsticals
  // Circle Obejct
  function Circle(xPos, yPos, siz, col, speed) {
    this.col = col;
    this.xPos = xPos;
    this.yPos = yPos;
    this.siz = siz;
    this.speed = speed;
    this.xVel = 0;
    this.yVel = 0;
    this.xdir = 0;
    this.ydir = 0;


    let xdir = Math.floor(Math.random() * 3);
    if (xdir === 0 ) {
      this.xSign = 0;
    } else if (xdir === 1) {
      this.xSign = 1;
    } else {
      xSign = -1;
    }

    let ydir = Math.floor(Math.random() * 3);
    if (ydir === 0 ) {
      this.ySign = 0;
    } else if (ydir === 1) {
      this.ySign = 1;
    } else {
      ySign = -1;
    }
  }

  // function direction() {
  //   let dir = Math.floor(Math.random() * 2);
  // }

  // Create an update method for Circle object
  Circle.prototype.update = function() {
    this.xVel += this.xSign *  this.speed;
    this.yVel += this.ySign *  this.speed;
    //this.counter += this.direction * this.speed;
    ctx.beginPath();
    ctx.arc(this.xPos + this.xVel, this.yPos+this.yVel,this.siz,0,2*Math.PI, false);
    ctx.closePath();
    ctx.fillStyle = this.col;
    ctx.fill();
  }


  // Create many circles and put in circle list
  function drawCircles() {
    for (var i = 50; i >= 0; i--) {
      var xPos = Math.floor(Math.random()*601);
      var yPos = Math.floor(Math.random()*601);
      var siz = Math.floor(Math.random()*50) + 3;
      var col = blueShades[Math.floor(Math.random()*blueShades.length)];
      var speed = 0.2 + Math.random() * 3;
      var circle = new Circle(xPos, yPos, siz, col, speed)
      circles.push(circle);
    }

    draw();
  }

  drawCircles();

  // For each circle call update and make circle move.
  function draw() {
    ctx.clearRect(0, 0, 600, 600);
    for (var i = 0; i < circles.length; i++) {
      var myCircle = circles[i];
      myCircle.update();
    }

    requestAnimationFrame(draw);
  }
}




/*

- when the mouse move event occurs a red circle is drawn
-  and moves to where to mouse is.
- after very x and y movement
- the canvas is cleared

*/
