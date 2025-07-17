import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const article = await prisma.article.findUnique({
        where: { id: Number(params.id) },
    })
    return NextResponse.json(article)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const body = await req.json()
    const updated = await prisma.article.update({
        where: { id: Number(params.id) },
        data: { title: body.title, content: body.content },
    })
    return NextResponse.json(updated)
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    await prisma.article.delete({ where: { id: Number(params.id) } })
    return NextResponse.json({}, { status: 204 })
}
