import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    const articles = await prisma.article.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(articles)
}

export async function POST(req: Request) {
    const body = await req.json()
    const article = await prisma.article.create({
        data: {
            title: body.title,
            content: body.content,
        },
    })
    return NextResponse.json(article, { status: 201 })
}
