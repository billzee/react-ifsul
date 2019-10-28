/*
 * @class Bolo
 */
class Bolo {
  constructor() {
    this.sabor = "genérico";
    this.ingredientes = ["Ovos", "Farinha"];
  }

  get ingredientes() {
    return ingredientes;
  }

  set ingredientes(ingredientes) {
    this.ingredientes = [...this.ingredientes, ...ingredientes];
  }

  get sabor() {
    return ingredientes;
  }

  set sabor(ingredientes) {
    return {
      "Bolo de Chocolate": () => "Chocolate" in this.ingredientes,
      "Bolo de Cenoura": () => "Cenoura" in this.ingredientes
    };
  }
}

const bolo = new Bolo(["Ovos", "Farinha", "Cenoura", "Amor"]);
