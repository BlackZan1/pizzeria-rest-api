const Sushi = require('../models/sushi');

exports.post_sushi = (req, res, next) => {
    const { name, description, type, price, weight } = req.body;
    const { filename, destination } = req.file;
    let image = `${destination}/${filename}`;

    const newSushi = new Sushi({
        name,
        description,
        type,
        price,
        weight,
        image
    })

    newSushi.save()
    .then(result => {
        console.log(result);

        res.status(201).json({
            message: 'Sushi created, my sensei',
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

exports.udpate_sushi_by_id = (req, res, next) => {
    const { id } = req.params;
    const { name, description, type, price, weight } = req.body;
    const { destination, filename } = req.file;

    let image = `${destination}/${filename}`;

    Sushi.findByIdAndUpdate(id, {
        name, 
        description, 
        type, 
        price, 
        weight,
        image
    })
    .exec()
    .then(result => {
        console.log(result);

        res.status(200).json({
            message: 'Update Successfully, my sensei',
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

exports.delete_sushi_by_id = (req, res, next) => {
    const { id } = req.body;

    Sushi.findByIdAndRemove(id)
    .then(result => {
        console.log(result);

        res.status(200).json({
            message: 'Delete successfully, my sensei',
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