"use strict"

module.exports = function(sequelize,DataTypes){
    var Projects=sequelize.define("Projects",{
       projectName :{
        type:DataTypes.STRING,
        allowNull: false
       }
    },{
        tableName : 'Projects'
    });

    return Projects;
}
