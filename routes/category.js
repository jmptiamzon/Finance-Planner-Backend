const router = require('express').Router();
let Category = require('../models/category.model');

router.route('/').get((req, res) => {
    Category.find()
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/addCategory').post((req, res) => {
    const category = req.body.category;

    const newCategory = new Category({category});
    newCategory.save()
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/updateCategory/:id').post((req, res) => {
    const id = req.params.id;
    const category = req.body.category;

    Category.findById(id)
        .then(cat => {
            cat.category = category;

            cat.save()
                .then(() => res.json(cat))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').delete((req, res) => {
    const id = req.params.id;

    Category.findByIdAndDelete(id)
        .then(() => res.json('Deleted successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
        
});


module.exports = router;