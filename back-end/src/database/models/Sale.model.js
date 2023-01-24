module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    seller_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    total_price: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    delivery_adress: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    delivery_number: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    sale_date: {
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
