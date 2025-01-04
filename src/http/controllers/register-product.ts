import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

export async function product(request: FastifyRequest, reply: FastifyReply) {
    const registerProductBodySchema = z.object({
        name: z.string(),
        category: z.string(),
        stockQuantity: z.number().min(0),
        price: z.number().positive(),
    })

    const { name, category, stockQuantity, price } = registerProductBodySchema.parse(request.body);

    await prisma.product.create({
        data: {
            name,
            category,
            stockQuantity,
            price,
        },
    });

    return reply.status(201).send()
} 