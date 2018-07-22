// const shootingStart = new function () {
//   const stars = [];
//
//   function Star(volume) {
//
//     this.x = Math.random() * width;
//     this.y = 0;
//     this.size = volume;
//     this.color = '#ffe500';
//     this.life = 60;
//     this.vx = Math.random() * 10 - 5;
//     this.vy = +Math.random() * 5;
//     this.points = [];
//     this.update = () => {
//       this.x += this.vx;
//       this.y += this.vy;
//     };
//     return this;
//   };
//
//   this.generate = (volume) => {
//     if (volume > 0.001)
//       stars.push(new Star(volume * 200));
//   };
//
//   let tick = 0;
//   let createIndex = 0;
//   this.update = () => {
//
//     for(let i = 0; i < stars.length; i++){
//       for(let j = 0; j < 60; i++){
//
//       }
//     }
//
//   };
//
// };
//
// function setup() {
//   const $root = $('body');
//   console.log($root.width(), $root.height());
//   const canvas = createCanvas($root.width(), $root.height());
//   canvas.parent('background');
//   console.log(canvas);
//   background(0);
//
//   shootingStart.generate();
//
//   mic = new p5.AudioIn();
//   mic.start();
//
// }
//
// let mic;
//
// function draw() {
//   // background(255);
//   shootingStart.generate(mic.getLevel());
//   shootingStart.update(mic.getLevel());
// }

// const shootingStart = new function () {
//   const stars = [];
//
//
//
//   function Star() {
//
//     this.x = Math.random() * width;
//     this.y = 0;
//     this.size = 10;
//     this.color = '#ffe500';
//     this.life = 60;
//     this.vx = Math.random() * 10 - 5;
//     this.vy = +Math.random() * 5;
//
//     this.update = () => {
//       this.x += this.vx;
//       this.y += this.vy;
//     };
//     return this;
//   };
//
//   this.generate = () => {
//     for (let i = 0; i < 300; i++) {
//       stars.push(new Star());
//     }
//   };
//
//   let tick = 0;
//   let createIndex = 0;
//   this.update = (volume) => {
//
//     const count = volume * 50;
//     if (_.isEmpty(stars)) return;
//
//     // console.log('ss');
//
//     tick++;
//     if (tick % 30 === 0) {
//       const p = stars[createIndex];
//       p.x = Math.random() * width;
//       p.y = 0;
//       p.life = 500;
//       p.size = count + 2;
//       createIndex++;
//       createIndex %= 300;
//     }
//
//     for (var i = 0; i < count; i++) {
//       const p = stars[createIndex];
//       p.x = Math.random() * width;
//       p.y = 0;
//       p.life = 500;
//       p.size = count + 2;
//       createIndex++;
//       createIndex %= 300;
//     }
//
//
//     // blendMode(BLEND);
//     // blendMode(MULTIPLY);
//     background(255, 255, 255, 25);
//
//
//     _.forEach(stars, particle => {
//       if (particle.life <= 0) return;
//       particle.update();
//       particle.life--;
//       fill(255, 242, 0);
//       console.log('s', particle.x, particle.y, particle.size);
//       ellipse(particle.x,
//         particle.y,
//         particle.size,
//         particle.size);
//     });
//   };
//
// };
//
// function setup() {
//   const $root = $('body');
//   console.log($root.width(), $root.height());
//   const canvas = createCanvas($root.width(), $root.height());
//   canvas.parent('background');
//   console.log(canvas);
//   background(0);
//
//   shootingStart.generate();
//
//   mic = new p5.AudioIn();
//   mic.start();
//
// }
//
// let mic;
//
// function draw() {
//
//   background(0);
//   if (mic.getLevel() > 0.0001)
//     shootingStart.update(mic.getLevel());
//   // console.log(mic.getLevel());
// }


// const shootingStart = new function () {
//   // 이거 ... 점들 계속 나오는거
//
//   const stars = [];
//
//   function Star() {
//
//     this.x = Math.random() * width;
//     this.y = 0;
//     this.size = 0;
//     this.color = '#ffe500';
//     this.life = 60;
//     this.vx = Math.random() * 10 - 5;
//     this.vy = +Math.random() * 5;
//
//     this.update = () => {
//       this.x += this.vx;
//       this.y += this.vy;
//     };
//     return this;
//   };
//
//   this.generate = () => {
//     for (let i = 0; i < 300; i++) {
//       stars.push(new Star());
//     }
//   };
//
//   let tick = 0;
//   let createIndex = 0;
//   this.update = (volume) => {
//
//     const count = volume * 50;
//     if (_.isEmpty(stars)) return;
//
//     // console.log('ss');
//
//     tick++;
//     if (tick % 30 === 0) {
//       const p = stars[createIndex];
//       p.x = Math.random() * width;
//       p.y = 0;
//       p.life = 500;
//       p.size = count + 2;
//       createIndex++;
//       createIndex %= 300;
//     }
//
//     for (var i = 0; i < count; i++) {
//       const p = stars[createIndex];
//       p.x = Math.random() * width;
//       p.y = 0;
//       p.life = 500;
//       p.size = count + 2;
//       createIndex++;
//       createIndex %= 300;
//     }
//
//
//     // blendMode(BLEND);
//     // blendMode(MULTIPLY);
//     background(255, 255, 255, 25);
//
//
//     _.forEach(stars, particle => {
//       if (particle.life <= 0) return;
//       particle.update();
//       particle.life--;
//       fill(255, 242, 0);
//       console.log('s', particle.x, particle.y, particle.size);
//       ellipse(particle.x,
//         particle.y,
//         particle.size,
//         particle.size);
//     });
//   };
//
// };
//
// function setup() {
//   const $root = $('body');
//   console.log($root.width(), $root.height());
//   const canvas = createCanvas($root.width(), $root.height());
//   canvas.parent('background');
//   console.log(canvas);
//   background(0);
//
//   shootingStart.generate();
//
//   mic = new p5.AudioIn();
//   mic.start();
//
// }
//
// let mic;
//
// function draw() {
//
//   background(0);
//   if (mic.getLevel() > 0.0001)
//     shootingStart.update(mic.getLevel());
// }

const shootingStart = new function () {
  const stars = [];
  
  function Star() {
    
    this.x = Math.random() * width;
    this.y = 0;
    this.size = 10;
    this.color = '#ffe500';
    this.life = 60;
    this.vx = Math.random() * 10 - 5;
    this.vy = +Math.random() * 5;
    
    this.update = () => {
      this.x += this.vx;
      this.y += this.vy;
    };
    return this;
  };
  
  this.generate = () => {
    for (let i = 0; i < 300; i++) {
      stars.push(new Star());
    }
  };
  
  let tick = 0;
  let createIndex = 0;
  this.update = (volume) => {
    
    const count = volume * 50;
    if (_.isEmpty(stars)) return;
    
    // console.log('ss');
    
    tick++;
    if (tick % 30 === 0) {
      const p = stars[createIndex];
      p.x = Math.random() * width;
      p.y = 0;
      p.life = 500;
      p.size = count + 2;
      createIndex++;
      createIndex %= 300;
    }
    
    for (var i = 0; i < count; i++) {
      const p = stars[createIndex];
      p.x = Math.random() * width;
      p.y = 0;
      p.life = 500;
      p.size = count + 2;
      createIndex++;
      createIndex %= 300;
    }
    
    
    // blendMode(BLEND);
    // blendMode(MULTIPLY);
    background(255, 255, 255, 25);
    
    
    _.forEach(stars, particle => {
      if (particle.life <= 0) return;
      particle.update();
      particle.life--;
      fill(255, 242, 0);
      console.log('s', particle.x, particle.y, particle.size);
      ellipse(particle.x,
        particle.y,
        particle.size,
        particle.size);
    });
  };
  
};

function setup() {
  const $root = $('body');
  console.log($root.width(), $root.height());
  const canvas = createCanvas($root.width(), $root.height());
  canvas.parent('background');
  console.log(canvas);
  background(0);
  
  shootingStart.generate();
  
  mic = new p5.AudioIn();
  mic.start();
  
}

let mic;

function draw() {
  
  background(0);
  if (mic.getLevel() > 0.0001)
    shootingStart.update(mic.getLevel());
}