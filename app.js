/***************************************/
/* ./app.js                            */
/*                                     */
/* Entry point for our application     */
/***************************************/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const verifyToken = require('./auth/VerifyToken');

/*	//moved to /routes/index/js
const monsters = require('./routes/monsters');
const habitats = require('./routes/habitats');
const lives = require('./routes/lives');
*/


/*const pool = require('./db');    // moved to /routes/monsters.js 

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
});*/

// Middleware
app.use(bodyParser.json());

// JWT auth middleware
app.use('*', verifyToken);

/* //moved to /routes/monsters
app.use('/monsters', monsters); // route
app.use('/habitats', habitats);
app.use('/lives', lives);
*/


app.use('/', routes);


app.use((err, req, res, next) => {
	res.json(err);
});

//const port = 3000; // moved to /bin/www
//app.listen(port, () => console.log(`listening on port ${port}`));
module.exports = app; // not sure why exported
