'use strict';

const angular = require('angular');
const app = angular.module('CatDogApp', []);

app.controller('CatsController', ['$http', CatsController]);
app.controller('DogsController', ['$http', DogsController]);

//Cats controller
function CatsController($http){
  this.catTitle = 'Make a new Cat';
  this.$http = $http;
  this.cats = [{body: 'new cat'}];

}

CatsController.prototype.getCats = function() {
  this.$http.get('http://localhost:8080/')
    .then((res) => {
      this.cats = res.data.data;

    }, (err) => {
      console.log(err);
    });
};

CatsController.prototype.addCat = function() {
  this.$http.post('http://localhost:8080/', this.newCat)
    .then((res) => {
      this.cats.push(res.data);
      this.newCat = null;
    }, (err) => {
      console.log(err);
    });
};

CatsController.prototype.deleteCat = function(cat) {
  this.$http.delete('http://localhost:8080/' + cat._id)
    .then(() => {
      let index = this.cats.indexOf(cat);
      this.cats.splice(index, 1);
    }, (err) => {
      console.log(err);
    });
};

CatsController.prototype.updateCat = function(cat, updatedCat) {
  let arrayCat = this.cats[this.cats.indexOf(cat)];
  arrayCat.body = updatedCat;
};

//Dogs controller
function DogsController($http){
  this.dogTitle = 'Make a new Dog';
  this.$http = $http;
  this.Dogs = [{body: 'new Dog'}];

}

DogsController.prototype.getDogs = function() {
  this.$http.get('http://localhost:8080/')
    .then((res) => {
      this.Dogs = res.data.data;

    }, (err) => {
      console.log(err);
    });
};

DogsController.prototype.addDog = function() {
  this.$http.post('http://localhost:8080/', this.newDog)
    .then((res) => {
      this.Dogs.push(res.data);
      this.newDog = null;
    }, (err) => {
      console.log(err);
    });
};

DogsController.prototype.deleteDog = function(Dog) {
  this.$http.delete('http://localhost:8080/' + Dog._id)
    .then(() => {
      let index = this.Dogs.indexOf(Dog);
      this.Dogs.splice(index, 1);
    }, (err) => {
      console.log(err);
    });
};

DogsController.prototype.updateDog = function(Dog, updatedDog) {
  let arrayDog = this.Dogs[this.Dogs.indexOf(Dog)];
  arrayDog.body = updatedDog;
};
