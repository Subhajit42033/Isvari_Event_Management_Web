require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;
const connectDB = require('./db/connectDB');
const authRoute = require('./routers/auth-router');
const feedbackRoute = require('./routers/feedback-router');
const contactRoute = require('./routers/contact-router');
const mailRoute = require('./routers/mail-router');
const otpRoute = require('./routers/otp-router');
const postRoute = require('./routers/post-router');
const cartRoute = require('./routers/cart-router');
const adminRoute = require('./routers/admin-router');
const errorMiddleware = require('./middlewares/error-middleware');


const corsOptions = {
    origin: process.env.FRONTEND_URL,
    method: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credential : true,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use(('/api/auth'),authRoute);
app.use(('/api/feedback'),feedbackRoute);
app.use(('/api/form'),contactRoute);
app.use(('/api/mail'),mailRoute);
app.use(('/api/otp'),otpRoute);
app.use(('/api/post'),postRoute);
app.use(('/api/cart'),cartRoute);
app.use(('/api/admin'),adminRoute);

app.get('/',(req,res)=>{
    res.send("Successfully coded");
})

app.use(errorMiddleware);

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`Isvari Server is running on port ${port}`);
        })
    } catch (error) {
        console.error(error);
    }
}
start();