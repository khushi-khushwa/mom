import express from 'express'
import cors from 'cors'
import form from './route/form.js';
import ConnectToDb from './config/dbConfig.js';
import news from './route/News.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();
// const path = require('path');
app.use(express.json());
app.use(cors());
await ConnectToDb();
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/',form)
app.use('/',news)

app.get("/", (req, res) =>{
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client" , "build", "index.html"));
});
app.listen(5000,()=>{
    console.log("start")
});