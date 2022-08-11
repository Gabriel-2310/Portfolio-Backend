import mongoose from 'mongoose';
import config from '../Env/index';

if (config.Db) { 
    mongoose.connect(config.Db)
        .then(() => console.log('database conect'))
        .catch((error) => console.log('Error database conect ', error))
}