const Snack = require('../models/snack');

exports.post_snack = (req, res, next) => {
    const { name, price } = req.body;
    const { filename, destination } = req.file;

    let image = `${destination}/${filename}`;

    let newSnack = new Snack({
        name,
        price,
        image
    })

    newSnack.save()
    .then(result => {
        console.log(result);

        res.status(201).json({
            message: 'Snack created',
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

exports.update_snack_by_id = (req, res, next) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const { filename, destination } = req.file;

    let image = `${destination}/${filename}`;

    const snack = Snack.findByIdAndUpdate(id, {
        name,
        price,
        image
    })
    .then(result => {
        console.log(result);

        res.status(200).json({
            message: 'Update successfully',
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

exports.delete_snack_by_id = (req, res, next) => {
    const { id } = req.body;

    Snack.findByIdAndRemove(id)
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
