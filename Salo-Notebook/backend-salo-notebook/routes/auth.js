const express = require('express');
const Router = express.Router();
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');

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
  user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password

  })
  // .then(user=>{res.json(user)})
  res.json({user})
} catch (error) {
    console.error(error.message);
    res.status(500).send("Something went wrong")
}
});
module.exports = Router;