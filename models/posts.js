class Posts {
    constructor() {
        this.posts = [
            { id: 1, title: 'Post One' },
            { id: 2, title: 'Post Two' },
            { id: 3, title: 'Post Three' },
        ]
    }

    get() {
        return this.posts
    }

    find(id) {
        return this.get().find((post) => post.id === id)
    }

    insert(post) {
        post.id = this._nextId()
        return this.get().push(post)
    }

    delete(id) {
        this.posts = this.get().filter((post) => post.id !== id)
    }

    _nextId() {
        const ids = this.get().map((post) => post.id)

        return Math.max(...ids) + 1
    }
}

export default new Posts()
