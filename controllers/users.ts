import prisma from '../prismaClient'
import { Request, Response, NextFunction } from 'express'


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

const read_users = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const options = {
            include: { posts: true },
        }
        const users = await prisma.user.findMany(options)
        res.send(users)
    } 
    catch (error) {
        next(error)
    }
    
}

const read_user = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { user_id } = req.params
        const options = {
            where: { id: Number(user_id) },
            include: { posts: true },
        }
        const user = await prisma.user.findUnique(options)
        res.send(user)
    }
    catch (error) {
        next(error)
    }

}


const update_user = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { user_id } = req.params
        const data = req.body

        const options = {
            where: { id: Number(user_id) },
            data,
        }
        const user = await prisma.user.update(options)
        res.send(user)
    }
    catch (error) {
        next(error)
    }

}

const delete_user = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { user_id } = req.params
        const options = {
            where: { id: Number(user_id) },
        }
        const user = await prisma.user.delete(options)
        res.send(user)
    }
    catch (error) {
        next(error)
    }

}

export {
    create_user,
    read_users,
    read_user,
    update_user,
    delete_user
}

