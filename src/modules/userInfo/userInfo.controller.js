import { User } from "../../../DB/models/user.model.js";
import { catchError } from "../../utils/catchError.js";

export const userInfo = catchError(async (req, res, next) => {
    const email = req.user.email

    //check user
    const user = await User.findOne({ email });
    if (!user) {
        return next(new Error("email is not found"));
    }
    //data
    const { weight, height, medications,vegetarian, b12, illnesses, period, category } =
        req.body;
    console.log(req.body);
    let userInfo = await User.findOneAndUpdate({email},{
        weight,
        height,
        vegetarian,
        b12,
        illnesses,
        period,
        category,
        medications
    });
    return res.status(201).json({
        success: true,
        result: userInfo,
        message: "create data successfully",
    });
});
