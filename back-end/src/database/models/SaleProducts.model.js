const ProductModel = (sequelize, DataTypes) => {
  const ProductsModel = sequelize.define('SaleProductsModel', {
    quantity: DataTypes.NUMBER,
  });

  return User;
};

UserBook.associate = (models) => {
  models.Products.belongsToMany(models.Sales, {
    as: 'sales',
    through: UserBook,
    foreignKey: 'bookId',
    otherKey: 'userId',
  });
  models.Sales.belongsToMany(models.Products, {
    as: 'products',
    through: UserBook,
    foreignKey: 'userId',
    otherKey: 'bookId',
  });
};

module.exports = ProductModel;