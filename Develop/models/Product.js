// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
const Category = require('./Category');
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING(60),
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        min: 0.01, // Ensures price > 0
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        min: 1, // Ensures stock > 0
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category, // Refers to the Category model
        key: 'id',      // The key in the Category model
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
