import createError from '../utils/createError.js'

const notFound = (req, res, next) => {
    return next(createError('Not Found', 404))
}

export default notFound
