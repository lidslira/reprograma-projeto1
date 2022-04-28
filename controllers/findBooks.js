const books = require('../data/database');
const read = require('readline-sync');

const searchBooks = () => {
  const firstOption = read.question('Deseja buscar por categoria? S/N ').toUpperCase();
  
  if (firstOption === 'S') {
    const allGenres = books.map(item => item.genre);

    genres = allGenres.filter(function (value, index, array) { 
    return array.indexOf(value) === index;
    });
    console.table(genres);

    const inputGenre = read.question('Escolha uma categoria acima: ');
    const confirmation = read.question('Tem certeza? S/N ').toUpperCase();

    if (confirmation === 'S') {
      const filteredBooks = books.filter(item => item.genre === inputGenre)
      console.table(filteredBooks);
    }
  } else  console.log('Ok, até a próxima!');

}

module.exports = searchBooks;