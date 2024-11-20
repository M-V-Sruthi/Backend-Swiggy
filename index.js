const express = require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const vendorRoutes = require('./routes/vendorRoutes');
const bodyParser = require('body-parser');
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 4000;
dotEnv.config();

//mongodb connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongodb connected successfully!"))
.catch((error)=>console.log(error))

app.use(bodyParser.json());//for convertion of data to json , we use bodyparser
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes);
app.use('/product',productRoutes);
app.use('/uploads',express.static('uploads'));

app.listen(PORT,() => {
    console.log(`server started and running at ${PORT}`);
});
app.use('/home',(req,res)=>{
    res.send("welcome to sruthi's world");
})