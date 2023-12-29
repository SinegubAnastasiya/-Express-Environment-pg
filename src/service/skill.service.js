const { getAllSkillDB, createSkillDB } = require('../repository/skill.repository')

async function getAllSkills() {
    const data = await getAllSkillDB()
    return data
}

async function createSkills(label, category, priority) {
    const data = await createSkillDB()
    return data
}

module.exports = { getAllSkills, createSkills }