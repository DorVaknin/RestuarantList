
const restaurants = require('../restaurants.json');
const _ = require('lodash');
const router = require("express").Router();

router.get("/getRestaurantList", getRestaurantsList);



async function getRestaurantsList ( req, res) {
    const restaurantsWithRelevantKeys = restaurants.map(getRestaurantWithProperInfo);
    res.status(200).send({ success: true, list: restaurantsWithRelevantKeys });
}

function getRestaurantWithProperInfo (restaurant) {
    const relevantRestaurantFields = ['id', 'restaurant_name', 'address', 'description'];
    const {id, restaurant_name: name, address, description } = _.pick(restaurant, relevantRestaurantFields);
    return {id , name, address, description}
}

module.exports = router;
