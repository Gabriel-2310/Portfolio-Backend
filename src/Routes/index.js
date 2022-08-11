"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./Proyects/index"));
const index_2 = __importDefault(require("./Perfil/index"));
const router = express_1.Router();
router.use('/proyects', index_1.default);
router.use('/perfil', index_2.default);
exports.default = router;
