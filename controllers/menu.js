const Pizza = require('../models/pizza');
const Drink = require('../models/drink');
const Sushi = require('../models/sushi');
const Snack = require('../models/snack');

exports.get_all_products = async (req, res, next) => {
    try {
        const pizzas = await Pizza.find()//.limit(12); limits will be SOON
        const drinks = await Drink.find()//.limit(8);
        const sushi = await Sushi.find()//.limit(10);
        const snacks = await Snack.find();

        if(pizzas && drinks && sushi) {
            res.status(200).json({
                count: {
                    pizzas: pizzas.length,
                    drinks: drinks.length,
                    sushi: sushi.length,
                    snacks: snacks.length
                },
                products: {
                    pizzas: pizzas.map(i => {
                        const { 
                            id, 
                            name,
                            description,
                            price,
                            large,
                            medium,
                            small,
                            type,
                            image  
                        } = i;

                        return {
                            id,
                            name,
                            description,
                            price,
                            large, 
                            medium, 
                            small,
                            type,
                            image
                        }
                    }),
                    drinks: drinks.map(j => {
                        const {
                            id,
                            name,
                            price,
                            ml,
                            forAdult,
                            image
                        } = j;

                        return {
                            id,
                            name,
                            price,
                            ml,
                            forAdult,
                            image
                        }
                    }),
                    sushi: sushi.map(z => {
                        const {
                            id,
                            name,
                            description,
                            type,
                            image,
                            price,
                            weight
                        } = z;

                        return {
                            id,
                            name,
                            description,
                            type,
                            image,
                            price,
                            weight
                        }
                    }),
                    snacks: snacks.map(w => {
                        const {
                            id,
                            name,
                            image,
                            price
                        } = w;

                        return {
                            id,
                            name,
                            image,
                            price
                        }
                    })
                },
                request: {
                    type: 'GET'
                }
            })
        } // end of if-
        else {
            res.status(400).json({
                message: 'No products! You will use to post them'
            })
        }
    }
    catch(err) {
        console.log(err);

        res.status(500).json({
            error: err
        })
    }
}