import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const article = await prisma.article.findUnique({
        where: { id: Number(resolvedParams.id) },
    })
    return NextResponse.json(article)
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const body = await req.json()
    const updated = await prisma.article.update({
        where: { id: Number(resolvedParams.id) },
        data: { title: body.title, content: body.content },
    })
    return NextResponse.json(updated)
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    await prisma.article.delete({ where: { id: Number(resolvedParams.id) } })
    return NextResponse.json({}, { status: 204 })
}