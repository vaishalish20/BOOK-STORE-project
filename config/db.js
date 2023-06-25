import mongoose from 'mongoose';
import colors from 'colors';


const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to MongoDB database ${conn.connection.host}`.bgBlue.white);
    }
    catch(error){
        console.log(`Error in mongoDB ${error}`.bgRed.white);
    }
}
export default connectDB;
// module.exports =  connectDB;