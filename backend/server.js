import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Work from './models/work';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/works');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/works').get((req, res) => {
    Work.find((err, works) => {
        if (err)
            console.log(err);
        else
            res.json(works);
    });
});

router.route('/works/:id').get((req, res) => {
    Work.findById(req.params.id, (err, work) => {
        if (err)
            console.log(err);
        else
            res.json(work);
    });
});

router.route('/works/add').post((req, res) => {
    let work = new Work(req.body);
    work.save()
        .then(work => {
            res.status(200).json({'work': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/works/update/:id').post((req, res) => {
    Work.findById(req.params.id, (err, work) => {
        if (!work)
            return next(new Error('Could not load document'));
        else {
            work.title = req.body.title;
            work.classification = req.body.classification;
            work.description = req.body.description;
            work.year = req.body.year;
            work.imgUrl = req.body.imgUrl;

            work.save().then(work => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/works/delete/:id').get((req, res) => {
    Work.findByIdAndRemove({_id: req.params.id}, (err, work) => {
        if (err)
            res.json(err)
        else
            res.json('Removed successfully');
    });
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));