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

  fs.writeFile("./database/catalogo.json", JSON.stringify(catalogo, null, 3), err => {
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
    if (filmeAlterado.emCartaz == true) {
      filmeAlterado.emCartaz = false
    } else {
      filmeAlterado.emCartaz = true
    }
    
    fs.writeFile("./database/catalogo.json", JSON.stringify(catalogo, null, 3), err => {
      if (err) throw err; 
      console.log("Filme em cartaz foi alterado!")
    }) 
}

alterarStatusEmCartaz(45)
