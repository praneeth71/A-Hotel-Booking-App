import express from "express";
import fs from 'fs';
require("dotenv").config();
import cors from 'cors';
import mongoose from "mongoose";
const morgan = require("morgan");


const app = express();

// db connection
mongoose.connect(process.env.DATABASE)
.then(() => console.log("DB Connected"))
.catch((err) => console.log("DB Connection Error", err));

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route middleware
fs.readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));
//app.use('/api', router);


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));