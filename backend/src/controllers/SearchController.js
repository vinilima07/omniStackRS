
const Dev = require('../models/Dev')

module.exports = {
    async index(req, resp){
        const { latitude, longitude, techs } = req.query;
        const techsArray = techs.trim().split(',');

        const devs = await Dev.find({
            techs: {
                $in: techsArray,     
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000,
                }
            }
        });

        return resp.json( devs );
    }
}