const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Notes", {
    ID: {
      type: DataTypes.STRING,
      allowNull:false,
      primaryKey: true,

    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
      }
    },
    content:{
      type:DataTypes.STRING,
      allowNull: false
    },
    lastAct:{
      type:DataTypes.DATE,
      allowNull:false
    }
  });
};
