import mongoose from 'mongoose';
import SaleModel from '../models/sale';

async function connectDB() {

    if (!process.env.MONGO_URI) {
        throw new Error("Falta  la variable de entorno MONGO_URI");
        
    }
    try {

        let options = {} as any;

        if (process.env.MONGO_SSL === 'true') {

        options = {
            ssl         : process.env.MONGO_SSL === 'true',
            sslCert     : process.env.MONGO_SSL_CERT,
            sslKey      : process.env.MONGO_SSL_KEY,
            sslCA       : process.env.MONGO_SSL_CA,
            sslValidate : process.env.MONGO_SSL_VALIDATE === 'true'
        };
        
        }

        await mongoose.connect(process.env.MONGO_URI, options)
        console.log('Conexión exitosa a la base de datos');
        
    } catch (error) {

        console.log('Hubo un error conectandose a la base de datos: ', error);
        
    }
}

export default connectDB;