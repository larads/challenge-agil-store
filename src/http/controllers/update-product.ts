import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

export async function updateProduct(request: FastifyRequest, reply: FastifyReply) {
    const paramsSchema = z.object({
        id: z.string().uuid(),
    })

    const updateBodySchema = z.object({
        name: z.string().optional(),
        category: z.string().optional(),
        stockQuantity: z.number().optional(),
        price: z.number().optional(),
    });

    const { id } = paramsSchema.parse(request.params)
    const updates = updateBodySchema.parse(request.body)

    const product = await prisma.product.findUnique({
        where: { id },
    })

    if (!product) {
        return reply.status(404).send({
            message: "Produto não encontrado.",
        })
    }

    const updatedProduct = await prisma.product.update({
        where: { id },
        data: updates,
    })

    return reply.status(200).send(updatedProduct)
}
