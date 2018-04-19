const express = require('express');
const app = express();
const pool = require('./db');

app.get('/monsters', (request, response, next) => {
	pool.query('SELECT * FROM monsters ORDER BY id ASC', (err, res) => {
		if (err) return next(err);

		response.json(res.rows);
	});	
});

app.get('/monsters/:id', (request, response, next) => {
	const { id } = request.params;
	//res.send(req.params.id);
	pool.query('SELECT * FROM monsters WHERE id = $1', [id], (err, res) => {
		if (err) return next(err);
	
		response.json(res.rows);
	}); // array is 1 indexed (starts at 1))
});

// Middleware
app.use((err, req, res, next) => {
	res.json(err);
});

//const port = 3000; // moved to /bin/www
//app.listen(port, () => console.log(`listening on port ${port}`));
module.exports = app;
