"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const ProfileSchema = new Schema({
    name: {
        type: String,
    },
    profession: {
        type: String,
    },
    position: {
        type: String,
    },
    skill: {
        type: [String],
    },
    info: {
        type: [String],
    },
    about: {
        type: [String],
    },
    Social: {
        type: {
            facebook: String,
            linkedin: String,
            github: String,
            gmail: String,
            whatsapp: String,
        }
    },
    coments: {
        type: {
            name: String,
            direction: String,
            email: String,
            telephone: Number,
            message: String,
            subject: String,
        }
    }
});
const Profile = mongoose_1.default.model('Profile', ProfileSchema);
exports.default = Profile;
