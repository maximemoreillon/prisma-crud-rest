import { Router } from "express"
import {
  create_post,
  read_posts,
  read_post,
  update_post,
  delete_post,
} from "../controllers/posts"

const router = Router({ mergeParams: true })

router.route("/").get(read_posts).post(create_post)

router.route("/:post_id").get(read_post).patch(update_post).delete(delete_post)

export default router
