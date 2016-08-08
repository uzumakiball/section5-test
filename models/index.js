"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
 var env="dev";
 var config=require('./database.json')[env];
 var password=config.password ? config.password : null;
 var sequelize=new Sequelize(config.database,config.user,config.password);
/*var sequelize = new Sequelize(process.env.POSTGRESQL_LOCAL_DB, "", "", {
    host: process.env.POSTGRESQL_LOCAL_HOST,
    dialect: 'postgres',
    freezeTableName: true,
    define: {
        timestamps: false
    },
    pool: {
        max: 9,
        min: 0,
        idle: 10000
    }
});*/

var db = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js") && (file !== "database.json");
    })
    .forEach(function(file) {
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
