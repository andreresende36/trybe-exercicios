const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const authorBornIn1947 = (item) => item.author.birthYear === 1947;
const finder = (array, callback) => array.find(callback).author.name;
// console.log(finder(books, authorBornIn1947));



function smallerName(array) {
  let nameBook;
  let counter = Number.POSITIVE_INFINITY;
  array.forEach(element => {
    if (element.name.length < counter) {
      nameBook = element.name;
      counter = element.name.length;
    }
  });
  return nameBook;
}
// console.log(smallerName(books));



const count26char = (item) => item.name.length === 26;
const getNamedBook = (array) => array.find(count26char).name;
// console.log(getNamedBook(books));



const booksOrderedByReleaseYearDesc = (array) => array.sort((a,b) => b.releaseYear - a.releaseYear)
// console.log(booksOrderedByReleaseYearDesc(books));

const everyoneWasBornOnSecXX = (array) => array.every(element => element.author.birthYear > 1900)
// console.log(everyoneWasBornOnSecXX(books));


function someBookWasReleaseOnThe80s(array) {
  return array.some(element => element.releaseYear >= 1980 && element.releaseYear < 1990)
}
// console.log(someBookWasReleaseOnThe80s(books));


const expectedResult = false;
const authorUnique1 = (array) => {
  return array.every((element) => !array.some((element2) => (element2.author.name !== element.author.name) && (element2.author.birthYear === element.author.birthYear)))
}
console.log(authorUnique1(books));


// function authorUnique2() {
//   return books.every((book) => !books.some((bookSome) => (bookSome.author.name !== book.author.name) && (bookSome.author.birthYear === book.author.birthYear)));
// }
// console.log(authorUnique2());