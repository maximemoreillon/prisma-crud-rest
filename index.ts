import express from 'express'
import cors from 'cors'
import user_router from './routes/users'

const APP_PORT=7070
const app = express()
app.use(cors())

app.use('/users', user_router)

app.listen(APP_PORT, () => {
    console.log(`App listening on port ${APP_PORT}`)
})