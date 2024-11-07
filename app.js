// Import the Express.js framework
const express = require('express');
const mysql = require('mysql2');

//TODO: Include code for body-parser
const bodyParser = require('body-parser')

const app = express();
const multer=require('multer')
//TODO: Include code for Middleware to parse request bodies
app.use(bodyParser.urlencoded({extended: true}));
// Specify the port for the server to listen on
const port = 3000;

//TODO: Include code to set EJS as the view engine
app.set('view engine', 'ejs');
 
app.use(express.static('public'));
const storage= multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null,'public/images');
    },
    filename:(req,file, cb)=>{
        cb(null,file.originalname);
    }
})

const upload= multer({storage:storage});

app.get('/', (req, res) => {
    res.render('index', { title: 'index' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'about' });
});

app.get('/Moodboard', (req, res) => {
    res.render('Moodboard', { title: 'Moodboard' }); 
});

app.get('/sticker', (req, res) => {
    res.render('sticker', { title: 'sticker' }); 
});

app.get('/flower', (req, res) => {
    res.render('flower', { title: 'flower' }); 
})

app.get('/Escape', (req, res) => {
    res.render('Escape', { title: 'Escape' }); 
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
  