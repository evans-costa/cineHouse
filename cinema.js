const cinema = "CineHouse";
const fs = require ("fs")
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

  fs.writeFile("./database/catalogo.json", JSON.stringify(catalogo, null, '\t'), err => {
    if (err) throw err; 
    console.log("Filme adicionado!")
  })
}

function buscarFilme(id) {
  let filmeBuscado = catalogo.find(filme => filme.codigo === id) 
    console.log(`O filme escolhido foi ${filmeBuscado.titulo}. Estrelando: ${filmeBuscado.atores}. Ele tem ${filmeBuscado.duracao} minutos de duração e foi lançado em ${filmeBuscado.anoDeLancamento}`)
}

function alterarStatusEmCartaz(id) {
  let filmeAlterado = catalogo.find(filme => filme.codigo === id) 
    filmeAlterado.emCartaz == true ? 
    filmeAlterado.emCartaz = false : 
    filmeAlterado.emCartaz = true
    fs.writeFile("./database/catalogo.json", JSON.stringify(catalogo, null, '\t'), err => {
      if (err) throw err; 
      console.log("Filme em cartaz foi alterado!")
    }) 
}

function listarTodosOsFilmes() {
  catalogo.forEach((filme, index) => {
    console.log(`Filme ${index + 1}:
    ID: ${filme.codigo}
    Titulo: ${filme.titulo}
    Duração: ${filme.duracao} minutos
    Atores: ${filme.atores}
    Ano de Lançamento: ${filme.anoDeLancamento}\n`)
  })
}

function listarFilmesEmCartaz() {
  let filmeEmCartaz = catalogo.find(filme => filme.emCartaz == true)
    console.log(`Os filmes em cartaz no momento são:
    ID: ${filmeEmCartaz.codigo}
    Titulo: ${filmeEmCartaz.titulo}
    Duração: ${filmeEmCartaz.duracao} minutos
    Atores: ${filmeEmCartaz.atores}
    Ano de Lançamento: ${filmeEmCartaz.anoDeLancamento}\n`)
}


// adicionarFilme()
// buscarFilme()
// alterarStatusEmCartaz(45)
// listarTodosOsFilmes()
// listarFilmesEmCartaz()