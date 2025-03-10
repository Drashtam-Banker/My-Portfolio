import User from '../models/user.model.js';
import { getErrorMessage } from './error.controller.js';

// Create a new user
const create = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        return res.status(200).json({
            message: "Successfully signed up!"
        });
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err)
        });
    }
};

// List all users
const list = async (req, res) => {
    try {
        const users = await User.find().select('name email updated created');
        res.json(users);
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err)
        });
    }
};

// Fetch user by ID and attach to request object
const userByID = async (req, res, next, id) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({
                error: "User not found"
            });
        }
        req.profile = user;
        next();
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve user"
        });
    }
};

// Read user profile (without sensitive data)
const read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

// Update user information
const update = async (req, res) => {
    try {
        let user = req.profile;
        if (!user) {
            return res.status(400).json({
                error: "User profile not found"
            });
        }
        user = Object.assign(user, req.body);
        user.updated = Date.now();
        await user.save();
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json(user);
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err)
        });
    }
};

// Remove user (delete user from database)
const remove = async (req, res) => {
    try {
        const user = req.profile;
        let deletedUser = await user.deleteOne();
        deletedUser.hashed_password = undefined;
        deletedUser.salt = undefined;
        res.json(deletedUser);
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err)
        });
    }
};

// Export the controller functions
export default {
    create,
    userByID,
    read,
    list,
    remove,
    update
};
