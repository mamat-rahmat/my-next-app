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
    const [editingId, setEditingId] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        try {
            const res = await fetch('/api/articles')
            const data = await res.json()
            setArticles(data)
        } catch (error) {
            console.error('Error fetching articles:', error)
        }
    }

    const handleCreate = async () => {
        if (!title.trim() || !content.trim()) return

        setIsLoading(true)
        try {
            await fetch('/api/articles', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content }),
            })
            setTitle('')
            setContent('')
            fetchArticles()
        } catch (error) {
            console.error('Error creating article:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleUpdate = async (id: number) => {
        if (!title.trim() || !content.trim()) return

        setIsLoading(true)
        try {
            await fetch(`/api/articles/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content }),
            })
            setTitle('')
            setContent('')
            setEditingId(null)
            fetchArticles()
        } catch (error) {
            console.error('Error updating article:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this article?')) return

        try {
            await fetch(`/api/articles/${id}`, { method: 'DELETE' })
            fetchArticles()
        } catch (error) {
            console.error('Error deleting article:', error)
        }
    }

    const handleEdit = (article: Article) => {
        setEditingId(article.id)
        setTitle(article.title)
        setContent(article.content)
    }

    const handleCancel = () => {
        setEditingId(null)
        setTitle('')
        setContent('')
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Article Manager</h1>

                {/* Create/Edit Form */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">
                        {editingId ? 'Edit Article' : 'Create New Article'}
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Title
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter article title..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Content
                            </label>
                            <textarea
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Write your article content..."
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows={4}
                            />
                        </div>

                        <div className="flex gap-3">
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={editingId ? () => handleUpdate(editingId) : handleCreate}
                                disabled={isLoading || !title.trim() || !content.trim()}
                            >
                                {isLoading ? 'Saving...' : editingId ? 'Update Article' : 'Create Article'}
                            </button>

                            {editingId && (
                                <button
                                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors duration-200"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Articles List */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900">Articles ({articles.length})</h2>

                    {articles.length === 0 ? (
                        <div className="bg-white rounded-lg shadow-md p-8 text-center">
                            <p className="text-gray-500 text-lg">No articles yet. Create your first article above!</p>
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {articles.map((article) => (
                                <div key={article.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-semibold text-gray-900 flex-1">
                                            {article.title}
                                        </h3>
                                        <div className="flex gap-2 ml-4">
                                            <button
                                                className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded-md hover:bg-blue-50 transition-colors duration-200"
                                                onClick={() => handleEdit(article)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="text-red-600 hover:text-red-800 px-3 py-1 rounded-md hover:bg-red-50 transition-colors duration-200"
                                                onClick={() => handleDelete(article.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                                        {article.content}
                                    </p>

                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <span className="text-sm text-gray-500">
                                            Article ID: {article.id}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}