const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      this.belongsTo(models.Desk, {
        foreignKey: 'desk_id',
      });
    }
  }
  Result.init({
    user_id: DataTypes.INTEGER,
    desk_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    question_boolian: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};
