import "dotenv/config";
import app from './src/app.js'
import connecttoDB from "./src/config/database.js";


import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");




app.listen(process.env.PORT, ()=>{
    connecttoDB();
    console.log(`Server is listening at port ${3000}`)
})