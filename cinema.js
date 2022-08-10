const cinema = "CineHouse";
const catalogo = require("./database/catalogo.json");

function adicionarFilme(
  codigo,
  titulo,
  duracao,
  atores,
  anoDeLancamento,
  emCartaz
) {
  let novoFilme = {
    codigo: codigo,
    titulo: titulo,
    duracao: duracao,
    atores: atores,
    anoDeLancamento: anoDeLancamento,
    emCartaz: emCartaz,
  };
  catalogo.push(novoFilme);
}

function buscarFilme(codigo) {
  for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].codigo === codigo) {
      return console.log(catalogo[i]);
    }
  }
}

function alterarStatusEmCartaz(codigo) {
  for (let i = 0; i < catalogo.length; i++) {
    return catalogo[i].codigo === codigo
      ? catalogo[i].emCartaz
      : !catalogo[i].emCartaz;
  }
}

alterarStatusEmCartaz(45);
buscarFilme(45);
