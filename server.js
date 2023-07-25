const express = require('express')

const app = express( )

const port = process.env.VCAP_APP_PORT || 5000


app.get('/helloworld1',function (req, res) {
        console.log("how are you?"),
            console.log(req.query.user)
        res.send("heloooo" + ' ' + req.query.user)
    })

app.get('/weather', function (req, res) {
    var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=d39ae98a822ff83846cc017b77346b1d',
  'headers': {
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});



})

app.listen(port, () =>{
    console.log('server is running on port 500')
})


console.log("welcome suraj ")