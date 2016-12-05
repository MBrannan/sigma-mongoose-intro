myApp.controller('PeopleController', ['$http', function($http) {
    var self = this;
    self.people = [];
    self.newPerson = {};

    // Start app
    getData();

    // Get all people
    function getData() {
      $http.get('/people')
        .then(function(response) {
          self.people = response.data;
          console.log(response.data);
        });
    };

    // add person
    self.addPerson = function(newPerson) {
      console.log('add person');
      $http.post('/people', newPerson)
        .then(function(response) {
          console.log('New person added: ', response);
          getData();
        });
    };

    // delete person
    self.deletePerson = function(person) {
      console.log('delete person: ', person);
      $http.delete('/people/' + person)
        .then(getData);
    };

    // update person
    self.updatePerson = function(id) {
      console.log('update person');
    }

}]);
