const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  let server;

  before((done) => {
    server = require('./api');
    done();
  });

  after((done) => {
    server.close();
    done();
  });

  it('should return correct status code', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should have the correct headers', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.headers['content-type']).to.include('text/html; charset=utf-8');
      done();
    });
  });
});

