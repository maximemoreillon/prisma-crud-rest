import { Router } from 'express'
import {
    create_post,
    update_post,
} from '../controllers/posts'

const router = Router({ mergeParams: true })

router.route('/')
    .post(create_post)


router.route('/:post_id')
    .put(update_post)



export default router