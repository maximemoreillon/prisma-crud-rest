import { Router } from 'express'
import { 
    read_users,
    create_user
} from '../controllers/users'
import posts from './posts'

const router = Router({ mergeParams: true })

router.route('/')
    .get(read_users)
    .post(create_user)

router.use('/:user_id/posts', posts)


export default router