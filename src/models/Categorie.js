module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    id: { allowNull: false, autoIncrement: true, type: DataTypes.INTEGER, primaryKey: true },
    name: { allowNull: false, type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'Categories',
    underscored: false,
  });

  return Categorie;
};