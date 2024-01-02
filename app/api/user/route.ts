import prisma from '@/prisma/client';
import { getSession } from 'next-auth/react';
import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest) {
  try {
    const session = await getSession({ req })
    const user = await prisma.user.findFirst({
      where: { id: session?.user.id },
    })

    return Next

  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 })
  }
}

export async function PUT(req: NextApiRequest) {
  try {
    const session = await getSession({ req })
    const { firstname, lastname, image,  skills } = await req.body

    await prisma.user.update({
      where: { id: session?.user.id },
      data: { firstname, lastname, image, skills }
    })

    return NextResponse.json({ msg: "User updated successfully" })

  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 })
  }
}