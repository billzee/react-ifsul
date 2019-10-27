const bolo = true;

const bolo = "Bolo de Cenoura da Vovó";

const bolo = {
  sabor: "Bolo de Cenoura da Vovó",
  ingredientes: ["Ovos", "Farinha", "Cenoura", "Amor"]
}

/*
  Função Fábrica
  Factory Function
*/
function fazerBolo({ ingrediente }) {
  if (ingrediente === "Amor") {
    return {
      sabor: "Bolo de Cenoura da Vovó",
      ingredientes: ["Ovos", "Farinha", "Cenoura", "Amor"]
    }
  } else {
    return {
      sabor: "Bolo de Cenoura Genérico",
      ingredientes: ["Ovos", "Farinha", "Cenoura"]
    }
  }
}

const bolo = fazerBolo({ ingrediente: "Amor" })

/*
* @class Bolo
*/
class Bolo {
  constructor() {
    this.sabor = "genérico"
    this.ingredientes = ["Ovos", "Farinha"]
  }

  get ingredientes() {
    return ingredientes
  }

  set ingredientes(ingredientes) {
    this.ingredientes = [...this.ingredientes, ...ingredientes]
  }

  get sabor() {
    return ingredientes
  }

  set sabor(ingredientes) {
    return {
      "Bolo de Chocolate": () => "Chocolate" in this.ingredientes,
      "Bolo de Cenoura": () => "Cenoura" in this.ingredientes
    }
  }

}

const bolo = new Bolo(["Ovos", "Farinha", "Cenoura", "Amor"])
