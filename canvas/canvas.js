console.log('start');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
 
var trgs    = []; // array of triangles
var dim     = 500; // dimension of main triangle  

// NOTE: canvas y starts top-left.
// (Math.sqrt(3)*dim)/2 = formula for the top vertex

var trg = { // declare main triangle: 3 verticies, each with x,y
  c:  "black", // extra
  ly: canvas.height,
  lx: 0,
  ry: canvas.height,
  rx: dim,
  ty: canvas.height - (Math.sqrt(3)*dim)/2,
  tx: dim/2,
  di: dim // extra
};

trgs.push(trg); // add to array


fractal_iteration();
fractal_iteration();
fractal_iteration();



function fractal_iteration() {
  ctx.clearRect(0,0,canvas.width,canvas.height); // clear screen each iteration
  for (var i in trgs) { // iterate thru all triangles to find black ones
    if (trgs[i].c == "black") {

      var trg = { // white trangle
        c:  "white",
        ly: (trgs[i].ly + trgs[i].ty) / 2,
        lx: (trgs[i].lx + trgs[i].tx) / 2,
        ry: (trgs[i].ry + trgs[i].ty) / 2,
        rx: (trgs[i].rx + trgs[i].tx) / 2,
        ty: trgs[i].ty + (Math.sqrt(3)*trgs[i].di)/2,
        tx: trgs[i].tx,
        di: trgs[i].di/2
      };
         
      trgs.push(trg);

      // (first one, on the top)
      var trg = {
        c:  "black",
        ly: (trgs[i].ly + trgs[i].ty) / 2,
        lx: (trgs[i].lx + trgs[i].tx) / 2,
        ry: (trgs[i].ry + trgs[i].ty) / 2,
        rx: (trgs[i].rx + trgs[i].tx) / 2,
        ty: trgs[i].ty,
        tx: trgs[i].tx,
        di: trgs[i].di/2
      };
   
      trgs.push(trg);
   
      // (second one, on the left)
      var trg = {
        c:  "black",
        ly: trgs[i].ly,
        lx: trgs[i].lx,
        ry: (trgs[i].ry + trgs[i].ly) / 2,
        rx: (trgs[i].rx + trgs[i].lx) / 2,
        ty: (trgs[i].ty + trgs[i].ly) / 2,
        tx: (trgs[i].tx + trgs[i].lx) / 2,
        di: trgs[i].di/2
      };
      
      trgs.push(trg);
   
      // (third one, on the right)
      var trg = {
        c:  "black",
        ly: (trgs[i].ly + trgs[i].ry) / 2,
        lx: (trgs[i].lx + trgs[i].rx) / 2,
        ry: trgs[i].ry,
        rx: trgs[i].rx,
        ty: (trgs[i].ty + trgs[i].ry) / 2,
        tx: (trgs[i].tx + trgs[i].rx) / 2,
        di: trgs[i].di/2
      };
      
      trgs.push(trg);
   
   
    } // if "black"
    
  }

  // draw trgs
  for (i in trgs) {
      drawTrg(trgs[i]); // iterate AGAIN thru all triangles + draw them
  }   
};

function drawTrg(t){ // seperate all calls to canvas context
  ctx.beginPath();
  ctx.moveTo(t.lx, t.ly);
  ctx.lineTo(t.rx, t.ry);
  ctx.lineTo(t.tx, t.ty);
  ctx.lineTo(t.lx, t.ly);
  ctx.fillStyle = t.c;
  ctx.fill();

  ctx.fillStyle = 'red';
  ctx.fillText("Hello", t.lx+20,t.ly-20); // centre text
  ctx.closePath();
};