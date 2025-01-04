import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

export async function searchProduct(request: FastifyRequest, reply: FastifyReply) {
    const querySchema = z.object({
        id: z.string().uuid().optional(),
        name: z.string().optional(),
    })

    const { id, name } = querySchema.parse(request.query)

    let product

    if (id) {
        product = await prisma.product.findUnique({
            where: { id },
        })
    } else if (name) {
        product = await prisma.product.findFirst({
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive',
                },
            },
        });
    }

    if (!product) {
        return reply.status(404).send({
            message: "Produto não encontrado.",
        })
    }

    return reply.status(200).send({
        product,
    })
}
