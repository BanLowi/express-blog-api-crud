const express = require("express");
const router = express.Router();
const posts = require("../posts");

/* Index */
router.get("/", (req, res) => {

    res.json(posts)
})

/* Show */
router.get("/:id", (req, res) => {
    const findPost = posts.find(post => post.id == req.params.id)
    console.log(findPost);

    res.json(findPost)
})

/* Store */
router.post("/", (req, res) => {

    res.send("Store a new post here")
})

/* Update */
router.put("/:id", (req, res) => {

    res.send(`Update the post with this id: ${req.params.id}`)
})

/* Modify */
router.patch("/:id", (req, res) => {

    res.send(`Modify a part of the post with this id: ${req.params.id}`)
})

/* Destroy */
router.delete("/:id", (req, res) => {

    res.send(`Delete the post with this id: ${req.params.id}`)
})

module.exports = router