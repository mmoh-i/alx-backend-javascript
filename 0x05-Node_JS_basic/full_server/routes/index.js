const express = require("express");

const router = express.Router;
const AppController = require("../controller/AppController");
const StudentsController = require("../controllers/StudentsController");

router.get('/', AppController.index);
router.get('/students', StudentsController.index);
router.get('/students/:major', StudentsController.show);

module.export = router;
