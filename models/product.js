'use strict'
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING
    },
    {}
  )
  Product.associate = function(models) {
    // unique: false與直接belongsToMany時，join table是否能記錄多筆有關？
    Product.belongsToMany(models.Cart, {
      as: 'carts',
      through: { model: models.CartItem, unique: false },
      foreignKey: 'ProductId'
    })

    Product.belongsToMany(models.Order, {
      as: 'orders',
      through: { model: models.OrderItem, unique: false },
      foreignKey: 'ProductId'
    })
  }
  return Product
}
