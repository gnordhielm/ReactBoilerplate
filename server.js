var express = require('express')

// Create our app
var app = express()
// set up port - const will error out if you try to change it
const PORT = process.env.PORT || 3000

// resolve https to http
app.use(function (req,res,next) {
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url)
	} else {
		next()
	}
})

// Folder to expose to the server
app.use(express.static('public'))
	
app.listen(PORT, function(){
	console.log("Server listening on port", PORT)
})