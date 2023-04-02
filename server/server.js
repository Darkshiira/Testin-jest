const express = require('express');
const server = express();
server.use(express.json());
const joi = require('joi');
const db = require('./database');

const schema = joi.object({
    username: joi.string().min(3).max(30).required(),
    password: joi.string().min(3).max(30).required()
});

server.post('/register', async (req, res) => {
    
    const {error} = schema.validate(req.body);

    if(error) { return res.status(400).json({message: 'username and password is required'})
    }

    const {username, password} = req.body;

    await db.Names.insert({username: username, password: password}).then(() => {
        res.status(201).json({message: 'user created'})
    })

})

server.post('/login', async (req, res) => {
    const {error, value} = schema.validate(req.body);

    if (error) { return res.status(401).json({message: 'username and password is required'})
    }

    const {username, password} = value;

   const user = await db.Names.find({username: username, password: password});

        if (user) {
            return res.status(200).json({message: 'user logged in'})
        }

        res.status(403).json({message: 'username or password is incorrect'})
    })
    

exports.server = server;