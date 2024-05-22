import axios from "axios";

export const checkImage = async (image) => {
    try{
        const response = await axios.post("https://detect.roboflow.com/conjunctiva-ni8kz/2", image, {
            params: {
                api_key: process.env.MODEL_API_KEY
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            return response.data

    }
    catch (error) {
        console.log(error.message);
    };
} 
export const detectAnemia = async (image) => {
    try {
        const response = await axios.post("https://classify.roboflow.com/anemia-detection-kfskz/1", image, {
            params: {
                api_key: process.env.MODEL_API_KEY,
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error detecting anemia:", error);
    }
}

