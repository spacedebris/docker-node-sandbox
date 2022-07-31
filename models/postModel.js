const mongoose = require("mongoose");
const protect = require("../middleware/authMiddleware");


const postSchema = new mongoose.Schema({
    titile: {
        type: String,
        require: [true, "Lekcja temat nie poemat"]
    },
    body: {
        type: String,
        required: [true, "Musi być ciało"],
    },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;