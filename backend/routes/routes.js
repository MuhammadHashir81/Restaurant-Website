import express from "express";
import { Router } from "express";
import User from "../models/Schema.js";
import { body, validationResult } from 'express-validator'

const router = Router()

const validateUser = [
    body('firstName').isLength({ min: 3 }).withMessage('firstName must be at least 3 characters long'),
    body('lastName').isLength({ min: 3 }).withMessage('lastName must be at least 3 characters long'),
    body('phone').isLength({ min: 11 }).withMessage('phone number must be at least 11 characters long')
];

const handleErrors = (err) => {
    console.log(err)
    let errors = { firstName: '', lastName: '', phone: '' };

    // incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'this email is not registered';
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'this password is incorrect';
    }

    // duplicate email error
    if (err.code === 11000) {
        errors.email = 'this email is already registered';
        return errors;
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        // console.log(err);
        Object.values(err.errors).forEach(({ properties }) => {
            // console.log(val);
            // console.log(properties);
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}


router.post('/signup', validateUser, async (req, res) => {
    const { firstName, lastName, phone } = req.body;
    console.log(phone,firstName ,lastName)
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map(error => ` ${error.msg}`);
            return res.status(400).json({ errors: errorMessages });
        }
        const user = await User.create({ firstName, lastName, phone });
        res.status(201).json({ user: user._id });
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }



})
export default router