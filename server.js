const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");


const helmet = require("helmet");
const bodyparser = require("body-parser");
const path = require("path");

const connectDB = require('./server/database/connection');

const app = express();


//MIDDLEWARES
app.use(express.json());
app.use(helmet());

//SERVER CONFIG
dotenv.config();
const PORT = process.env.PORT || 8080;

//log request
app.use(morgan("tiny"));

// mongodb connection
connectDB();

// /* MONGOOSE SETUP */
// mongoose.set('strictQuery', false);
// mongoose.connect(process.env.MONGO_URL,()=>{
//     console.log('Database connected to Mongodb');
// });



//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));



//SET VIEW ENGINE
// app.engine('ejs', require('ejs').renderFile);
app.set("view engine", "ejs");
//app.set("views",path.resolve(__dirname,"views/ejs"))


//LOAD ASSETS
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));



//load routers
app.use('/',require('./server/routes/router'))






app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
