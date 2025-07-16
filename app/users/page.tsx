'use client';
import { useEffect, useState, FormEvent } from 'react';

type User = {
    id: number;
    name: string;
    email: string;
};

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [editingId, setEditingId] = useState<number | null>(null);

    const fetchUsers = async () => {
        const res = await fetch('/api/users');
        const data = await res.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const payload = JSON.stringify({ name, email });

        if (editingId !== null) {
            await fetch(`/api/users/${editingId}`, {
                method: 'PUT',
                body: payload,
            });
        } else {
            await fetch('/api/users', {
                method: 'POST',
                body: payload,
            });
        }

        setName('');
        setEmail('');
        setEditingId(null);
        fetchUsers();
    };

    const handleDelete = async (id: number) => {
        await fetch(`/api/users/${id}`, { method: 'DELETE' });
        fetchUsers();
    };

    const handleEdit = (user: User) => {
        setEditingId(user.id);
        setName(user.name);
        setEmail(user.email);
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">User Management</h1>

            <form onSubmit={handleSubmit} className="space-y-4 mb-10 bg-gray-100 p-4 rounded-lg shadow">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 text-black rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 text-black rounded"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    {editingId ? 'Update User' : 'Add User'}
                </button>
            </form>

            <ul className="space-y-4">
                {users.map(user => (
                    <li
                        key={user.id}
                        className="flex justify-between items-center bg-white p-4 rounded shadow border"
                    >
                        <div>
                            <p className="font-semibold text-black">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                        <div className="space-x-2">
                            <button
                                onClick={() => handleEdit(user)}
                                className="text-blue-600 hover:underline"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(user.id)}
                                className="text-red-600 hover:underline"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
