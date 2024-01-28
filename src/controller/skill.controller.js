const express = require('express')
const { getAllSkills, createSkills } = require('../service/skill.service')

const route = express.Router()

route.get('/', async (req, res) => {
    try {
        const data = await getAllSkills()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.post('/', async (req, res) => {
    try {
        const { label, category, priority } = req.body
        const data = await createSkills(label, category, priority)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = route