const express = require('express');
const axios = require('axios')
const router = express.Router();

router.post('/', function(req, res, next) {

  const run = async () => {

    let input = req.body.planetsid.toString()
    let arrayWithIds = input.split(",")

    let planets = []

    const proms = arrayWithIds.map(async id => {
     let {data} = await axios.get(`https://swapi.dev/api/planets/${id}`)
     planets.push(data.name)
    });

    await Promise.all(proms)

    res.send(planets)

   }
  
  run()

});

module.exports = router;
