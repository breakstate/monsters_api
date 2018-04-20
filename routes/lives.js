const { Router } = require('express'); //destructuring 
const router = Router();
const pool = require('../db');

router.get('/', (request, response, next) => {
	pool.query('SELECT * FROM lives', (err, res) => {
		if (err) return next(err);

		response.json(res.rows);
	});
});

module.exports = router;
