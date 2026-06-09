const Message =
    require("../models/Message");

const Chat =
    require("../models/Chat");

const sendMessage =
    async (req, res) => {

        try {

            const {
                chatId,
                content
            }
                =
                req.body;

            const message =
                await Message.create({

                    sender: req.user._id,

                    chat: chatId,

                    content

                });

            const fullMessage =
                await Message.findById(message._id)
                    .populate(
                        "sender",
                        "name profilePic"
                    )
                    .populate("chat");

            await Chat.findByIdAndUpdate(
                chatId,
                {
                    latestMessage: message._id
                }
            );

            res.status(201).json(
                fullMessage
            );

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }

    };
const getMessages =
    async (req, res) => {

        try {

            const messages =
                await Message.find({

                    chat: req.params.chatId

                })

                    .populate(
                        "sender",
                        "name profilePic"
                    )

                    .sort({
                        createdAt: 1
                    });

            res.status(200).json(
                messages
            );

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }

    };

module.exports = {
    sendMessage, getMessages
};