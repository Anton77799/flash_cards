const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Desk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Result, {
        foreignKey: 'desk_id',
      });
      this.hasMany(models.Question, {
        foreignKey: 'desk_id',
      });
    }
  }
  Desk.init({
    name_desk: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Desk',
  });
  return Desk;
};
