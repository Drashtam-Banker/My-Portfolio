import extend from 'lodash/extend.js';
import Contact from '../models/contact.model.js';
import { getErrorMessage } from './error.controller.js';

// Create a new contact
const create = async (req, res) => {
    const contact = new Contact(req.body);
    try {
        await contact.save();
        return res.status(200).json({
            message: "Contact successfully created!"
        });
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err)
        });
    }
};

// List all contacts
const list = async (req, res) => {
    try {
        const contacts = await Contact.find()
            .select('firstname lastname email created updated');
        res.json(contacts);
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err)
        });
    }
};

// Fetch contact by ID and attach to request object
const contactByID = async (req, res, next, id) => {
    try {
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(400).json({
                error: "Contact not found"
            });
        }
        req.profile = contact;
        next();
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve contact"
        });
    }
};

// Read contact details
const read = (req, res) => {
    return res.json(req.profile);
};

// Update contact information
const update = async (req, res) => {
    try {
        let contact = req.profile;
        if (!contact) {
            return res.status(400).json({
                error: "Contact not found"
            });
        }
        contact = extend(contact, req.body);
        contact.updated = Date.now();
        await contact.save();
        res.json(contact);
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err)
        });
    }
};

// Remove contact from database
const remove = async (req, res) => {
    try {
        const contact = req.profile;
        const deletedContact = await contact.deleteOne();
        res.json(deletedContact);
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err)
        });
    }
};

// Export the controller functions
export default {
    create,
    contactByID,
    read,
    list,
    remove,
    update
};
