module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { allowNull: false, type: DataTypes.INTEGER, primaryKey: true },
    title: { allowNull: false, type: DataTypes.STRING },
    content: { allowNull: false, type: DataTypes.STRING },
    userId: { allowNull: false, type: DataTypes.INTEGER },
    published: { allowNull: false, type: DataTypes.DATE },
    updated: { allowNull: false, type: DataTypes.DATE },
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'id', as: 'users' });
  };

  return BlogPost;
};