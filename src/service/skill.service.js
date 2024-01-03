const { getAllSkillDB, createSkillDB, getSkillByIdDB, updateSkillDB, deleteSkillDB, updateBodyDB } = require('../repository/skill.repository')

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

async function updateSkill(id, label, category, priority) {
    const data = await updateSkillDB(id, label, category, priority)
    return data
}

async function deleteSkillById(id) {
    const data = await deleteSkillDB(id)
    return data
}

async function updateBody(id, body) {
    const data = await updateBodyDB(id, body)
    return data
}

module.exports = { getAllSkills, createSkills, updateSkill, getSkillById, deleteSkillById, updateBody }