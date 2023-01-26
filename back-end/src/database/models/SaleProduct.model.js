module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      allowNull: false,
      type: DataTypes.NUMBER,
      foreignKey: true,
    },
    productId: {
      allowNull: false,
      type: DataTypes.NUMBER,
      foreignKey: true,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.NUMBER,
    }
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'sales_products',
  });

  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return SaleProduct;
};
