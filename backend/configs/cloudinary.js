require("dotenv").config()
const cloudinary = require("cloudinary")


const uploadMultipleToCloudinary = async (req, res, next) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "No files uploaded" });
        }

        const uploadPromises = req.files.map((file) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { folder: "products" },
                    (error, result) => {
                        if (error) reject(error);
                        else {
                            resolve({
                                url: result.secure_url,
                                public_id: result.public_id,
                            });
                        }
                    }
                );

                stream.end(file.buffer);
            });
        });

        const images = await Promise.all(uploadPromises);

        // 🔥 кладём в req
        req.images = images;

        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



module.exports = {
    uploadMultipleToCloudinary,
    cloudinary
}