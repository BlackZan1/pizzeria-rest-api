const Drink = require('../models/drink');
const saveImage = require('../utils/saveImage');

exports.post_drink = async (req, res, next) => {
    const { name, price, ml, forAdult } = req.body;
    const { destination, filename } = req.file;

    let image = `${destination}/${filename}`;

    const newDrink = new Drink({
        name,
        price,
        ml,
        forAdult,
        image
    })

    newDrink.save()
    .then(result => {
        console.log(result);

        res.status(201).json({
            message: 'Drink created successfully!!!',
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

exports.update_drink_by_id = (req, res, next) => {
    const { id } = req.params;
    const { name, price, forAdult, ml } = req.body;
    const { destination, filename } = req.file;

    let image = `${destination}/${filename}`;

    Drink.findByIdAndUpdate(id, {
        name, 
        price, 
        forAdult, 
        ml,
        image
    })
    .exec()
    .then(result => {
        console.log(result);

        res.status(200).json({
            message: 'Update Successfully!!!',
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

exports.delete_drink_by_id = (req, res, next) => {
    const { id } = req.body;

    Drink.findByIdAndRemove(id)
    .then(result => {
        console.log(result);

        res.status(200).json({
            message: 'Delete successfully!!!',
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