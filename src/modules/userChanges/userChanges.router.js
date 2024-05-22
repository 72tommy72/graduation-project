import { Router } from "express";
import { isAuthenticated } from "../../middleware/authentication.middleware.js";
import { isValid } from "../../middleware/validation.middleware.js";
import { changeB12, changeCategory, changeEmail, changeHeight, changeIllnesses, changeMedications, changeName, changePassword, changePeriod, changeProfileImage, changeVegetarian, changeWeight } from "./userChanges.controller.js";
import {  changeB12Schema, changeCategorySchema, changeEmailSchema, changeHeightSchema, changeIllnessesSchema, changeMedicationsSchema, changeNameSchema, changePasswordSchema, changePeriodSchema, changeVegetarianSchema, changeWeightSchema } from "./userChanges.validation.js";
import { fileUpload, filterObject } from "../../utils/multer.js";

const router = Router();
//name
router.patch("/changeName",
    isAuthenticated,
    isValid(changeNameSchema),
    changeName);
//age
// router.patch("/changeAge",
//     isAuthenticated,
//     isValid(changeAgeSchema),
//     changeAge);
//password
router.patch("/changePassword",
    isAuthenticated,
    isValid(changePasswordSchema),
    changePassword);
//email
router.patch("/changeEmail",
    isAuthenticated,
    isValid(changeEmailSchema),
    changeEmail);
//changeWeight
router.patch("/changeWeight",
    isAuthenticated,
    isValid(changeWeightSchema),
    changeWeight);
//changeHeight
router.patch("/changeHeight",
    isAuthenticated,
    isValid(changeHeightSchema),
    changeHeight);
//changeVegetarian
router.patch("/changeVegetarian",
    isAuthenticated,
    isValid(changeVegetarianSchema),
    changeVegetarian);
//changeB12
router.patch("/changeB12",
    isAuthenticated,
    isValid(changeB12Schema),
    changeB12);
//changeIllnesses
router.patch("/changeIllnesses",
    isAuthenticated,
    isValid(changeIllnessesSchema),
    changeIllnesses);
//changePeriod
router.patch("/changePeriod",
    isAuthenticated,
    isValid(changePeriodSchema),
    changePeriod);
//changeCategory
router.patch("/changeCategory",
    isAuthenticated,
    isValid(changeCategorySchema),
    changeCategory);
//changeMedications
router.patch("/changeMedications",
    isAuthenticated,
    isValid(changeMedicationsSchema),
    changeMedications);
//changeProfileImage
router.patch("/profileImage",
    isAuthenticated,
    fileUpload(filterObject.image).single("changeProfileImage"),
    changeProfileImage);

export default router;
