const books = require('../data/database');
const read = require('readline-sync');

const ordenatedBooks = () => {
  const confirmation = read.question(`
    Tem certeza que deseja ver os livros ordenados por quantidade de páginas? S/N 
  `).toUpperCase();

    if (confirmation === 'S') {
      const ordinateBooks = books.sort((a,b) => b.pages - a.pages);
      console.table(ordinateBooks);
    } else  console.log('Ok, até a próxima!');
  }

module.exports = ordenatedBooks;