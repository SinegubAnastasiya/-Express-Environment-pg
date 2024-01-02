const express = require('express')
const { getAllSkills, createSkills, getSkillById, updateSkill, deleteSkill } = require('../service/skill.service')

const route = express.Router()

route.get('/', async (req, res) => {
    try {
        const data = await getAllSkills()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await getSkillById(id)
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

route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { label, category, priority } = req.body
        const data = await updateSkill(id, label, category, priority)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await deleteSkill(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = route