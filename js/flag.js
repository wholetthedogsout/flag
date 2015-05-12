// Get the canvas context
var ctx = document
  .querySelector('canvas')
  .getContext('2d');

// Fix a stupid context bug that blurs
// the pixels
ctx.translate(0.5, 0.5);

//
// TODO: Put all drawing logic and shtuff here...

//Stripes
function drawstripes(stripex, stripey) {
  var barWidth = 700;
  var barHeight = 30;
  var i = 0;
  while (i <= 6) {
    ctx.fillStyle="red";
        ctx.fillRect(
          0,
          barHeight * i * 2,
          barWidth,
          barHeight);
          ++i;
  }
}
drawstripes();

//Blue Rectangle
function drawblue (){
ctx.fillStyle="blue";
ctx.fillRect(0,0,330,210);
}
drawblue();

//Stars
ctx.fillStyle="white";
function drawStar (cx,cy,spikes,outerRadius,innerRadius) {
   var rot=Math.PI/2*3;
   var x=cx;
   var y=cy;
   var step=Math.PI/spikes;

   ctx.strokeSyle="#000";
   ctx.beginPath();
   ctx.moveTo(cx,cy-outerRadius)
   for(i=0;i<spikes;i++){
     x=cx+Math.cos(rot)*outerRadius;
     y=cy+Math.sin(rot)*outerRadius;
     ctx.lineTo(x,y)
     rot+=step

     x=cx+Math.cos(rot)*innerRadius;
     y=cy+Math.sin(rot)*innerRadius;
     ctx.lineTo(x,y)
     rot+=step
   }
   ctx.lineTo(cx,cy-outerRadius)
   ctx.stroke();
   ctx.closePath();
   ctx.fill();
   ctx.fillStyle="white";
 }

 function stars6 () {
    var starwidth=55;
    var h=0;
    var points=5
    var ir=7
    var or=15
    while (h<=5) {
    drawStar(28 + starwidth * h, 20, points, or, ir);
    ++h;
  }
  }

  function stars66 () {
     var starwidth=55;
     var h=0;
     var points=5
     var ir=7
     var or=15
     while (h<=5) {
     drawStar(28 + starwidth * h, 75, points, or, ir);
     ++h;
   }
   }
   function stars666 () {
      var starwidth=55;
      var h=0;
      var points=5
      var ir=7
      var or=15
      while (h<=5) {
      drawStar(28 + starwidth * h, 130, points, or, ir);
      ++h;
    }
    }

    function stars6666 () {
       var starwidth=55;
       var h=0;
       var points=5
       var ir=7
       var or=15
       while (h<=5) {
       drawStar(28 + starwidth * h, 185, points, or, ir);
       ++h;
     }
     }

function stars5 () {
  var starwidth=55;
  var h=0;
  var points=5
  var xstart=55
  var ir=7
  var or=15
  while (h<=4) {
  drawStar(xstart + starwidth * h, 50, points, or, ir);
  ++h;
  }
}

function stars55 () {
  var starwidth=55;
  var h=0;
  var points=5
  var xstart=55
  var ir=7
  var or=15
  while (h<=4) {
  drawStar(xstart + starwidth * h, 105, points, or, ir);
  ++h;
  }
}

function stars555 () {
  var starwidth=55;
  var h=0;
  var points=5
  var xstart=55
  var ir=7
  var or=15
  while (h<=4) {
  drawStar(xstart + starwidth * h, 160, points, or, ir);
  ++h;
  }
}

function stargrid () {
  stars5();
  stars6();
  stars55();
  stars66();
  stars555()
  stars666();
  stars6666();
}

stargrid ();
