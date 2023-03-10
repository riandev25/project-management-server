"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCheckItem = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const mongodb_1 = require("mongodb");
const checklist_model_1 = require("../../models/checklist.model");
exports.updateCheckItem = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { idCheckItem } = req.params;
    // const { checkName, pos, checked } = req.query;
    // Number(pos);
    // const checkQueryParam = () => {
    //   if (checked === 'true') return true;
    //   else if (checked === 'false') return false;
    //   else return;
    // };
    // const checkedParam = checkQueryParam();
    // const updateData = () => {
    //   let optionalUpdate: any = {};
    //   if (req.body) optionalUpdate.description = req.body;
    //   // if (checkName) optionalUpdate.checkName === checkName;
    //   if (checked) optionalUpdate.isChecked = checkedParam;
    //   if (pos) optionalUpdate.pos = pos;
    //   return optionalUpdate;
    // };
    const { dueDate, isChecked, hasDueDate, pickedDueDate } = req.body;
    // const dates = getSpecificDateTime(dueDate);
    console.log(isChecked);
    const query = { _id: new mongodb_1.ObjectId(idCheckItem) };
    const updateIsChecked = { $set: { isChecked } };
    const updateIsCheckedDueDate = {
        $set: Object.assign(Object.assign({}, dueDate), { pickedDueDate, isChecked, hasDueDate }),
    };
    const updateRemoveDueDate = {
        $unset: {
            remainingDays: '',
            remainingHours: '',
            remainingMinutes: '',
            remainingSeconds: '',
            pickedDueDate: '',
        },
        $set: { hasDueDate, isChecked },
    };
    // const update = isChecked === false && !dueDate ? { $set: {...dates, isChecked} } : { $unset: { remainingDays: '', remainingHours: '', remainingMinutes: '', remainingSeconds: '', isDueDate: '' }, hasDueDate: false }
    let update;
    if (hasDueDate !== undefined) {
        if (hasDueDate === true && dueDate)
            update = updateIsCheckedDueDate;
        else
            update = updateRemoveDueDate;
    }
    else {
        update = updateIsChecked;
        if (dueDate)
            update = updateIsCheckedDueDate;
    }
    const checkItem = yield checklist_model_1.CheckItem.findOneAndUpdate(query, update);
    res.status(200).send(checkItem);
    next();
}));
