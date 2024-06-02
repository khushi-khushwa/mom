import express from 'express';
import cors from 'cors';
import form from './route/form.js';
import ConnectToDb from './config/dbConfig.js';
import news from './route/News.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

const startServer = async () => {
    app.use(express.json());
    app.use(cors());

    await ConnectToDb();

    app.use('/static', express.static(path.join(__dirname, 'public')));
    app.use('/', form);
    app.use('/', news);

    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

    const PORT = process.env.PORT || 5173;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer().catch(err => {
    console.error('Failed to start server', err);
});
