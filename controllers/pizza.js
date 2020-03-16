const Pizza = require('../models/pizza');

exports.post_pizza = async (req, res, next) => {
    console.log(req.file);

    const { name, description, price, large, medium, small, type } = req.body;
    const { destination, filename } = req.file;
    let image = `${destination}/${filename}`;

    const newPizza = new Pizza({
        name,
        description,
        price,
        large, 
        medium, 
        small,
        type,
        image
    }) 

    newPizza.save()
    .then(result => {
        console.log(result);

        res.status(201).json({
            message: 'Pizza created successfully, bon appetit',
            result,
            request: {
                type: 'POST'
            }
        })
    })
    .catch(err => {
        console.log(err);

        res.status(500).json({
            error: err
        })
    })
}

exports.update_pizza_by_id = (req, res, next) => {
    const { id } = req.params;
    const { name, description, price, large, medium, small, type } = req.body;
    const image = req.file;

    Pizza.findByIdAndUpdate(id, {
        name,
        description,
        price,
        type,
        large,
        medium,
        small,
        image
    })
    .exec()
    .then(result => {
        console.log(result);

        res.status(200).json({
            message: 'Update Successfully',
            result,
            request: {
                type: 'PUT'
            }
        })
    })
    .catch(err => {
        console.log(err);

        res.status(500).json({
            error: err
        })
    })
}

exports.delete_pizza_by_id = (req, res, next) => {
    const { id } = req.body;

    Pizza.findByIdAndRemove(id)
    .then(result => {
        console.log(result);

        res.status(200).json({
            message: 'Delete successfully',
            request: {
                type: 'DELETE'
            }
        })
    })
    .catch(err => {
        console.log(err);

        res.status(500).json({
            error: err
        })
    })
}

