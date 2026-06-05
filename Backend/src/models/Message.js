const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
{
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
    },

    content: {
        type: String,
    },

    mediaUrl: {
        type: String,
        default: "",
    },

    mediaType: {
        type: String,
        enum: ["image", "video", ""],
        default: "",
    },

    readBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
},
{
    timestamps: true,
}
);

module.exports =
mongoose.model("Message", messageSchema);