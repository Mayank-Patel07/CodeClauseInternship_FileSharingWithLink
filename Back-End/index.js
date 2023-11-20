// const express = require('express')
import express from 'express';
const PORT = 8000; // port number 
import router from './routes/route.js';
import cors from 'cors' // cors is used to allow access of two different ports
import connectToDb from './DB/ConnectDB.js'; 
const app = express()
connectToDb()

app.use(cors()); // Required for connection with Front and Backend 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router); // Route definition for routes 

app.listen(PORT, () => {
    console.log(`App is listening on port no. ${PORT}`)
})