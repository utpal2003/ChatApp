const mongoose = require("mongoose");

const reactionSchema =
new mongoose.Schema(
{
    message: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    emoji: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
}
);

module.exports =
mongoose.model(
    "Reaction",
    reactionSchema
);