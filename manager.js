const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and  innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

console.log("Books in the Library:\n");

function getBookInformation(catalog) {
  return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
}

console.log(getBookInformation(library));

console.log("\nList of book summaries:\n");

function getBookSummaries(catalog) {
  return catalog.map((book) => book.about).join("\n");
}

console.log(getBookSummaries(library));

console.log("\nList of books by Arvid Kahl:\n");

function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}

console.log(getBooksByAuthor(library, "Arvid Kahl"));

console.log("\nList of books by James Clear:\n");
console.log(getBooksByAuthor(library, "James Clear"));

console.log("\nTotal number of pages for all library books:\n");

function getTotalPages(books){
  return books.reduce((total,book)=>total+book.pages,0)
}


//Build a Book Organizer
const books = [
  { title: "nice book", authorName: "George Orwell", releaseYear: 1949 },
  { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 },
  { title: "The Hobbit", authorName: "J.R.R. Tolkien", releaseYear: 1937 },
  { title: "Fahrenheit 451", authorName: "Ray Bradbury", releaseYear: 1953 }
];

function sortByYear(book1,book2){
if(book1.releaseYear<book2.releaseYear){
  return -1;
}
else if(book1.releaseYear>book2.releaseYear){
  return 1;
}
else {
  return 0;
}
}

const filteredBooks =books.filter(book=>book.releaseYear<1950);
filteredBooks.sort(sortByYear)



//Sorted Index Finder
function indexFind(arr,n){
  arr.sort((a,b)=>a-b);
  const index =arr.findIndex(value=>value>=n);
  return index===-1? arr.length:index;
}
// console.log(indexFind([1,2,3,4,5],2));

//Symmetric Difference
function diffArray(arr1,arr2){
  const unique1 = arr1.filter(item => !arr2.includes(item));
  const unique2 = arr2.filter(item => !arr1.includes(item));

  return unique1.concat(unique2)
}
// console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));







