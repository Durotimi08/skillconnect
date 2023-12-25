import { NextRequest, NextResponse } from "next/server"

export const register = async (req: NextRequest, res:NextResponse) => {
    try{
        const prisma = getPrismaInstance()
        await prisma.user.create({})
    }
}