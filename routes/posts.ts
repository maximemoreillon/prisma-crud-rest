import { Router } from 'express'
import {
    create_post,
    update_post,
    delete_post,
} from '../controllers/posts'

const router = Router({ mergeParams: true })

router.route('/')
    .post(create_post)


router.route('/:post_id')
    .put(update_post)
    .delete(delete_post)



export default router