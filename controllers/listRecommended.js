const books = require('../data/database');
const read = require('readline-sync');
const App = require('../app');

const recommendedBooks = () => {
  const confirmation = read.question('Tem certeza que deseja ver os livros recomendados? S/N ').toUpperCase();

    if (confirmation === 'S') {
      const recommendedBooks = books.filter(item => item.recommend)
      console.table(recommendedBooks);
    } else App();
  }

module.exports = recommendedBooks;