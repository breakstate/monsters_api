const { Pool } = require('pg');//es6 destruction syntax

const { user, host, database, password, port } = require('../secrets/db_configuration.js');



const pool = new Pool({ user, host, database, password, port});

//pool.query('SELECT * FROM monsters', (err, res) => {   //moved to app.js
//	if (err) return console.log(err);
//
//	console.log(res);
//});                                                 

module.exports = pool;
