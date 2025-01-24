const express = require('express');
const router = express.Router();
const Menu = require('../models/menuModel'); 


router.post('/upload', async (req, res) => {
  try {
    const newMenu = new Menu(req.body); 
    const savedMenu = await newMenu.save(); 
    res.status(201).json(savedMenu); 
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get('/fetchMenu', async (req, res) => {
  try {
    const menus = await Menu.find(); 
    res.status(200).json(menus); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
