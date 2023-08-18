const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js')
const { connectDB } = require('./config/db.js')
const cookieParser = require('cookie-parser')
const { router: userRoutes } = require('./routes/userRoutes.js')

dotenv.config()
const port = process.env.PORT || 5002

connectDB()

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200).send('server is ready')
})

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`working on port ${port}`)
})
