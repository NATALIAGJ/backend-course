import mongoose from 'mongoose';

async function connectDB() {

    if (!process.env.MONGODB_URL) {
        throw new Error("Falta  la variable de entorno MONGODB_URL");
        
    }
    try {

        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Conexión exitosa a la base de datos');
        
    } catch (error) {

        console.log('Hubo un error conectandose a la base de datos: ', error);
        
    }
}

export default connectDB;