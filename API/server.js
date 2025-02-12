const express = require('express');
const cors = require('cors');

const config = require('./config/config');
const db = require('./config/database');
const routes = require('./routers/index');
const errorMiddleware = require('./middlewares/error.middleware');

const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
var mysql      = require('mysql');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', routes);
app.use(errorMiddleware);

require('./jobs/cronJob.js');

db.sync({alter: config.db.alter, force: config.db.force})
    .then(()=>{
        console.log(`Databázis szinkelt sikerteljesen.`);
    })
    .catch((err)=>{
        console.log(`Databázis szinkelő hiba: ` + err);
    });

// szerver indítása    
app.listen(config.port, ()=>{
    console.log(`Szerver futa http://${config.db.host}:${config.port}`);
});