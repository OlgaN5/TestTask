class AccessToDatabase {
    async create(Model, data) {
        return await Model.create(data)
    }
    async update(Model, conditions, dataToUpdate) {
        return await Model.update(dataToUpdate, {
            where: conditions,
        })
    }
    async readOne(Model, conditions) {
        return await Model.findOne({
            where: conditions,
            raw: true
        })
    }
    async readAll(Model, page) {
        const countRecords = await Model.count()
        if (!page) page = 1
        const limit = 3
        const offset = (page - 1) * limit
        const result = await Model.findAll({
            offset: offset,
            limit: limit,
            order: [
                ['createdAt', 'ASC']
            ],
        })
        return {
            countResult: countRecords,
            counrPageResult: limit,
            page: page,
            pageResult: result
        }
    }
}

module.exports = new AccessToDatabase()