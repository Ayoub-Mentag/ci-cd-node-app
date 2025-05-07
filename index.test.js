const request = require('supertest');
const express = require('express');

const app = express();
app.get('/health', (req, res) => {
  res.status(400).send({ status: 'UP' });
});

describe('GET /health', () => {
  it('should return status UP', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('UP');
  });
});