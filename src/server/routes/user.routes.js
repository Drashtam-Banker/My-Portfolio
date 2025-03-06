import express from 'express';
import userCtrl from '../controller/user.controller.js';
import User from '../models/user.model.js';

const router = express.Router();

// Parameter middleware
router.param('userId', userCtrl.userByID);

// Combined routes using chaining
router.route('/')
    .get(userCtrl.list)
    .post(userCtrl.create)
    .delete(async (req, res) => {
        try {
            await User.deleteMany({});
            return res.status(200).json({
                message: "All users deleted successfully"
            });
        } catch (err) {
            return res.status(400).json({
                error: err.message
            });
        }
    });

router.route('/:userId')
    .get(userCtrl.read)
    .put(userCtrl.update)
    .delete(async (req, res) => {
        try {
            const deletedUser = await userCtrl.remove(req.profile);
            return res.status(200).json({
                message: "User deleted successfully",
                user: deletedUser
            });
        } catch (err) {
            return res.status(400).json({
                error: err.message
            });
        }
    });

export default router;