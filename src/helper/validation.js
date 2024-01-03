function isValidSkill(req, res, next) {
    const { label, category, priority } = req.body

    if (typeof label != 'string') throw new Error('Label is not a string')
    if (typeof category != 'string') throw new Error('Category is not a string')
    if (typeof priority != 'number') throw new Error('Priority is not a number')
    if (!isNaN(label)) throw new Error('Label is not valid')
    if (!isNaN(category)) throw new Error('Category is not valid')
    if (isNaN(priority)) throw new Error('Priority is not valid')
    if (priority < 0) throw new Error('Priority is less than 0')
    
    next()
}

function isValidId(req, res, next) {
    const { id } = req.params

    if (typeof id != 'number' && typeof id != 'string') throw new Error('Id is not a number')
    if (isNaN(id)) throw new Error('Id is not valid')
    if (id < 0) throw new Error('Id is less than 0')
    if (!id) throw new Error('Id is empty')

    next()
}

module.exports = { isValidSkill, isValidId }