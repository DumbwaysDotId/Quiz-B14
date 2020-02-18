'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    title: DataTypes.STRING,
    is_done: DataTypes.BOOLEAN,
    created_by: DataTypes.INTEGER
  }, {});
  todo.associate = function(models) {
    // associations can be defined here
    // todo.belongsTo(models.users, {
    //   as : 'createdeBy',
    //   foreignKey : 'created_by'
    // })
  };
  return todo;
};