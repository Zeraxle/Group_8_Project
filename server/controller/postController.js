import Post from "../models/Post.js";

// List of banned words
const bannedWords = [
  "f***",
  "s***",
  "b****",
  "n****",
  "moron",
  "idiot",
  "drugname1",
  "hateword1",
];

// Function to check if the message contains banned words
const containsBannedWords = (message) => {
  const lowerCaseMessage = message.toLowerCase(); // Convert the message to lowercase to make the check case-insensitive
  return bannedWords.some((word) => lowerCaseMessage.includes(word));
};

// Function to create a new post
export const createPost = async (req, res) => {
  try {
    const { message, mood } = req.body;

    // Check if the message contains banned words
    if (containsBannedWords(message)) {
      return res.status(400).json({
        message:
          "Your post contains inappropriate language and cannot be submitted.",
      });
    }

    const newPost = new Post({ message, mood });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get a single post by ID
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update a post by ID
export const updatePost = async (req, res) => {
  try {
    const { message, mood } = req.body;

    // Check if the message contains banned words before updating
    if (containsBannedWords(message)) {
      return res.status(400).json({
        message:
          "Your post contains inappropriate language and cannot be updated.",
      });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { message, mood },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to delete a post by ID
export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addLike = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { "reactions.like": 1 } },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to add a love to a post
export const addLove = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { "reactions.love": 1 } },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to add a hug to a post
export const addHug = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { "reactions.hug": 1 } },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
