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
const Profile_1 = __importDefault(require("../../../../Models/Profile"));
const putperfil = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, profession, position, skill, info, about, Social, coments } = req.body;
    const { id } = req.params;
    try {
        yield Profile_1.default.findByIdAndUpdate((id), { name, profession, position, skill, info, about, Social, coments });
        let updateprofile = yield Profile_1.default.findById(id);
        res.status(200).json(updateprofile);
    }
    catch (error) {
        next(error);
    }
});
exports.default = putperfil;
