import Post from "../models/Post.js";
import User from "../models/User.js";

//Create
export const createPost = async (req, res) => {
  try {
    const { userId, picturePath, description } = req.body;
    const user = await User.findById(userId);

    const newPost = new Post({
      userId,
      firstname: user.firstname,
      lastname: user.lastname,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });

    await newPost.save();
    const post = await Post.find(); //Fetching all posts to send as a response to the frontend
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

//Read
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;

    //here findById is not used as findById returns just one post with the given userId whereas find() returns an array of posts with the given userId
    const posts = await Post.find(userId);
    res.status(200).json(posts);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};
