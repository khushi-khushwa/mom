import express from 'express'
import newscontroller from '../controller/newscontroller.js';

const news=express.Router();

news.post('/newslater',newscontroller)

export default news