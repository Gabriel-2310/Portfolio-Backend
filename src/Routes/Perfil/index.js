"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GetFinAllPerfil_1 = __importDefault(require("./controles/GetFinAllPerfil"));
const PostPerfil_1 = __importDefault(require("./controles/PostPerfil"));
const PutByIdPerfil_1 = __importDefault(require("./controles/PutByIdPerfil"));
const DeleteByIdPerfil_1 = __importDefault(require("./controles/DeleteByIdPerfil"));
const router = (0, express_1.Router)();
router.get('/get', GetFinAllPerfil_1.default);
router.post('/post', PostPerfil_1.default);
router.put('/update/:id', PutByIdPerfil_1.default);
router.delete('/delete/:id', DeleteByIdPerfil_1.default);
exports.default = router;
