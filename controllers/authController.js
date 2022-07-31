const User = require("../models/userModel");

const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashpassword = await bcrypt.hash(password, 12);
        //console.log(hashpassword);
        const newUser = await User.create({
            username,
            password: hashpassword,
        });
        //console.log(newUser);
        req.session.user = newUser;
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser,
            },
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({
            status: 'fail',
        });

    }
}

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'user not found'
            });
        }

        const isCorrect = await bcrypt.compare(password, user.password);

        if (isCorrect) {
            req.session.user = user;
            console.log('legged in');
            res.status(200).json({
                status: "success",
                data: {
                    user: user,
                }
            });
        } else {
            res.status(400).json({
                status: 'fail',
                message: 'incorect username or pass'
            });
        }

    } catch (e) {
        console.log(e);
        res.status(400).json({
            status: 'fail',
        });

    }
}
