import express from 'express'
import Posts from '../controllers/posts.js'
const router = express.Router()

router.get('/', Posts.index)

router.get('/:id', Posts.get)

router.post('/', Posts.create)

router.put('/:id', Posts.update)

router.delete('/:id', Posts.delete)

export default router
