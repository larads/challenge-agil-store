import { FastifyInstance } from 'fastify'
import { registerUser } from './controllers/register-user'
import { product } from './controllers/register-product'

export async function appRoutes(app: FastifyInstance) {
    app.post('/users', registerUser)
    app.post('/product', product);
}