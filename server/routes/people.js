var express = require('express');
var router = express.Router();

var Person = require('../models/person.js');

router.post('/', function(req, res) {
  var addedPerson = new Person(req.body);
  console.log('post connection success: ', req.body);
  addedPerson.save(function(err, data) {
    if(err) {
      console.log('err: ', err);
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

router.get('/', function(req, res) {
  console.log('server and database are communicating');
  Person.find({}, function(err, people) {
    if(err) {
      console.log('GET request error: ', err);
      res.sendStatus(500);
    } else {
      console.log('people to return: ', people);
      res.send(people);
    }
  });
});

router.delete('/:id', function(req, res) {
  var personID = req.params.id;
  Person.findByIdAndRemove({_id : personID}, function(err, person) {
    if(err) {
      console.log('Delete request error: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  }
  )
});
module.exports = router;
