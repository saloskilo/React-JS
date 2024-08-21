const express = require('express');
const Router = express.Router();
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');


Router.post('/',[
    body('name',"Enter Valid Name").isLength({min:3}),
    body('email',"Type Valid Email").isEmail(),
    body('password',"Password should be length 5").isLength({min:5})

], (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors:errors.array()});
    }
  User.create({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password

  }).then(user=>{res.json(user)})
    // res.send(req.body)

});
module.exports = Router;