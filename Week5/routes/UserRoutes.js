const express = require('express');
const User = require('../models/User');
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());  // This allows `req.body` to be parsed as JSON

// Route for fetching users: http://localhost:8081/users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        if (users.length > 0) {
            console.log(`user : ${JSON.stringify(users[0])}`);
            console.log(`user's name : ${JSON.stringify(users[0].name)}`);
        } else {
            console.log("No users found.");
        }
        res.status(200).send(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send({ error: err.message });
    }
});

// Route for inserting a user: http://localhost:8081/insert
app.post('/insert', async (req, res) => {
    try {
        if (req.body) {
            const newUser = new User(req.body);
            console.log(`User to save to DB: ${JSON.stringify(req.body)}`);
            await newUser.save();
            res.status(201).json({ message: 'User added to the DB successfully', user: newUser });
        } else {
            console.log('No data provided to be saved.');
            res.status(400).json({ error: 'No data provided to be saved.' });
        }
    } catch (err) {
        console.log('Something went wrong when saving user:', err);
        if (err.name === 'ValidatorError') {
            const validationErrors = Object.values(err.errors).map((e) => e.message);
            res.status(400).json({ errors: validationErrors });
        } else {
            res.status(400).json({ error: err.message });
        }
    }
});

module.exports = app;
