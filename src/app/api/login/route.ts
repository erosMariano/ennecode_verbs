import { NextResponse } from 'next/server';
import { prisma } from "@/app/lib/prisma";
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Senha incorreta' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login realizado com sucesso' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao processar os dados:', error);
    return NextResponse.json({ message: 'Erro ao processar os dados' }, { status: 500 });
  }
}
