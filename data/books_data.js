const BooksData = function() {
  this.populate();
};

// INDEX
BooksData.prototype.all = function() {
  return this.books;
};

// CREATE
BooksData.prototype.add = function(newBook) {
  this.books.push(newBook);
};

// SHOW
BooksData.prototype.find = function(index) {
  return this.books[index];
};

// UPDATE
BooksData.prototype.update = function(index, updatedBook) {
  this.books[index] = updatedBook;
};

// DESTROY
BooksData.prototype.delete = function(index) {
  this.books.splice(index, 1);
};

BooksData.prototype.deleteAll = function(index) {
  this.books = [];
};

// Sample data
BooksData.prototype.populate = function() {
  this.books = [
    {
      title: 'Animal Farm',
      director: 'George Orwell',
      reviews: [
        {
          author: 'Craig',
          rating: 4,
          comment: 'Too political for the kids'
        }
      ]
    },
    {
      title: 'The New York Trilogy',
      director: 'Paul Auster',
      reviews: [
        {
          author: 'Craig',
          rating: 5,
          comment: 'Yeah! Awesome.'
        },
        {
          author: 'Jarrod',
          rating: 1,
          comment: 'Pretentious nonsense'
        }
      ]
    },
    {
      title: 'Shadow of the Wind',
      director: 'Carlos Ruiz Zaffon',
      reviews: [
        {
          author: 'Tony',
          rating: 5,
          comment: 'Amazing'
        }
      ]
    }
  ];
};

module.exports = BooksData;
