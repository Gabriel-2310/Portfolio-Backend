import moongose from 'mongoose';
const { Schema } = moongose;


const ProfileSchema = new Schema({
    name: {
        type: String,        
    },
    profession: {
        type: String,
    },
    position:{
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
        type:{
            facebook: String,
            linkedin: String,
            github: String,
            gmail: String,
            whatsapp: String,
        }
    }, 
    coments: {
        type:{
            name: String,
            direction: String,
            email: String,
            telephone: Number,
            message: String,
            subject: String,
        }
    }
});

const Profile = moongose.model('Profile', ProfileSchema);

export default Profile;