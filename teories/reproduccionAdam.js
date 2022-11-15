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

      if (this.vitality >= 30) {
        if (r < 0.5) {
          mitosis();
        } else {
          //   this.fertility = false;
          //   this.aptosis = true;
          //   aptosis()
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
