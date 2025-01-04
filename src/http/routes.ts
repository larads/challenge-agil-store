import { FastifyInstance } from 'fastify'
import { registerUser } from './controllers/register-user'
import { product } from './controllers/register-product'
import { listProducts } from './controllers/list-product';
import { updateProduct } from './controllers/update-product';
import { deleteProduct } from './controllers/delete-product';
import { searchProduct } from './controllers/search-product';

export async function appRoutes(app: FastifyInstance) {
    app.post('/users', registerUser)
    app.post('/product', product);
    app.get("/products", listProducts);
    app.patch("/product/:id", updateProduct);
    app.delete("/product/:id", deleteProduct);
    app.get("/product", searchProduct)
}