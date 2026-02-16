import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error connecting to DB: ", error);
        process.exit(1);
    }
};

export default connectDB;

// const connectDB = async () => {
//     try {
//         mongoose.connection.on("connected", () => {
//             console.log("DB connected successfully!");
//         });

//         let mongodbURI = process.env.MONGODB_URI;
//         const projectName = 'resumify';

//         if(!mongodbURI) {
//             throw new error('MONGODB_URI environment variable is not set');
//         }

//         if(mongodbURI.endsWith('/')) {
//             mongodbURI = mongodbURI.slice(0, -1);
//         }

//         await mongoose.connect(`${mongodbURI}/${projectName}`);
//     } catch (error) {
//         console.log("Error connecting to MONGO-DB:", error);
//     }
// };

// export default connectDB;
