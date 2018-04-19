const express = require('express');
const app = express();
const pool = require('./db');

app.get('/monsters', (request, response) => {
	pool.query('SELECT * FROM monsters ORDER BY id ASC', (err, res) => {
		if (err) return console.log(err);

		response.json(res.rows);
	});	
});

//const port = 3000; // moved to /bin/www
//app.listen(port, () => console.log(`listening on port ${port}`));
module.exports = app;
