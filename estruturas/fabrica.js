/*
  Função Fábrica
  Factory Function
*/
function fazerBolo({ ingrediente }) {
  if (ingrediente === "Amor") {
    return {
      sabor: "Bolo de Cenoura da Vovó",
      ingredientes: ["Ovos", "Farinha", "Cenoura", "Amor"]
    };
  } else {
    return {
      sabor: "Bolo de Cenoura Genérico",
      ingredientes: ["Ovos", "Farinha", "Cenoura"]
    };
  }
}

const bolo = fazerBolo({ ingrediente: "Amor" });
