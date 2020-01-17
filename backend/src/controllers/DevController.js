const axios = require('axios');
const Dev = require('../models/Dev');

//index, show, store, update, destroy

module.exports = {
    async index(req, resp){
        const devs = await Dev.find();
        return resp.json(devs);
    },
    
    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;
        
        const dev = await Dev.findOne({ github_username });
        
        if(!dev){
            const apiResp = await axios.get(`http://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio} = apiResp.data;
            const techsArray = techs.trim().split(',');
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        
            console.log(name, avatar_url, bio);
        }
        return res.json(dev);
    }
};