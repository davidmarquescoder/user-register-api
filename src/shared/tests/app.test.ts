import * as request from 'supertest';
import app from '../core/app';

describe('Testing the application', () => {
  it('Must respond to route /health-check', async () => {
    const response = await request(app).get('/health-check');

    expect(response.status).toBe(200);
  });

  it('Deve retornar um JSON válido na rota /health-check', async () => {
    const response = await request(app).get('/health-check');
    expect(response.type).toBe('application/json');
    expect(response.body).toEqual(expect.any(Object));
  });
});
