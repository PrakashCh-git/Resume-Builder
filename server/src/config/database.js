import mongoose from "mongoose";


async function connecttoDB () {
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to database successfully")
    })
}


export default connecttoDB