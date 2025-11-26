const express = require("express");
const app = express();
const port = 3000;
const postRouter = require("./routers/posts");

app.use(express.static("public"));

app.listen(port, () => {

    console.log(`This server is running at port: ${port}`);
});

app.get("/", (req, res) => {

    res.send("Welcome to my blog!")
});

app.use("/posts", postRouter);