import prisma from '../prismaClient'
import { Request, Response, NextFunction } from 'express'

const read_users = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const users = await prisma.user.findMany()
        res.send(users)
    } catch (error) {
        next(error)
    }
    
}

export {
    read_users
}

