"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createChecklist_controller_1 = require("../controllers/checklist/createChecklist.controller");
const createCheckItem_controller_1 = require("../controllers/checklist/createCheckItem.controller");
const deleteChecklist_controller_1 = require("../controllers/checklist/deleteChecklist.controller");
const getChecklist_controller_1 = require("../controllers/checklist/getChecklist.controller");
const updateChecklist_controller_1 = require("../controllers/checklist/updateChecklist.controller");
const authenticate_1 = require("../middlewares/authenticate");
const getCheckItem_controller_1 = require("../controllers/checklist/getCheckItem.controller");
const getCheckItems_controller_1 = require("../controllers/checklist/getCheckItems.controller");
const deleteCheckItem_controller_1 = require("../controllers/checklist/deleteCheckItem.controller");
const updateCheckItem_controller_1 = require("../controllers/checklist/updateCheckItem.controller");
const router = (0, express_1.Router)();
router.use(authenticate_1.authenticateUser);
// Checklist
router.post('', createChecklist_controller_1.addChecklist);
router.get('', getChecklist_controller_1.getChecklist);
router.delete('/:id', deleteChecklist_controller_1.deleteChecklist);
router.patch('/:id', updateChecklist_controller_1.updateChecklist);
// Check item
router.post('/:id/checkItems', createCheckItem_controller_1.createCheckItem);
router.get('/:id/checkItems', getCheckItems_controller_1.getCheckItems);
router.get('/:id/checkItems/:idCheckItem', getCheckItem_controller_1.getCheckItem);
router.delete('/:id/checkItems/:idCheckItem', deleteCheckItem_controller_1.deleteCheckItem);
router.patch('/:id/checkItems/:idCheckItem', updateCheckItem_controller_1.updateCheckItem);
exports.default = router;
