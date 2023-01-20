const ProductModel = (sequelize, DataTypes) => {
  const ProductsModel = sequelize.define('ProductModel', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  });

  return User;
};

module.exports = ProductModel;