import { catchError } from "../../utils/catchError.js";
import { checkImage, detectAnemia } from "../../utils/detectAnemia.js";

export const detectAnemiaController = catchError(async (req, res, next) => {
    const image = req.file.buffer.toString("base64");
    const resultCheck = await checkImage(image);
    const resultAfterCheck = resultCheck.predictions.length;

    if (resultAfterCheck > 0) {
        const response = await detectAnemia(image);
        const predictedClasses = response.predicted_classes;

        let result, message;
        if (predictedClasses.includes("anemia") && predictedClasses.includes("non_anemia")) {
            result = null;
            message = "Both anemia and non-anemia detected.";
        } else {
            result = predictedClasses.includes("anemia");
            message = `${result ? "anemia" : "non-anemia"} detected`;
        }

        return res.json({
            status: "success",
            message: message,
            result: result,
            metadata: response,
        });
    }
    
    return next(new Error("this not image for eye"));
});
