let width = 1080;
let height = 500;

let id = 0;
let muertes = 0;
function setup() {
  createCanvas(width, height);
}

/******************************************* RENDER************************************ */
function draw() {
  let amebas = [];
  let population = 0;
  let view = document.querySelector(".view-population");
  view.innerHTML = `${population + 1}`;

  class Ameba {
    constructor(id) {
      this.id = id;
      this.x = width / 2;
      this.y = height / 2;
      this.vitality = 30;
      this.aptosis = 0;
    }
    reproduction(saludo) {
      const all = () => {
        const r = Math.random();
        const re = Math.random();
        console.log("Hola soy " + this.id + saludo);

        if (this.vitality >= 30 && this.aptosis == 0) {
          if (r < 0.5) {
            if (re < 0.2) {
              console.log(`Yo ${this.id} aptosis 1`);
              this.aptosis = 1;
            }
            mitosis();
          }
        }

        if (this.aptosis == 1) {
          setTimeout(() => {
            this.aptosis = 2;
            clearInterval(thought);
            muertes++;
            console.log(`${this.id} ha muerto`);
          }, 1500);
        }
      };
      let thought = setInterval(all, 1000/*floor(random(4) + 5) * 1000*/);
    }

    skin() {
      if (this.aptosis == 0) {
        stroke("#8100FA");
        strokeWeight(10);
        point(this.x, this.y);
      } else if (this.aptosis == 1) {
        stroke("#ED0000");
        strokeWeight(8);
        point(this.x, this.y);
      } else if (this.aptosis == 2) {
        stroke(0, 0, 255, 0.0);
        strokeWeight(11);
        point(this.x, this.y);
      }
    }

    walk() {
      let stepx = floor(random(3) - 1);
      let stepy = floor(random(3) - 1);
      this.x += stepx;
      this.y += stepy;
    }
  }

  const mitosis = () => {
    id++;
    let amebaSon = new Ameba(id);
    amebaSon.reproduction(" Hijo de Adam");
    amebas.push(amebaSon);
    population = amebas.length;
    view.innerHTML = `${population + 1}`;
  };

  amebas[population] = new Ameba(0);
  amebas[population].reproduction(" ");

  draw = () => {
    background(1000);

    for (i = 0; i < amebas.length; i++) {
      amebas[i].skin();
      amebas[i].walk();
      view.innerHTML =
        "Poblacion: " +
        (population - muertes) +
        "--Muertes:--" +
        muertes +
        "--Ids:--" +
        id +
        "Valor de i del bucle : " +
        i;
    }
  };
}

// fill(255, 0, 0);
// ellipse(player.x, player.y, player.size, player.size);

// fill(255, 204, 0);
// ellipse(celula.x, celula.y, celula.size, celula.size);
// noStroke();
