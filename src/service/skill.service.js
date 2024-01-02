const { getAllSkillDB, createSkillDB, getSkillByIdDB, updateSkillsDB, deleteSkillsDB } = require('../repository/skill.repository')

async function getAllSkills() {
    const data = await getAllSkillDB()
    return data
}

async function createSkills(label, category, priority) {
    const data = await createSkillDB(label, category, priority)
    return data
}

async function getSkillById(id) {
    const data = await getSkillByIdDB(id)
    return data
}

async function updateSkillsDB(label, category, priority) {
    const data = await createSkillDB()
    return data
}
async function deleteSkillsDB(label, category, priority) {
    const data = await createSkillDB()
    return data
}

module.exports = { getAllSkills, createSkills }