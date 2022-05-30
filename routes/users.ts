import { Router } from 'express'
import { 
    create_user,
    read_users,
    read_user,
    update_user,
    delete_user
} from '../controllers/users'
import posts from './posts'

const router = Router({ mergeParams: true })

router.route('/')
    .get(read_users)
    .post(create_user)

router.route('/:user_id')
    .get(read_user)
    .patch(update_user)
    .delete(delete_user)

router.use('/:user_id/posts', posts)


export default router