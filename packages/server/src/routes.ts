import express from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Lucas' })
})

routes.post('/posts', (request, response) => {
  return response.json({ message: 'New post' })
})

export default routes
