import {Router} from 'express'
import { read_users } from '../controllers/users'

const router = Router()

router.route('/')
    .get(read_users)

export default router