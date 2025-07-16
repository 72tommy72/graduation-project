import multer, { diskStorage } from "multer";
import { nanoid } from "nanoid/non-secure";

export const fileValidation = {
    image: ["image/png", "image/jpg", "image/jpeg"],
    video: ["video/mp4", "video/mpeg"],
};

export const fileUpload = ({ folder, filetype }) => {
    const fileFilter = (req, file, cb) => {
        if (!filterObject.includes(file.mimetype)) {
            return cb(new Error("Invalid file type"), false);
        }
        return cb(null, true);
    };
    const storage = diskStorage({
        destination: `uploads/${folder}`,
        filename: (req, file, cb) => {
            cb(null, nanoid() + "__" + file.originalname);
        },
    });

    return multer({ storage, fileFilter });
};

// import multer from 'multer'
// export const allowedExtensions = {
//     image: ['image/png', 'image/jpeg', 'image/gif'],
//     Files: ['application/pdf', 'application/javascript'],
//     Videos: ['video/mp4'],
// }

// export const multerCloudFunction = (allowedExtensionsArr) => {
//     if (!allowedExtensionsArr) {
//         allowedExtensionsArr = allowedExtensions.image
//     }
//     //================================== Storage =============================
//     const storage = multer.diskStorage({})

//     //================================== File Filter =============================
//     const fileFilter = function (req, file, cb) {
//         if (allowedExtensionsArr.includes(file.mimetype)) {
//             return cb(null, true)
//         }
//         cb(new Error('invalid extension', { cause: 400 }), false)
//     }

//     const fileUpload = multer({
//         fileFilter,
//         storage,
//     })
//     return fileUpload
// }