import { UserModel } from "./UserModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const saltRounds = 10;
export const register = async (req, res) => {
    try {
        const newUser = req.body

        const checkUser = await UserModel.findOne({ username: newUser.username });
        if (checkUser) {
            return res.status(400).json({ error: 'username is exit' })
        }

        const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
        newUser.password = hashedPassword;

        const user = new UserModel(newUser);
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getAllUser = async (req, res) => {
    try {
        const ListUser = await UserModel.find();
        res.status(200).json(ListUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const login = async (req, res) => {

    try {
        const { username, password } = req.body
        const user = await UserModel.findOne({ username: username });
        if (!user) {
            return res.status(401).json({ error: 'invalid username or password' })
        }
        const checkpassword = await bcrypt.compare(password, user.password)

        if (!checkpassword) {
            return res.status(401).json({ error: 'invalid username or password' })
        }
        const secretKey = process.env.SECRET_KEY;
        const accessToken = jwt.sign({
            _id: user._id,
            username: user.username,
            password: user.password,
            name: user.name,
            phoneNumber: user.phoneNumber,
            address: user.address,
            role: user.role,
        }, secretKey)

        return res.status(200).json({
            data: {
                accessToken: accessToken,
                user: user
            }
        });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}