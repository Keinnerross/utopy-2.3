let width = 1080;
let height = 500;

class Ameba {
  constructor() {
    this.x = 300;
    this.y = 300;
    this.steps = 2;
    this.vitality = 30;
    this.fertility = true;
    this.aptosis = false;
  }
  mind() {
    if (bigAmeba.vitality >= 30) {
      const r = Math.random();
      if (r < 0.5) {
        mitosis()
      } else {
        this.fertility = false;
        this.aptosis = true;
        //   aptosis()
      }
    }
    this.mind();
  }
}

const mitosis = () => {
  console.log("Reproducido pa");
  const sonAmeba = new Ameba();
  sonAmeba.mind();
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

  chase();
}
