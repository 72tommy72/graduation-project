import { User } from "../../../DB/models/user.model.js";
import { catchError } from "../../utils/catchError.js";
import bcryptjs from "bcryptjs";
import cloudinary from "../../utils/cloud.js";
export const changeName = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id); 
    if (!user) return next(new Error(`User not found`));
    user.userName = req.body.name ? req.body.name : user.name;
    //save in database
        await user.save();

    return res.json({
        success: true,
        message: user
    });

})
// export const changeAge = catchError(async (req, res, next) => {
//     const user = await User.findById(req.user._id); 
//     if (!user) return next(new Error(`User not found`));
//     user.age = req.body.age ? req.body.age : user.age;
//     //save in database
//         await user.save();

//     res.json({ success: true, user });
    

// })
export const changePassword = catchError(async (req, res, next) => {
    //data
    const { password } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) return next(new Error(`User not found`));
    const hashPassword = bcryptjs.hashSync(
        password,
        Number(process.env.SALT_ROUNDS)
    );
    user.password = hashPassword;
    //save in database
    await user.save();
    return res.json({
        success: true,
        message: user
    });

})
export const changeEmail = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id); 
    if (!user) return next(new Error(`User not found`));
    user.email = req.body.email ? req.body.email : user.email;
    //save in database
    await user.save();
    return res.json({
        success: true,
        message: user
    });



})
export const changeProfileImage = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id); 
    if (!user) return next(new Error(`User not found`));
    console.log(user)
    if (req.file) {
        const { public_id, secure_url } = await cloudinary.uploader.upload(
            req.file.path, { public_id : user.profileImage.id }
        );
        user.profileImage.url = secure_url;
    }
    console.log(req.file)
    await user.save();
    return res.json({ success: true, user });
})
export const changeWeight = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    console.log("0")
    if (!user) return next(new Error(`User not found`));
    user.weight = req.body.weight ? req.body.weight : user.weight;  
    console.log("1")
    await user.save();
    console.log("2")

    return res.json({
        success: true,
        message: user
    });



})
export const changeHeight = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    if (!user) return next(new Error(`User not found`));
    user.height = req.body.height ? req.body.height : user.height;
        await user.save();

    return res.json({
        success: true,
        message: user
    });



})
export const changeVegetarian = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    if (!user) return next(new Error(`User not found`));
    user.vegetarian = req.body.vegetarian ? req.body.vegetarian : user.vegetarian;
        await user.save();

    return res.json({
        success: true,
        message : user
    });


})
export const changeB12 = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    if (!user) return next(new Error(`User not found`));
    user.b12 = req.body.b12 ? req.body.b12 : user.b12;
        await user.save();

    return res.json({
        success: true,
        message : user
    });



})
export const changeIllnesses = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    if (!user) return next(new Error(`User not found`));
    user.illnesses = req.body.illnesses ? req.body.illnesses : user.illnesses;
        await user.save();

    return res.json({
        success: true,
        message : user
    });



})
export const changePeriod = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    if (!user) return next(new Error(`User not found`));
    user.period = req.body.period ? req.body.period : user.period;
        await user.save();

    return res.json({
        success: true,
        message : user
    });



})
export const changeCategory = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    if (!user) return next(new Error(`User not found`));
    user.category = req.body.category ? req.body.category : user.category;
    await user.save();

    return res.json({
        success: true,
        message : user
    });



})
export const changeMedications = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    if (!user) return next(new Error(`User not found`));
    user.medications = req.body.medications ? req.body.medications : user.medications;
        await user.save();

    return res.json({
        success: true,
        message : user
    });



})
