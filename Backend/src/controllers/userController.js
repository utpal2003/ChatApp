
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const generateUsername = require("../utils/generateUsername");

const registerUser = async (req, res) => {

    try {

        const {
            name,
            email,
            password,
        } = req.body;

        const exists = await User.findOne({ email });

        if (exists) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        const username =
            await generateUsername(name);

        const user = await User.create({
            name,
            username,
            email,
            password,
        });

        res.status(201).json({

            success: true,

            message: "User registered successfully",

            user: {

                _id: user._id,

                name: user.name,

                username: user.username,

                email: user.email

            },

            token: generateToken(user._id)

        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

const loginUser = async (req, res) => {

    try {

        const {
            email,
            password,
        } = req.body;

        const user =
            await User.findOne({ email });

        if (
            !user ||
            !(await user.matchPassword(password))
        ) {

            return res.status(401).json({
                message: "Invalid email or password",
            });

        }

        res.status(200).json({

            success: true,

            message: "Login successful",

            user: {

                _id: user._id,

                name: user.name,

                username: user.username,

                email: user.email,

                profilePic: user.profilePic

            },

            token: generateToken(user._id)

        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};


const getWorldUsers =
    async (req, res) => {

        try {

            const users =
                await User.find({

                    _id: {
                        $ne: req.user._id
                    }

                }).select("-password");

            res.status(200).json(users);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }

    };

module.exports = {
    registerUser,
    loginUser,
    getWorldUsers
};