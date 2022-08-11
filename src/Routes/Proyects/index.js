"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DeleteByIdProyects_1 = __importDefault(require("./Controles/DeleteByIdProyects"));
const PutByIdProyects_1 = __importDefault(require("./Controles/PutByIdProyects"));
const PostProyects_1 = __importDefault(require("./Controles/PostProyects"));
const GetFinAllProyects_1 = __importDefault(require("./Controles/GetFinAllProyects"));
const router = express_1.Router();
router.get('/get', GetFinAllProyects_1.default);
router.post('/post', PostProyects_1.default);
router.put('/update', PutByIdProyects_1.default);
router.delete('/delete', DeleteByIdProyects_1.default);
exports.default = router;
