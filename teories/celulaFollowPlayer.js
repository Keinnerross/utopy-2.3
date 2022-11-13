let width = 1080;
let height = 500;

let player = {
  x: width / 2,
  y: height / 2,
  size: 10,
  steps: 12,
};

let celula = {
  x: width / 4,
  y: height / 4,
  size: 20,
  steps: 0.5,
};  

const chase = () => {
  if (celula.x != player.x || celula.y != player.y) {
    if (celula.x > player.x) {
      celula.x = +celula.x - celula.steps;
    } else {
      celula.x = +celula.x + celula.steps;
    }
    if (celula.y > player.y) {
      celula.y = +celula.y - celula.steps;
    } else {
      celula.y = +celula.y + celula.steps;
    }
  }
};

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(90);
  fill(255, 0, 0);
  ellipse(player.x, player.y, player.size, player.size);

  fill(255, 204, 0);
  ellipse(celula.x, celula.y, celula.size, celula.size);
  noStroke();



  
  /*Controls Player */
  if (keyIsDown(87)) {
    player.y -= player.steps;
  }
  if (keyIsDown(83)) {
    player.y += player.steps;
  }
  if (keyIsDown(68)) {
    player.x += player.steps;
  }
  if (keyIsDown(65)) {
    player.x -= player.steps;
  }

  
  chase();
}

