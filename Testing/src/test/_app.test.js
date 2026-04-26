const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
  it('should respond with 200 and return a message', async () => {
    const response = await request(app).get('/')

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('message')
    expect(typeof response.body.message).toBe('string')
  })
})