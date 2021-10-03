
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {Router} from 'express';
//==================================================================================

const app = express();
app.use(express.static(path.join('./')));
app.use(express.static('./src/components'));
app.use(express.static('./src/assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = Router();
router.get('/', (req, res) => {
    console.log('got in the client router');
    res.render('index');
});
app.use('/', router);

// set engine for rendering
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src'));

const PORT = process.env.PORT || 4200;
//Express js listen method to run project on http://localhost:4200
app.listen(PORT, () => console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))