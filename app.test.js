const request = require('supertest');
const app = require('./app');
const supertest = require('supertest');


describe('GET /', () => {
    it('should respond with "Hello World"', async () => {
    const res = await request(app).get('/');
    expect(res.text).toEqual('Hello World');
    });
});

