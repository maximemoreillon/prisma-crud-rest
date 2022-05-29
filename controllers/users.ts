import prisma from '../prismaClient'
import { Request, Response, NextFunction } from 'express'

const read_users = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const options = {
            include: {
                posts: true,
                profile: true,
            },
        }
        const users = await prisma.user.findMany(options)
        res.send(users)
    } 
    catch (error) {
        next(error)
    }
    
}

const create_user = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const data = req.body
        const user = await prisma.user.create({ data })

        res.send(user)
    }
    catch (error) {
        next(error)
    }

}

export {
    read_users,
    create_user,

}

