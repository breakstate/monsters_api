/**************************************/
/* ./bin/sql/monsters.sql             */
/*                                    */
/* Used by ./bin/configuredb.sh       */
/* to init and populate monsters table*/
/**************************************/

CREATE TABLE monsters(
	id serial,
	name character varying(50),
	personality character varying(50)
);

CREATE TABLE habitats(
	id serial,
	name character varying(50),
	climate character varying(50),
	temperature int
);

CREATE TABLE lives(
	monster character varying(50),
	habitat character varying(50)
);

INSERT INTO monsters(name, personality)
VALUES 
('Fluffy', 'agressive'),
('Noodles', 'impatient'),
('Rusty', 'passionate');

INSERT INTO habitats(name, climate, temperature)
VALUES
('desert', 'dry', 100),
('forest', 'haunted', 70),
('mountain', 'icy', 30);

INSERT INTO lives(monster, habitat)
VALUES
('Fluffy', 'desert'),
('Noodles', 'forest'),
('Rusty', 'mountain');
