import { NextRequest, NextResponse } from 'next/server';
import { users, User } from '@/lib/data';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const { name, email } = await req.json();

    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const updatedUser: User = { id, name, email };
    users[index] = updatedUser;

    return NextResponse.json(updatedUser);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    users.splice(index, 1);
    return NextResponse.json({ message: 'Deleted' });
}
