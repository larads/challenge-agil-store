import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

export async function registerUser(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
    })

    const { name, email } = registerBodySchema.parse(request.body)

    await prisma.user.create({
        data: {
            name,
            email
        }
    })

    return reply.status(201).send()
}