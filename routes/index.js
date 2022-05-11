var express = require('express');
var router = express.Router();
require('dotenv').config();
const axios = require('axios')
const areaClient = []
const headers = {
  hash:'',
  time: '',
  teamUUID : process.env.teamUUID
}
const baseURL = 'http://192.168.0.190:8080'

const token = async () => {
 
    const res =  await axios.get(`${baseURL}/api/security/token/${process.env.teamUUID}`);
    headers.hash = res.data.hash;
    headers.time = res.data.time;
    console.log(headers)

}

const getAreasClients = async () => {
  await token()
  const area = await axios.get(`${baseURL}/api/game/areainfos`, {headers: headers})
  const clients = await axios.get(`${baseURL}/api/game/clients`, {headers: headers});
  computeRiskAssesment(area);

  area.data.forEach((data) => {
    console.log(data)
    
  })



}
getAreasClients()


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.teamUUID)

});

router.get('/riskassessment', function(req, res, next) {
  

})



module.exports = router;
