import User from "../models/User.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import Resume from '../models/Resume.js'



const generateToken = (userId) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn: '1d'})
    return token;
}

// Register Controller
export const registerUser = async (req,res) => {
    try{
        const {name,email,password} = req.body;
        

        //Check if required fields are present
        if(!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Fill required credentials"
            })
        }

        //Check if user already exist
        const user = await User.findOne({email})
        if(user) {
            return res.status(409).json({
                success:false,
                message: "User already exists with this email address"
            })
        }

        //Create New User
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await User.create({
            name,email,password:hashedPassword
        })

        const token = generateToken(newUser._id);
            res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1 * 24 * 60 * 60 * 1000,
            sameSite: 'none', 
            secure: true
        });

        return res.status(201).json({
            message:"User created successfully",
            token,
            user: newUser
        })

    }catch(error) {
        return res.status(400).json({
            message: error.message
        })
    }
}



//Login Controller
export const loginUser = async (req,res) => {
    try{
        const {email,password} = req.body;
        

        //Check if required fields are present
        if(!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Fill required credentials"
            })
        }

        //Check if user already exist
        const user = await User.findOne({email})
        if(!user) {
            return res.status(409).json({
                success:false,
                message: "User doesn't exists with this email address"
            })
        }

        // Check if password correct
        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect) {
            return res.status(409).json({
                message: "Invalid Password or Email"
            })
        }

        
        const token = generateToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1 * 24 * 60 * 60 * 1000,
            sameSite: 'none', // Allows cross-domain cookies
            secure: true
        });

        return res.status(201).json({
            message:"Login Successful",
            token,
            user: user
        })

    }catch(error) {
        return res.status(400).json({
            message: error.message
        })
    }
}




//Get User By Id
export const getUserById = async (req,res) => {
    try{
        const userId = req.userId;

        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        return res.status(200).json({
            success: true,
            user: user
        })

    }catch(error) {
        return res.status(400).json({
            message: error.message
        })
    }
}


//Getting user's resume
export const getUserResumes = async (req,res)=>{
    try{    
        const userId = req.userId;

        const resumes = await Resume.find({userId})

        return res.status(200).json({resumes})
    }catch(err) {
        return res.status(400).json({
            message: err.message
        })
    }
}