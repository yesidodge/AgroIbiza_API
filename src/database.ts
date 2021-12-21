import mongoose from 'mongoose'
import config from './config';

(async () => {
    try {

        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`);
        console.log('Conectado a la Base de Datos:', db.connection.name)

    }catch (error) {
        console.error(error)
    }
    
})()

