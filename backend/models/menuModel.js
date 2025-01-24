const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  category: {
    type: String, 
    required: true,
  },
  subcategory: {
    type: String, 
    required: true,
  },
  items: [
    {
      name: {
        type: String, 
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String, 
        required: true,
      },
    },
  ],
});

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;
