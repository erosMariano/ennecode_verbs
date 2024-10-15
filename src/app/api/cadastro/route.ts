import { NextResponse } from 'next/server';
import { prisma } from "@/app/lib/prisma";
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { nickname, email, password } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email: email,
        name: nickname,
        password: hashedPassword 
      }
    });


    return NextResponse.json({ message: 'Dados recebidos com sucesso'}, { status: 200 });
  } catch (error) {
    console.error('Erro ao processar os dados:', error);
    return NextResponse.json({ message: 'Erro ao processar os dados' }, { status: 500 });
  }
}
