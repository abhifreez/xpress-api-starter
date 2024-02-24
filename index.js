import express from "express";
import routes  from "./source/routes/crmRoute";    
import mongoose from "mongoose";
import bodyParser from "body-parser";


const app = express();
const PORT = 3000



mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/CRMdb");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app)

app.get('/',(req,res) => {
    res.send(`You are runing on port ${PORT} Enjoy!!!!`)
})

app.listen(PORT,()=>{
    console.log(`Your server is running on port ${PORT}`)

})