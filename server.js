import express from 'express'
import errorHandler from './middleware/error.js'
import logger from './middleware/logger.js'
import notFound from './middleware/notFound.js'
import posts from './routes/posts.js'

const app = new express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger)

// Routes
app.use('/api/posts', posts)

// Not Found
app.use(notFound)

// Error Handler
app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

// Setup static folder
// const path = require('path')
// app.use(express.static(path.join(__dirname, 'public')))
