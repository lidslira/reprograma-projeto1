const searchBooks = require('./controllers/findBooks');
const recommendedBooks = require('./controllers/listRecommended');
const noReadBooks = require('./controllers/listNoReadBooks');
const ordenatedBooks = require('./controllers/listOrdenatedBooks');
const read = require('readline-sync');

const App = () => {

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
      ordenatedBooks();
      break;
    case '3':
      recommendedBooks();
      break;
    case '4':
      noReadBooks();
      break;
    case '5':
      console.log('Ok, até a próxima!');
      break;
    default:
      console.log('Fim do algoritmo')
  }
}
module.exports = App();