const books = require('../data/database');
const read = require('readline-sync');
const App = require('../app');

const noReadBooks = () => {
  const confirmation = read.question('Tem certeza que deseja ver os livros não lidos? S/N ').toUpperCase();

    if (confirmation === 'S') {
      const noReadBooks = books.filter(item => !item.read)
      console.table(noReadBooks); 
    } else {
      App(); 
    }
  }

module.exports = noReadBooks;