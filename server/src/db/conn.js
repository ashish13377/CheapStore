const mongoose=require('mongoose');
const DB=process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database Connection Succesfull");
}).catch((err)=>{
    console.log(err);
});