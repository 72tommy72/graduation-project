import Joi from "joi";

export const userInfoSchema = Joi.object({
    weight: Joi.number().required(),
    height: Joi.number().required(),
    vegetarian: Joi.string().required(),
    b12: Joi.string().required(),
    illnesses: Joi.string().required(),
    period: Joi.string().required(),
    category: Joi.string().required(),
    medications: Joi.string()
}).required();
