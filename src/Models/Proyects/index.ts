import moongose from 'mongoose';
const { Schema } = moongose;


const ProyectSchema = new Schema({
    title: {
        type: String,        
    },
    date: {
        type: String,
    },
    description:{
        type: String,
    },
    image: {
        type: [String],
    },
    tecnology: {
        type: [String],
    },
    Social: {
        type:{
            github: String,
            deploy: String,
        }
    },
    creator:{
        type:[{
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

const Proyect = moongose.model('Proyect', ProyectSchema);

export default Proyect;