'use strict';
const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email:{ 
     type: DataTypes.STRING,
     allowNull:false,
     unique:true
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL
  }, {
    sequelize,
    modelName: 'User',
  });

  User.login = async (email,password)=>{
   const user = await User.findOne({
      where: {
        email: email
      }
    });
    if (!user)
      return null;
    const valid = await user.authenticatePassword(password);
    return valid ? user : null;
  }

  User.prototype.authenticatePassword= function(password){
    return new Promise((res, rej)=>{
      bcrypt.compare(password,this.password_hash,(err,valid)=>{
        if(err) return rej(err);

        res(valid);
      })
    })
  }


  User.beforeCreate((user,options)=>{
    return new Promise((resolve,reject)=>{
      if(user.password){
         bcrypt.hash(user.password,10,(error,hash)=>{
      user.password_hash = hash;
      resolve();
    });
      };
    });
   
  });
  return User;
};