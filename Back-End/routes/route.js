import express from 'express';
import upload from '../Middleware/fileupload.js';
import Files from '../models/file-schema.js';
const router = express.Router(); // Router 

// Route 1 for upload files to the server 
router.post('/uploads', upload.single("file"), async (req, res) => {

    // Create a new object to upload file with the given name and path 
    const fileObject = {
        path: req.file.path,
        name: req.file.originalname
    }
    try {
        // Save the file into the database 
        const fileApp = await Files.create(fileObject)

        // Sending the response (path of the uploaded file)
        res.status(200).json({ path: `http://localhost:8000/file/${fileApp._id}` })
        console.log(fileApp)
    } catch (error) {
        console.log(error)
    }
})


// Route 2 Getting the uploaded file
router.get('/file/:fileId', async (req, res) => {
    try {
        //  finding the file in a database 
        //  use of req.params because we are using file ID (which was given by Database ) to get the file from the url 
        const file = await Files.findById(req.params.fileId)

        // Increment the downloadContent variable value .
        file.downloadContent++;

        // and updating downloadcontent value . 
        await file.save()

        //  Sending the respone in the form of download the file with the help of path and name of the file.
        res.download(file.path, file.name)
    } catch (error) {
        console.log(error)
    }
})

export default router; 