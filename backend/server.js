const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')
const menuRoutes = require('./routes/menuRoutes');

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log(error);
    });

app.use('/menu', menuRoutes);

app.get('/', (req, res) => {
    res.send('Backend is running!');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
