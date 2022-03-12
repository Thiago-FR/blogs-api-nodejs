const { DataTypes } = require('sequelize');

const attributes = {
  postId: { allowNull: false, type: DataTypes.INTEGER, primaryKey: true },
  categoryId: { allowNull: false, type: DataTypes.INTEGER, primaryKey: true },
};

module.exports = (sequelize) => {
  const PostsCategorie = sequelize.define('PostsCategorie', attributes,
  { timestamps: false, tableName: 'PostsCategories', underscored: false });

  PostsCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: PostsCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  
    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostsCategorie,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostsCategorie;
};