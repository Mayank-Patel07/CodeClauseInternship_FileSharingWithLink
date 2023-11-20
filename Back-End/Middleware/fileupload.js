import express from 'express';
import multer from 'multer'; // Multer is use for uploading files .  

//  middleware is use before main logic .
const upload = multer({ dest: 'uploads/' })
export default upload