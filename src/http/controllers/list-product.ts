import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

export async function listProducts(request: FastifyRequest, reply: FastifyReply) {
    const querySchema = z.object({
        category: z.string().optional(),
        sortBy: z.enum(["name", "stockQuantity", "price"]).optional(),
        order: z.enum(["asc", "desc"]).default("asc").optional(),
    });

    const { category, sortBy, order } = querySchema.parse(request.query);

    const filter: any = {}
    if (category) {
        filter.category = category;
    }

    const orderBy: any = {}
    if (sortBy) {
        orderBy[sortBy] = order;
    }

    const products = await prisma.product.findMany({
        where: filter,
        orderBy,
    });

    return reply.status(200).send({
        data: products,
    });
}
