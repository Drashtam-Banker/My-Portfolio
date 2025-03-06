import express from 'express';
import contactCtrl from '../controller/contact.controller.js';
import Contact from '../models/contact.model.js';

const router = express.Router();

// Parameter middleware
router.param('contactId', async (req, res, next, id) => {
    try {
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({
                error: "Contact not found"
            });
        }
        req.contact = contact;
        next();
    } catch (err) {
        return res.status(500).json({
            error: "Could not retrieve contact"
        });
    }
});

// Combined routes using chaining
router.route('/')
    .get(contactCtrl.list)
    .post(contactCtrl.create)
    .delete(async (req, res) => {
        try {
            const result = await Contact.deleteMany({});
            return res.status(200).json({
                message: "All contacts deleted successfully",
                deletedCount: result.deletedCount
            });
        } catch (err) {
            return res.status(500).json({
                error: err.message || "Error deleting contacts"
            });
        }
    });

router.route('/:contactId')
    .get(contactCtrl.read)
    .put(contactCtrl.update)
    .delete(async (req, res) => {
        try {
            if (!req.contact) {
                return res.status(404).json({
                    error: "Contact not found"
                });
            }
            const deletedContact = await Contact.deleteOne({ _id: req.contact._id });
            
            if (deletedContact.deletedCount === 0) {
                return res.status(404).json({
                    error: "Contact not found"
                });
            }
            
            return res.status(200).json({
                message: "Contact deleted successfully",
                result: deletedContact
            });
        } catch (err) {
            return res.status(500).json({
                error: err.message || "Error deleting contact"
            });
        }
    });

export default router;