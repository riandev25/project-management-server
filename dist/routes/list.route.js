"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createList_controller_1 = require("../controllers/list/createList.controller");
const deleteLists_controller_1 = require("../controllers/list/deleteLists.controller");
const deleteSingleList_1 = require("../controllers/list/deleteSingleList");
const getList_controller_1 = require("../controllers/list/getList.controller");
const updateCard_controller_1 = require("../controllers/list/updateCard.controller");
const updateList_controller_1 = require("../controllers/list/updateList.controller");
const authenticate_1 = require("../middlewares/authenticate");
const router = (0, express_1.Router)();
router.use(authenticate_1.authenticateUser);
router.post('', createList_controller_1.createList);
router.get('', getList_controller_1.getList);
router.delete('', deleteLists_controller_1.deleteLists);
router.delete('/:id', deleteSingleList_1.deleteSingleList);
router.patch('/:id', updateList_controller_1.updateList);
// Cards
router.patch('/:id/cards/:idCard', updateCard_controller_1.updateCard);
exports.default = router;
