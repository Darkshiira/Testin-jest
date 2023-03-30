const express = require('express');
const server = express();
server.use(express.json());
const joi = require('joi');

const schema = joi.object({
    username: joi.string().min(3).max(30).required(),
    password: joi.string().min(3).max(30).required()
});

server.post('/register', (req, res) => {
    

    const {error} = schema.validate(req.body);

    if(error) { return res.status(400).json({message: 'username and password is required'})
    }
    res.status(201).json({message: 'user created'})

})

server.post('/login', (req, res) => {
    const {error} = schema.validate(req.body);

    if (error) { return res.status(401).json({message: 'username and password is required'})
    }
    res.status(200).json({message: 'user logged in'})
})

exports.server = server;