module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    deliveryAddress: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    saleDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    },
  },
  {
    tableName: 'sales',
    underscored: true,
    timestamps: false
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'user_id',
    }),
    Sale.belongsTo(models.User, {
      as: 'seller',
      foreignKey: 'seller_id',
    })
  }
  
  return Sale;
};
