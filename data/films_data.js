const FilmsData = function() {
  this.populate();
};

// INDEX
FilmsData.prototype.all = function() {
  return this.films;
};

// CREATE
FilmsData.prototype.add = function(newFilm) {
  this.films.push(newFilm);
};

// SHOW
FilmsData.prototype.find = function(index) {
  return this.films[index];
};

// UPDATE
FilmsData.prototype.update = function(index, updatedFilm) {
  this.films[index] = updatedFilm
};

// DESTROY
FilmsData.prototype.delete = function(index) {
  this.films.splice(index, 1);
};

FilmsData.prototype.deleteAll = function(index) {
  this.films = [];
};

// Sample data
FilmsData.prototype.populate = function() {
  this.films = [
    {
      title: 'Titanic',
      director: 'James Cameron',
      reviews: [
        {
          author: 'Scooter',
          rating: 4,
          comment: 'Wonderful, a miracle. Beautiful, magical!'
        }
      ]
    },
    {
      title: 'Inception',
      director: 'Christopher Nolan',
      reviews: [
        {
          author: 'Craig',
          rating: 2,
          comment: 'What'
        },
        {
          author: 'Tony',
          rating: 5,
          comment: 'Cool'
        }
      ]
    },
    {
      title: 'Get Out',
      director: 'Jordan Peele',
      reviews: [
        {
          author: 'Jarrod',
          rating: 5,
          comment: '😱'
        }
      ]
    },
  ];
};

module.exports = FilmsData;
