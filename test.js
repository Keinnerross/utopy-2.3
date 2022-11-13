let id = 1;

class Ameba {
  constructor(id) {
    this.id = id;
    this.x = 300;
    this.y = 300;
    this.steps = 2;
    this.vitality = 30;
    this.fertility = true;
    this.aptosis = false;
  }
  mind(saludo) {
    setInterval(() => {
      console.log("Hola soy " + this.id + saludo);

      const r = Math.random();
      const re = Math.random();

      if (this.vitality >= 30 && this.fertility == true) {
        if (r < 0.5) {
          if (re < 0.7) {
            console.log(`Yo ${this.id} me dupliqué`);
            this.fertility = false;
          }
          mitosis();
        } else {
        }
      }
    }, 3000);
  }
}

const mitosis = () => {
  id++;
  const sonAmeba = new Ameba(id);
  sonAmeba.mind(" Hijo de Adam");
};

const Adan = new Ameba("Adam");
Adan.mind(" ");
