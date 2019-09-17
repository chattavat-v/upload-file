const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

// Init Middleware
app.use(
  express.json({
    extended: false
  })
);

app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if(req.files === null) {
    return res.status(400).json({ msg: "No file upload" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if(err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
  });
});

// Upload with firebase 
app.post('/firebase', (req, res) => {
  console.log(req.body);
  res.json({ msg: 'Upload in firebase success' });
});

app.listen(5000, () => console.log("Server Started..."));