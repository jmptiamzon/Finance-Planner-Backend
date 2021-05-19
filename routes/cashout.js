const router = require('express').Router();
let Cashout = require('../models/cashout.model');

router.route('/').get((req, res) => {
    Cashout.find()
        .then(cashout => res.json(cashout))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addCashout').post((req, res) => {
    const category = req.body.category;
    const amount = req.body.amount;
    const datetime = req.body.datetime;
    const comments = req.body.comments;

    const newCashout = new Cashout({category, amount, datetime, comments});

    newCashout.save()
        .then(cashout => res.json(cashout))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/updateCashout/:id').post((req, res) => {
    const id = req.params.id;
    const category = req.body.category;
    const amount = req.body.amount;
    const datetime = req.body.datetime;
    const comments = req.body.comments;

    Cashout.findById(id)
        .then(cashout => {
            cashout.category = category;
            cashout.amount = amount;
            cashout.datetime = datetime;
            cashout.comments = comments;

            cashout.save()
                .then(() => res.json(cashout))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').delete((req, res) => {
    const id = req.params.id;

    Cashout.findByIdAndDelete(id)
        .then(() => res.json('Deleted successfully!'))
        .catch(err => res.json('Error: ' + err));

});


module.exports = router;