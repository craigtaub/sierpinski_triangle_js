console.log('sierpinski_triangle:')

// file:///Users/craigtaub/Documents/javascript/delete/sierpinski_triangle/native/index.html


let dots = [];

const targetSize = 31; // 35fps
// const targetSize = 15.625; // 12fps
let scale = 1;
// const targetSize = 1;

function dot(props) {
  // document.getElementById('app').innerHTML += "<span class='dot' style='transform: scaleX(" + (scale / 2.1) + ") scaleY(0.7) translateZ(0.1px); left: " + props.x + "; top: " + props.y + "; padding-left: " + 2 * props.text + "px'>" + props.text + "</span>";
  // document.getElementById('app').innerHTML += "<span class='dot' style='left: " + props.x + "; top: " + props.y + "; padding-left: " + 2 * props.text + "px'>" + props.text + "</span>";
  // dots.push("<span class='dot' style='left: " + props.x + "; top: " + props.y + "; padding-left: " + 2 * props.text + "px'>" + props.text + "</span>");
  
  dots.push("<span class='dot' style='transform: scaleX(" + (scale / 2.1) + ") scaleY(0.7) translateZ(0.1px); left: " + props.x + "; top: " + props.y + "; padding-left: " + 2 * props.text + "px'>" + props.text + "</span>");
}

function triangle(props) {
  let s = props.s;
  if (s <= targetSize) {
    return dot({
      x: props.x - (targetSize / 2),
      y: props.y - (targetSize / 2),
      size: targetSize,
      text: props.seconds,
    });
  }

  s = s / 2;

  triangle({
    x: props.x,
    y: props.y - (s / 2),
    s: s,
    seconds: props.seconds
  }),
  triangle({
    x: props.x - s,
    y: props.y + (s / 2),
    s: s,
    seconds: props.seconds
  }),
  triangle({
    x: props.x + s,
    y: props.y + (s / 2),
    s: s,
    seconds: props.seconds
  });

}

function app() {
  let seconds = 0;
  let elapsed;
  const start = Date.now();

  function nextFrame() {
    elapsed = Date.now() - start;
    const t = (elapsed / 1000) % 10;
    scale = 1 + (t > 5 ? 10 - t : t) / 10;

    window.requestAnimationFrame(() => { 
    // setTimeout(() => {
      // TELL browser want to perform animation, will call this BEFORE it calls next repaint.
        // i.e. batch all actions in here for single repaint/reflow + less DOM throttle.
      // USE to interact with CSS/HTML via JS.
      // CAN call 60 times per second BUT has intelligence to match display refresh rate in browser.

      // 12fps
      const string = dots.reduce((acc, curr) => curr += acc, '');
      document.getElementById('app').innerHTML = string;
      nextFrame();
    // }, 1000);
    });
  };
  function nextSecond() {
    seconds = (seconds > 9) ? 0 : seconds + 1;
    setTimeout(() => {
      nextSecond();
      topTriangle(seconds);

      // 1fps
      // const string = dots.reduce((acc, curr) => curr += acc, '');
      // document.getElementById('app').innerHTML = string;
    }, 1000);
  }

  function topTriangle(seconds) {
    dots = [];
    document.getElementById('app').innerHTML = ''; // reset
    triangle({
      x: 0,
      y: 0,
      s: 600, // 1000
      seconds
    });
  }
  
  nextFrame();
  nextSecond();

  topTriangle(seconds);
}

app();
