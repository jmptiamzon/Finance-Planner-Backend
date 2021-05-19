const router = require('express').Router();
let Investment = require('../models/investment.model');

router.route('/').get((req, res) => {
    Investment.find()
        .then(investment => res.json(investment))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/addInvestment').post((req, res) => {
    const category = req.body.category;
    const investment = req.body.investment;

    const newInvestment = new Investment({category, investment});
    newInvestment.save()
        .then(inv => res.json(inv))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/updateInvestment/:id').post((req, res) => {
    const id = req.params.id;
    const category = req.body.category;
    const investment = req.body.investment;

    Investment.findById(id)
        .then(inv => {
            inv.category = category;
            inv.investment = investment;

            inv.save()
                .then(() => res.json(inv))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').delete((req, res) => {
    const id = req.params.id;

    Investment.findByIdAndDelete(id)
        .then(() => res.json('Deleted successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));

});


module.exports = router;