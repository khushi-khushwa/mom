import express from 'express'
import formcontroller from '../controller/formcontroller.js';

const form=express.Router();

form.post('/contact',formcontroller);

export default form;