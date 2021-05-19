const router = require('express').Router();
let Cashin = require('../models/cashin.model');

// home
router.route('/').get((req, res) => {
    Cashin.find()
        .then(cashin => res.json(cashin))
        .catch(err => res.json('Error: ' + err));
});

router.route('/addCashin').post((req, res) => {
    const category = req.body.category;
    const amount = req.body.amount;
    const datetime = req.body.datetime;
    const comments = req.body.comments;

    const newCashin = new Cashin({category, amount, datetime, comments});

    newCashin.save()
        .then(cashin => res.json('New Record Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/updateCashin/:id').post((req, res) => {
    const id = req.params.id;
    const category = req.body.category;
    const amount  = req.body.amount;
    const datetime = req.body.datetime;
    const comments = req.body.comments;
    
    /* not retrieving the new data
    Cashin.findByIdAndUpdate(id, 
        {category, amount}, 
        (err, result) => {
            if (err) res.status(400).json('Error: ' + err);
            else res.json(result);
        }
    );*/

    Cashin.findById(id)
        .then(cashin => {

            cashin.category = category;
            cashin.amount = amount;
            cashin.datetime = datetime;
            cashin.comments = comments;

            cashin.save()
                .then(() => res.json(cashin))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    const id = req.params.id;

    Cashin.findByIdAndDelete(id)
        .then(cashin => res.json('Deleted successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;