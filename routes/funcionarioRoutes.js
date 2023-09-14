const express = require('express');
const router = express.Router();
const FuncionarioController = require('../controllers/FuncionarioController');

// Routes
router.get('/', FuncionarioController.home);
router.get('/create', FuncionarioController.createForm);
router.post('/create', FuncionarioController.createPost);
router.get('/list', FuncionarioController.list);
router.get('/update/:id', FuncionarioController.updateForm);
router.post('/update', FuncionarioController.updatePost);
router.get('/delete/:id', FuncionarioController.delete);

module.exports = router;