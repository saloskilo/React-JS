const express = require('express');
const Router = express.Router();
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'salmanalisaloskil0';

// create user using post method "/api/auth/createuser". No login required
Router.post('/createuser', [
  body('name', "Enter Valid Name").isLength({ min: 3 }),
  body('email', "Type Valid Email").isEmail(),
  body('password', "Password should be length 5").isLength({ min: 5 })

], async (req, res) => {
  console.log(req.body);
  // if there are error, send bad request and errors 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {


    // check wheather the user exist 
    let user = await User.findOne({ email: req.body.email });
    console.log(user);

    if (user) {
      return res.status(400).json({ error: "User with the email exist" })
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt)
    // create new user 
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass

    })
    const data = {
      user: { id: user.id }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    console.log(authToken);

    res.json({ user })
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Something went wrong")
  }
});
module.exports = Router;