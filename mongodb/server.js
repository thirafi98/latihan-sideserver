const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.listen(7500, function(){
	console.log('listening on 7500')
})

app.get('/',(req, res) => {
	res.sendfile(__dirname + '/index.html')
})

app.use(bodyParser.urlencoded({extended: true}))

app.post('/quotes', (req, res) => {
	console.log(req.body)
})



//now can run with npm run dev

