const express = require('express');
const { getAllSkills, createSkills, getSkillById, updateSkill, deleteSkillById, updateBody } = require('../service/skill.service');
const { isValidSkill, isValidId } = require('../helper/validation');
const { buildResponse } = require('../helper/buildResponse');
const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const data = await getAllSkills();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', isValidId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getSkillById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', isValidSkill, async (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data = await createSkills(label, category, priority);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', isValidId, isValidSkill, async (req, res) => {
  try {
    const { id } = req.params;
    const { label, category, priority } = req.body;
    const data = await updateSkill(id, label, category, priority);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', isValidId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteSkillById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.patch('/:id', isValidId, async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await updateBody(id, body);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
