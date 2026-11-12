import Resume from '../models/Resume.js'
import cloudinary from '../config/Cloudinary.js'
import fs from 'fs'


//Controller for creating new Resume
export const createResume = async(req,res) => {
    try {
        const userId = req.userId;
        const {title} = req.body;

        //Create New Resume
        const newResume = await Resume.create({userId, title})


        return res.status(201).json({
            message: 'Resume created successfully',
            resume: newResume
        })
    }catch(error) {
        return res.status(400).json({
            message:error.message
        })
    }
}


//Controller for deleting a resume
export const deleteResume = async(req,res) => {
    try {
        const userId = req.userId;
        const {resumeId} = req.params;

        //Create New Resume
        const newResume = await Resume.findOneAndDelete({userId, _id: resumeId})


        return res.status(200).json({
            message: 'Resume deleted successfully',
        })
    }catch(error) {
        return res.status(400).json({
            message:error.message
        })
    }
}


//Controller for getting resume by ID
export const getResumeById = async (req,res) => {
    try{
        const userId = req.userId;
        const {resumeId} = req.params;

        const resume = await Resume.findOne({userId,_id:resumeId})

        if(!resume) {
            return res.status(404).json({
                message: "Resume not found"
            })
        }

        resume.__v = undefined;
        resume.createdAt = undefined;
        resume.updatedAt = undefined;

        return res.status(200).json({resume})
    }
    catch(error) {
        return res.status(400).json({message:error.message})
    }
}



//If resume id is Public
export const getPublicResumeById = async (req,res) => {
    try {
        const {resumeId} = req.params;
        const resume = await Resume.findOne({public: true, _id:resumeId});

        if(!resume) {
            return res.status(404).json({message: "Resume not found"})
        }
    }catch(err) {
        return res.status(400).json({message:err.message})
    }
}


//Controller for updating a resume
export const updateResume = async (req, res) => {
  try {
    const userId = req.userId;

    const { resumeId, resumeData } = req.body;
    const image = req.file;

    if (!resumeId || !resumeData) {
      return res.status(400).json({
        message: "Resume ID and data are required",
      });
    }

    const resumeDataCopy =
      typeof resumeData === "string"
        ? JSON.parse(resumeData)
        : resumeData;

    // Upload image to Cloudinary
    if (image) {
      const response = await uploadToCloudinary(image.buffer);

      resumeDataCopy.personal_info.image = response.secure_url;
    }

    const { _id, userId: ignoredUserId, ...updates } = resumeDataCopy;

    const resume = await Resume.findOneAndUpdate(
      { _id: resumeId, userId },
      { $set: updates },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    return res.status(200).json({
      message: "Saved successfully",
      resume,
    });

  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};