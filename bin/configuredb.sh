#!/bin/bash
/***************************************/
########################################
# ./bin/configuredb.sh                 #
#                                      #
# Used to init or reinit db            #
# called in npm run configure          #
########################################

database="monstersdb"

echo "Configuring database: $database";

dropdb -U node_user monstersdb
createdb -U node_user monstersdb

psql -U node_user monstersdb < ./bin/sql/monsters.sql

echo "configured: $database";
