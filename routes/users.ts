import { Router } from 'express'
import { 
    read_users,
    create_user
} from '../controllers/users'

const router = Router()

router.route('/')
    .get(read_users)
    .post(create_user)


export default router