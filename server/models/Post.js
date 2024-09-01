import { Schema, model } from "mongoose";
const postSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  mood: {
    type: String,
    enum: [
      "happy",
      "sad",
      "worried",
      "anxious",
      "content",
      "overjoyed",
      "overwhelmed",
    ], //  Mood must be one of these values
    required: true, // The mood field is required
  },
  reactions: {
    like: { type: Number, default: 0 }, //  Initialize like reactions to 0
    love: { type: Number, default: 0 }, //  Initialize love reactions to 0
    hug: { type: Number, default: 0 }, //  Initialize hug reactions to 0
  }
  // createdAt: {
  //   type: Date,
  //   default: Date.now, //  Set the createdAt field to the current date and time
  // },
},
{timestamps : true}
);

const Post = model('Post', postSchema)
export default Post;
