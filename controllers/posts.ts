import prisma from "../prismaClient"
import { Request, Response, NextFunction } from "express"

const create_post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user_id } = req.params
    const data = {
      ...req.body,
      authorId: Number(user_id),
    }

    const post = await prisma.post.create({ data })
    res.send(post)
  } catch (error) {
    next(error)
  }
}

const read_posts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user_id } = req.params

    const options = {
      where: { authorId: Number(user_id) },
      include: { author: true },
    }
    const posts = await prisma.post.findMany(options)
    res.send(posts)
  } catch (error) {
    next(error)
  }
}

const read_post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { post_id } = req.params
    const options = {
      where: { id: Number(post_id) },
      include: { author: true },
    }
    const post = await prisma.post.findUnique(options)
    res.send(post)
  } catch (error) {
    next(error)
  }
}

const update_post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { post_id } = req.params
    const data = req.body

    const options = {
      where: { id: Number(post_id) },
      data,
    }

    console.log(options)

    const post = await prisma.post.update(options)
    res.send(post)
  } catch (error) {
    next(error)
  }
}

const delete_post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { post_id } = req.params

    const where = { id: Number(post_id) }

    const post = await prisma.post.delete({ where })
    res.send(post)
  } catch (error) {
    next(error)
  }
}

export { create_post, read_posts, read_post, update_post, delete_post }
