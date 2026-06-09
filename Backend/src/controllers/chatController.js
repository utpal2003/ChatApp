const Chat =
    require("../models/Chat");

const accessChat =
    async (req, res) => {

        try {

            const { userId } =
                req.body;

            if (!userId) {

                return res.status(400).json({
                    message: "User ID Required"
                });

            }

            let chat =
                await Chat.findOne({

                    isGroupChat: false,

                    users: {
                        $all: [
                            req.user._id,
                            userId
                        ]
                    }

                })
                    .populate("users", "-password")
                    .populate("latestMessage");

            if (chat) {

                return res.status(200).json(chat);

            }

            chat =
                await Chat.create({

                    chatName: "sender",

                    isGroupChat: false,

                    users: [
                        req.user._id,
                        userId
                    ]

                });

            chat =
                await Chat.findById(chat._id)
                    .populate("users", "-password");

            res.status(201).json(chat);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }

    };


const fetchChats =
    async (req, res) => {

        try {

            const chats =
                await Chat.find({

                    users: req.user._id

                })

                    .populate(
                        "users",
                        "-password"
                    )

                    .populate(
                        "latestMessage"
                    )

                    .sort({
                        updatedAt: -1
                    });

            res.status(200).json(chats);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }

    };

module.exports = {
    accessChat,fetchChats
};