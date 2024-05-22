import { catchError } from "../utils/catchError.js"

export const isAuthorized = (role) => {
    return catchError(async (req, res, next) => {
        if (req.user.role !== role) {
            return next(new Error("you are not allowed to access this", { cause: 403 }))
        }
        return next();
    })
}