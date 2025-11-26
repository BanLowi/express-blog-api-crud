const posts = require("../data/posts");

function index(req, res) {

    let filteredPosts = posts;

    if (req.query.title) {
        filteredPosts = posts.filter(post => pizza.ingredients.includes(req.query.title))
    };

    res.json(posts)
}

function show(req, res) {
    const id = parseInt(req.params.id)

    const findPost = posts.find(post => post.id == id);

    if (!findPost) {

        return res.status(404).json({
            error: "Not Found",
            message: "Post not found"
        })
    }

    res.json(findPost)
}

function store(req, res) {
    res.send("Store a new post here")
}

function update(req, res) {
    res.send(`Update the post with this id: ${req.params.id}`)
}

function modify(req, res) {
    res.send(`Modify a part of the post with this id: ${req.params.id}`)
}

function destroy(req, res) {
    const id = parseInt(req.params.id)

    const findPost = posts.find(post => post.id == id);

    if (!findPost) {

        return res.status(404).json({
            error: "Not Found",
            message: "Post not found"
        })
    }

    posts.splice(posts.indexOf(findPost), 1);

    res.send(posts)

    res.status(204)
}

module.exports = { index, show, store, update, modify, destroy }