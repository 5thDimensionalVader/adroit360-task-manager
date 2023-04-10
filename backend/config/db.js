import mongoose from "mongoose";
import mongooseConfig from "./mongoose.config.js";

(async () => {
    try {
        await mongoose.connect(mongooseConfig.URL, mongooseConfig.OPTIONS);
        console.log("Connected to database!");
    } catch (error) {
        console.log("Database connection error:", error.message);
    }
})();

export default mongoose;