'use strict';

const supertest = require('supertest');

// What's up with the {}???? Make an object
const {server} = require('../server.js');

const mockClient = supertest(server);

let warn = jest.spyOn(global.console, 'warn').mockImplementation(() =>{});

describe('The Server', () => {
  it('responds with a 200 on a good route', () => {
    // Why do we return here? Because the code block is inside of {}
    return mockClient.get('/a')
      .then( result => {
        expect(result.status).toEqual(200);
      });
  });

  it('rresponds with a 500 on an error', () => {
    return mockClient.get('/e')
      .then( result => {
        expect(result.status).toEqual(500);
      });
  });

  it('responds with a 404 on an unknown route', () => {
    return mockClient.get('/fff')
    .then( result => {
    expect(result.status).toEqual(404);
});
  });
  
});