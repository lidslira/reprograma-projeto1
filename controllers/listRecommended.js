const books = require('../data/database');
const read = require('readline-sync');

const recommendedBooks = () => {
  const confirmation = read.question('Tem certeza que deseja ver os livros recomendados? S/N ').toUpperCase();

    if (confirmation === 'S') {
      const recommendedBooks = books.filter(item => item.recommend)
      console.table(recommendedBooks);
    } else  console.log('Ok, até a próxima!');
  }

module.exports = recommendedBooks;