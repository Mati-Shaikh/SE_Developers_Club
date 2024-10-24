import { v2 as cloudinary } from 'cloudinary';

if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    throw new Error('Missing Cloudinary configuration');
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImages(images) {
    try {
        console.log('Uploading images to Cloudinary');

        const uploadPromises = images.map(async (image) => {
            const imageData = await image.arrayBuffer();
            const mime = image.type;
            const encoding = 'base64';

            const base64Data = Buffer.from(imageData).toString(encoding);

            const fileUri = `data:${mime};${encoding},${base64Data}`;

            const result = await cloudinary.uploader.upload(fileUri, {
                folder: 'nextjs-course-mutations',
            });

            // Return the secure URL of the uploaded image
            return result.secure_url;
        });

        const uploadedImageUrls = await Promise.all(uploadPromises);
        return uploadedImageUrls;
    } catch (error) {
        console.error('Failed to upload images:', error);
        throw new Error('Image upload failed');
    }
}
