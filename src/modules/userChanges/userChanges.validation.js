import joi from "joi";

export const changeNameSchema = joi.object({
    name: joi.string().min(3).max(20).required()
});
// export const changeAgeSchema = joi.object({
//     age: joi.number().required()
// });
export const changePasswordSchema = joi.object({
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
    confirmPassword: joi.string().valid(joi.ref('password')).required(),

});
export const changeEmailSchema = joi.object({
    email: joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
        })
        .required(),
});
export const changeWeightSchema = joi.object({
    weight: joi.number().required()
});
export const changeHeightSchema = joi.object({
    height: joi.number().required()
});
export const changeVegetarianSchema = joi.object({
    vegetarian: joi.string().required(),
});
export const changeB12Schema = joi.object({
    b12: joi.string().required(),
});
export const changeIllnessesSchema = joi.object({
    illnesses: joi.string().required(),
});
export const changePeriodSchema = joi.object({
    period: joi.string().required(),
});
export const changeCategorySchema = joi.object({
    category: joi.string().required()
});
export const changeMedicationsSchema = joi.object({
    medications: joi.string()
});