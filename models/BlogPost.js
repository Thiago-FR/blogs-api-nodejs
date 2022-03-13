module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { allowNull: false, autoIncrement: true, type: DataTypes.INTEGER, primaryKey: true },
    title: { allowNull: false, type: DataTypes.STRING },
    content: { allowNull: false, type: DataTypes.STRING },
    userId: { allowNull: false, type: DataTypes.INTEGER },
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE },
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
    underscored: false,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};