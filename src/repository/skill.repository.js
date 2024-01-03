const pool = require('../db')

// async function getAllSkillDB() {
//     const client = await pool.connect()
//     const sql = 'SELECT * FROM environment'
//     const data = (await client.query(sql)).rows

//     return data
// }

async function getAllSkillDB() {
    const connection = await pool.getConnection()
    const sql = 'SELECT * FROM environment'
    const [data] = await connection.query(sql)

    return data
}

// async function createSkillDB(label, category, priority) {
//     const client = await pool.connect()
//     const sql = 'INSERT INTO environment(label, category, priority) VALUES($1, $2, $3) RETURNING *'
//     const { rows } = await client.query(sql, [label, category, priority])

//     return rows
// }

async function createSkillDB(label, category, priority) {
    const connection = await pool.getConnection()
    const sql = 'INSERT INTO environment(label, category, priority) VALUES(?, ?, ?) '
    await connection.query(sql, [label, category, priority])
    const sql2 = 'SELECT * FROM environment'
    const [data] = await connection.query(sql2)
    return data
}

async function updateSkillDB(id, label, category, priority) {
    const connection = await pool.getConnection()
    const sql = 'UPDATE environment SET label = ?, category = ?, priority = ? WHERE id = ?'
    const data = await connection.query(sql, [label, category, priority, id])

    return data
}

async function updateBodyDB(id, body) {
    const connection = await pool.getConnection()
    const sql1 = 'SELECT * FROM environment WHERE id = ?'
    const [rows] = await connection.query(sql1, [id])

    const newSkillObj = { ...rows[0], ...body }

    const sql = 'UPDATE environment SET label = ?, category = ?, priority = ? WHERE id = ?'
    const [data] = await connection.query(sql, [newSkillObj.label, newSkillObj.category, newSkillObj.priority, id])

    return data
}

async function deleteSkillDB(id) {
    const connection = await pool.getConnection()
    const sql = 'DELETE FROM environment WHERE id = ?'
    const [data] = await connection.query(sql, [id])

    return data
}

async function getSkillByIdDB(id) {
    const connection = await pool.getConnection()
    const sql = 'SELECT * FROM environment WHERE id = ?'
    const data = await connection.query(sql, id)

    return data
}

module.exports = { getAllSkillDB, createSkillDB, getSkillByIdDB, updateSkillDB, deleteSkillDB, updateBodyDB }