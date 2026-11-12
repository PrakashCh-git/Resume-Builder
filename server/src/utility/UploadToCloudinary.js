import cloudinary from "../config/cloudinary.js";
import { Readable } from "stream";

const uploadToCloudinary = async (buffer) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: "ai-resume-builder",
                resource_type: "auto",
            },
            (error, result) => {
                if (error) {
                    return reject(error);
                }

                resolve(result);
            }
        );

        Readable.from(buffer).pipe(uploadStream);
    });
};

export default uploadToCloudinary;
