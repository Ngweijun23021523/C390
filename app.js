// Import the Express.js framework
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const multer = require('multer');

// Initialize Express app
const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Add this for JSON data

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Define Routes
app.get('/', (req, res) => {
    res.render('Home', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/Moodboard', (req, res) => {
    res.render('Moodboard', { title: 'Moodboard' });
});

app.get('/sticker', (req, res) => {
    res.render('sticker', { title: 'Sticker' });
});

app.get('/flower', (req, res) => {
    res.render('flower', { title: 'Flower' });
});

app.get('/Escape', (req, res) => {
    res.render('Escape', { title: 'Escape' }); 
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
