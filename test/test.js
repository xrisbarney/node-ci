var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with hello sne', function(done) {
 //navigate to root and check the the response is "hello SNE 20/21"
 request(app).get('/').expect('hello SNE 20/21', done);
 });
});
