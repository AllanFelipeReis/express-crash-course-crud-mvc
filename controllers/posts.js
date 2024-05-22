import PostsModel from '../models/posts.js'
import createError from '../utils/createError.js'

class Posts {
    index(req, res, next) {
        const limit = parseInt(req.query.limit)

        let posts = PostsModel.get()

        if (!isNaN(limit) && limit > 0) posts = posts.slice(0, limit)

        res.status(200).json(posts)
    }

    get(req, res, next) {
        const id = parseInt(req.params.id)

        const post = PostsModel.find(id)

        if (!post) return next(this._notFound(id))

        res.status(200).json(post)
    }

    create(req, res, next) {
        const newPost = {
            title: req.body.title,
        }

        // Validar os dados
        if (!newPost.title)
            return next(createError('Please include a title', 400))

        // Adiciona o post
        PostsModel.insert(newPost)

        res.status(201).json(PostsModel.get())
    }

    update(req, res, next) {
        const id = parseInt(req.params.id)

        const post = PostsModel.find(id)

        if (!post) return next(this._notFound(id))

        // Atualiza o post
        post.title = req.body.title

        res.status(201).json(PostsModel.get())
    }

    delete(req, res, next) {
        const id = parseInt(req.params.id)

        const post = PostsModel.find(id)

        if (!post) return next(this._notFound(id))

        PostsModel.delete(id)

        res.status(201).json(PostsModel.get())
    }

    _notFound(id) {
        return createError(`A post with the id of ${id} was not found`, 404)
    }
}

export default new Posts()
