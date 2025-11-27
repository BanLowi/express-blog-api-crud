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

    const newId = posts[posts.length - 1].id + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    posts.push(newPost);

    res.status(201).json(newPost);
}

function update(req, res) {

    const id = parseInt(req.params.id)

    const findPost = posts.find(post => post.id == id);

    if (!findPost) {

        return res.status(404).json({
            error: "Not Found",
            message: "Post not found"
        })
    }

    findPost.title = req.body.title;
    findPost.image = req.body.image;
    findPost.content = req.body.content;
    findPost.tags = req.body.tags;

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