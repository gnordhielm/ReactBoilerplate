var React = require('react'),
	ReactDOM = require('react-dom'),
	Main = require('Main'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router')

// Load foundation
$(document).foundation()

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<p>
		Boilerplate 3 app
	</p>,
	document.getElementById('app')
)