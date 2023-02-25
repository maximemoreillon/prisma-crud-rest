import express from "express"
import cors from "cors"
import user_router from "./routes/users"
import dotenv from "dotenv"

dotenv.config()

const { APP_PORT = 80 } = process.env
const app = express()

app.use(cors())
app.use(express.json())
app.use("/users", user_router)

app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`)
})
