import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI);
    console.log('Conexión exitosa');
} catch (error) {
    console.log(error);
}