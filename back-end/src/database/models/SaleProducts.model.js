module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    sale_id: {
      allowNull: false,
      type: DataTypes.NUMBER,
      foreignKey: true,
    },
    product_id: {
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
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
  };

  return SaleProduct;
};
