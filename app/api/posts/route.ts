import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import prisma from '@/prisma/client';

import { getQueries } from '../utils';

export async function GET(req: Request) {
  const { skip, limit = 10 } = getQueries(req, ["limit", "skip"])

  try {
    const posts = await prisma.post.findMany({
      skip: Number(skip),
      take: Number(limit),
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            image: true
          }
        }
      },
    })

    return NextResponse.json(posts)

  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { body, published } = await req.json()
    const userId = headers().get("userid") as string

    const post = await prisma.post.create({
      data: {
        body,
        published,
        userId,
      }
    })

    return NextResponse.json({ id: post.id, msg: "Post created successfully" })

  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const { id, body } = await req.json()

    await prisma.post.update({
      where: { id },
      data: { body }
    })

    return NextResponse.json({ msg: "Post updated successfully" })

  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 })
  }
}
