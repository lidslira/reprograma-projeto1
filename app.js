const searchBooks = require('./controllers/findBooks')
const read = require('readline-sync');

const answer = read.question(`
======================== MENU ========================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de páginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJOS: Buscar livros não lidos

5 - SAIR

Digite um número[1-5]: `);

switch (answer) {
  case '1': 
    searchBooks();
    break;
  case '2':
    listOrdenatedBooks();
    break;
  case '3':
    listRecommends();
    break;
  case '4':
    listNoReadBooks();
    break;
  case '5':
    // leave
    break;
  default:
    console.log('End of algorithm')
}