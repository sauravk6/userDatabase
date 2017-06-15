/*eslint-disable no-console, no-var */
var express = require('express');
const path = require('path');
const port = 8080;
const app express();

app.use(express.static(_dirname));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(_dirname,'index.html'));
});


app.listen(port);

console.log(server started);