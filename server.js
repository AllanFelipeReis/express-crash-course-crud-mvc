import express from 'express'
import errorHandler from './middleware/error.js'
import logger from './middleware/logger.js'
import notFound from './middleware/notFound.js'
import posts from './routes/posts.js'
import path from 'path'
import { fileURLToPath } from 'url'

// Get the directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = new express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger)

// Setup static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/api/posts', posts)

// Not Found
app.use(notFound)

// Error Handler
app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
