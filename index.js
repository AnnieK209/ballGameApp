
window.onload = function() {
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');


  canvas.addEventListener("mousemove", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc((event.pageX - canvas.offsetLeft), (event.pageY - canvas.offsetTop), 5, 0, 2 * Math.PI); //x, y, radius, start angle, end angle
    ctx.fillStyle  = 'red';
    ctx.fill();
    ctx.strokeStyle = 'red';
    ctx.stroke();

  });
}
