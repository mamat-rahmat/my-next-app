import { NextRequest, NextResponse } from 'next/server';
import { users, User } from '@/lib/data';

export async function GET() {
    return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
    const { name, email } = await req.json();

    const maxId = Math.max(...users.map(user => user.id), 0);

    const newUser: User = {
        id: maxId + 1,
        name,
        email,
    };

    users.push(newUser);
    return NextResponse.json(newUser, { status: 201 });
}
