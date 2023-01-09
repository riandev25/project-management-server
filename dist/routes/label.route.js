"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createLabel_controller_1 = require("../controllers/label/createLabel.controller");
const deleteLabel_controller_1 = require("../controllers/label/deleteLabel.controller");
const getLabel_controller_1 = require("../controllers/label/getLabel.controller");
const getSingleLabel_controller_1 = require("../controllers/label/getSingleLabel.controller");
const updateLabel_controller_1 = require("../controllers/label/updateLabel.controller");
const authenticate_1 = require("../middlewares/authenticate");
const router = (0, express_1.Router)();
router.use(authenticate_1.authenticateUser);
router.post('', createLabel_controller_1.createLabel);
router.get('', getLabel_controller_1.getLabel);
router.get('/:id', getSingleLabel_controller_1.getSingleLabel);
router.delete('/:id', deleteLabel_controller_1.deleteLabel);
router.patch('/:id', updateLabel_controller_1.updateLabel);
exports.default = router;