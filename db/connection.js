require('dotenv').config();
const { Pool } = require('pg');

function getKnex() {
    const knex = require('knex')({
        client: process.env.DB_CLIENT,
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DB_NAME
        }
    });

    return knex;
}

function getPool() {
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PWD,
        port: process.env.DB_PORT,
    });

    return pool;
}

module.exports = {
    getKnex,
    getPool
}