"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const ProyectSchema = new Schema({
    title: {
        type: String,
    },
    date: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: [String],
    },
    tecnology: {
        type: [String],
    },
    Social: {
        type: {
            github: String,
            deploy: String,
        }
    },
    creator: {
        type: [{
                name: String,
                profession: String,
                contact: {
                    facebook: String,
                    linkedin: String,
                    github: String,
                    gmail: String,
                    whatsapp: String,
                }
            }],
    }
});
const Proyect = mongoose_1.default.model('Proyect', ProyectSchema);
exports.default = Proyect;
