import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

export async function deleteProduct(request: FastifyRequest, reply: FastifyReply) {
    const paramsSchema = z.object({
        id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const product = await prisma.product.findUnique({
        where: { id },
    });

    if (!product) {
        return reply.status(404).send({
            message: "Produto não encontrado.",
        });
    }

    const { confirm } = request.body as { confirm: boolean }

    if (!confirm) {
        return reply.status(400).send({
            message: "Exclusão não confirmada. Ação cancelada.",
        })
    }

    await prisma.product.delete({
        where: { id },
    })

    return reply.status(200).send({
        message: "Produto excluído com sucesso.",
    })
}
