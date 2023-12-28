const accessToDatabase = require('../utils/accessToDatabase')
const User = require('../models/user.model')
const _ = require('lodash')
class UserService {

    async createUser(data) {
        const user = await accessToDatabase.create(User, data)
        return _.omit(user.dataValues, ['password'])
    }
    async findUserByConditions(conditions) {
        console.log(conditions)
        return await accessToDatabase.readOne(User, conditions)
    }
    async findUsers(page) {
        //pagination
        return await accessToDatabase.readAll(User, page)
    }
    async editUser(userId, dataToUpdate) {
        const conditions = {
            id: userId
        }
        return await accessToDatabase.update(User, conditions, dataToUpdate)
    }

}
module.exports = new UserService()