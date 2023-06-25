import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoutes from"./routes/authRoute.js"
import categoryRoutes from'./routes/categoryRoutes.js'
import productRoutes from'./routes/productRoutes.js'
import connectDB from './config/db.js';
import cors from 'cors'
import path from 'path'
import { fileURLToPath} from 'url'


//env config
dotenv.config();

//db-config
connectDB();

//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//rest object
const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'./client/build')))

//routes 
app.use('/api/v1/auth', authRoutes)
app.use("/api/v1/category",categoryRoutes)
app.use("/api/v1/product", productRoutes)

//rest api 
// app.get('/',(req,res) =>{
//     res.send("<h1>welcome to ecommerce website</h1>")
// })

// app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function( _,res){
    res.sendFile(
        path.join(__dirname,"./client/build/index.html")
    
    );
});

const PORT = process.env.PORT || 8080;

app.listen(PORT ,() =>{
    console.log(`server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgWhite.blue)
})
