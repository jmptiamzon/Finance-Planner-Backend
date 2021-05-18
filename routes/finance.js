const router = require('express').Router();
let Cashin = require('../models/cashin.model');
//let Cashout = require('../models/cashout.model');
//let Investment = require('../models/investment.model');
//let Category = require('../models/category.model');

// home
router.route('/').get((req, res) => {
    res.json('ok');
});

router.route('/cashin').get((req, res) => {
    Cashin.find()
        .then(cashin => res.json(cashin))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addCashin').post((req, res) => {
    const category = req.body.category;
    const amount = req.body.amount;

    const newCashin = new Cashin({category, amount});

    newCashin.save()
        .then(cashin => res.json('New Record Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/updateCashin/:id').post((req, res) => {
    const id = req.params.id;
    const category = req.body.category;
    const amount  = req.body.amount;

    Cashin.findById(id)
        .then(cashin => {

            cashin.category = category;
            cashin.amount = amount;

            cashin.save()
                .then(() => res.json('Record updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;