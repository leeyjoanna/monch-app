const router = require('express').Router()
const MonchList = require('../models/monchList')
const Restaurant = require('../models/restaurant')
const config = require('../utils/config')
const API_KEY = config.API_KEY
const yelpURL = 'https://api.yelp.com/v3/businesses'
const axios = require('axios')
const {v4: uuidv4} = require('uuid')



// main page load
router.get('/myList/', (request, response) => {
  let returnData = {
    url: '',
    title: 'create your new list:',
    date: '',
    restaurants: []
  }
    return response.json(returnData)
})


// gets unique URL
router.get('/myList/:uuid', async (request, response) => {
  let restaurantArray = []

  const url = request.params.uuid
  // console.log(url)

  if (url === ''){
    let returnData = {
      url: '',
      title: 'create your new list:',
      date: '',
      restaurants: []
    }
      return response.json(returnData)
  }

  const monchList = await MonchList.findOne({url: url})
  // console.log(monchList)

  const restaurantList = await Restaurant.find({url_id:url})
  // console.log(restaurantList)
  
  for (let i = 0; i < restaurantList.length; i++){
    try{
      const yelpObj = await axios.get(`${yelpURL}/${restaurantList[i].restaurant_id}`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` 
        }
      })
      // console.log('yelp obj', yelpObj.data)
      const voters = await Restaurant.findOne({restaurant_id:restaurantList[i].restaurant_id, url_id:url})
      // console.log('voters', voters.votes)
      yelpObj.data.votes = voters.votes
      // console.log('yelp obj', yelpObj.data)
      restaurantArray.push(yelpObj.data)

    } catch (e) {
      console.log(e)
    }
  }


  if(monchList){
    let returnData = {
      url: url,
      title: monchList.title,
      date: monchList.date,
      restaurants: restaurantArray
    }
    // console.log(returnData)
    return response.json(returnData)
  }
  else {
    return response.status(400).json({
      body: 'no url bud'
    })
  }
  
})

// update addition to list
router.put('/myList/:uuid', async (request, response) => {
  const body = request.body 
  const uuid = request.params.uuid
  // console.log(body.itemAPI)
  // console.log(uuid)

  const restaurant = new Restaurant({
    restaurant_id: body.itemAPI.id,
    url_id: uuid,
    votes: []
  })

  restaurant.save()
    .catch(e => console.log(e))
  return response.status(200)
})

// updates votes
router.put('/myList/:uuid/votes', async (request, response) => {
  const body = request.body.data
  const uuid = request.params.uuid
  // console.log(body)

  const votersOld = await Restaurant.findOne({restaurant_id:body.itemAPI, url_id:uuid})

  // console.log(votersOld)
  // console.log(votersOld.votes)
  const filter = {restaurant_id: body.itemAPI, url_id: uuid}
  const voteArray = votersOld.votes
  voteArray.push(body.name)
  const update = {votes: voteArray }
  // console.log(update.votes)

  await Restaurant.findOneAndUpdate(filter, update, {
    new: true
  });

  return response.json(update.votes)
})

// delete entry from list
router.delete('/myList/:uuid', async (request, response) => {
  const body = request.body
  const uuid = request.params.uuid
  // console.log(body.itemAPI)
  // console.log(uuid)

  await Restaurant.findOneAndDelete({url_id: uuid, restaurant_id: body.itemAPI})
  return response.status(200)
})

// create unique URL and new list
router.post('/newList', (request, response) => {
  const body = request.body.saveData
  const title = body.title
  const listArray = body.restaurants
  const date = body.date
  const newURL = uuidv4()

  if (body === undefined) {
      return response.status(400).json({
      error: 'content missing'
      })
  }
  const list = new MonchList({
    url: newURL,
    title: title,
    date: date
  })

  list.save()
    .catch(e => console.log(e))

  for (let i = 0; i < (listArray).length; i++){
    const restaurant = new Restaurant({
      restaurant_id: listArray[i],
      url_id: newURL,
      votes: []
    })
    // console.log(restaurant)

    restaurant.save()
      .catch(e => console.log(e))
  }
  response.json({redirect: newURL})
})



// call yelp API to search
router.get('/searchResult/', (request, response) => {
  // console.log(request.query)

  const urlQueryString = new URLSearchParams(request.query)
  // console.log('APIKEY',API_KEY)
  axios
    .get( `${yelpURL}/search?` + urlQueryString, {
      headers: { Authorization: `Bearer ${API_KEY}` 
      }
    })
    .then(result => {
      // console.log('yelp search result', result)
      // console.log(result.data.businesses[0])
      response.json(result.data.businesses)
    })
    .catch(e => console.log(e));
})


// call yelp API for specific business by yelp_id
router.get(`/searchResult/id`, (request, response) => {
  const yelp_id = request.query.id

  // console.log(yelp_id)
  const urlQueryString = new URLSearchParams(request.query)

  axios
    .get(`${yelpURL}/${yelp_id}`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` 
      }
    })
    .then(result => {
      response.json(result.data)
      // console.log(result.data)
    })
    .catch(e => console.log(e));
})
  
module.exports = router
