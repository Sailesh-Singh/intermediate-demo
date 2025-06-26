const request = require('supertest');
const app = require('../src/index');

describe('Intermediate DevOps Demo API', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(0, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  describe('GET /api/health', () => {
    it('should return health status', async () => {
      const response = await request(app).get('/api/health');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('version');
      expect(response.body.status).toBe('healthy');
      expect(response.body.version).toBe('1.0.0');
    });
  });

  describe('GET /api/status', () => {
    it('should return system status', async () => {
      const response = await request(app).get('/api/status');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('environment');
      expect(response.body).toHaveProperty('uptime');
      expect(response.body.message).toBe('Intermediate DevOps Demo API');
    });
  });

  describe('GET / (root)', () => {
    it('should serve the main page', async () => {
      const response = await request(app).get('/');
      
      expect(response.status).toBe(200);
      expect(response.text).toContain('Intermediate DevOps Demo');
    });
  });

  describe('404 handling', () => {
    it('should return 404 for unknown routes', async () => {
      const response = await request(app).get('/api/nonexistent');
      
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Route not found');
    });
  });
}); 