var express = require('express');
var router = express.Router();
require('dotenv').config();
const axios = require('axios')

const token = () => {
 
    const res =  axios.get(`http://192.168.0.190:8080/api/security/token/${process.env.teamUUID}`).then(res => console.log(res));

} 

setInterval(token,1000)

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.teamUUID)

});



module.exports = router;
