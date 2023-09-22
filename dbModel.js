import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
    channel: String,
    song: String,
    likes: String,
    messages: String,
    description: String,
    shares: String
});

export default mongoose.model('tiktokVideos', tiktokSchema);