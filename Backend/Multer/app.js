// Multer is used for uploading files in Node.js from the client to the server.

require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const multer = require('multer');
const PORT = 4444;
const cloudinary = require('cloudinary').v2; // taking v2 object of cloudinary
const DatauriParser = require('datauri/parser'); // DatauriParser is used to convert file buffer to data URI
const parser = new DatauriParser();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


// disk storage configuration for multer 
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'images')
    },
    filename: (req, file, cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + file.originalname);
    }
})

// fileFilter to filter the files based on their mimetype
fileFilter = (req, file, cb)=> {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png')
        cb(null, true)
    else cb(null, false)
}


app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true })); 

// app.use(multer({ dest: 'images' }).single('image'));
// app.use(multer({ storage,fileFilter }).single('image'));
app.use(multer({}).single('image'));   // to uplaod image directly to cloudinary




app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    // const {title, desc} = req.body;
    // console.log(title, desc);
    // console.log(req.file); // This will log the file information(path)

    const ext = path.extname(req.file.originalname);        // Extracting the file extension from the original file name
    const fileUri = parser.format(ext, req.file.buffer);     // Converting the file buffer to data URI format
    cloudinary.uploader.upload(`${fileUri.content}`, (error, result)=>{
        console.log(result, error);
        res.send("File uploaded successfully on cloudinary");
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});