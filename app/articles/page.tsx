'use client'

import { useEffect, useState } from 'react'

type Article = {
    id: number
    title: string
    content: string
}

export default function HomePage() {
    const [articles, setArticles] = useState<Article[]>([])
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        const res = await fetch('/api/articles')
        const data = await res.json()
        setArticles(data)
    }

    const handleCreate = async () => {
        await fetch('/api/articles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content }),
        })
        setTitle('')
        setContent('')
        fetchArticles()
    }

    const handleDelete = async (id: number) => {
        await fetch(`/api/articles/${id}`, { method: 'DELETE' })
        fetchArticles()
    }

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">Article CRUD</h1>

            <input
                className="border p-2 mb-2 w-full"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="border p-2 mb-2 w-full"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                onClick={handleCreate}
            >
                Add Article
            </button>

            <ul>
                {articles.map((a) => (
                    <li key={a.id} className="mb-2">
                        <div className="font-semibold">{a.title}</div>
                        <p>{a.content}</p>
                        <button
                            className="text-red-500"
                            onClick={() => handleDelete(a.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    )
}
