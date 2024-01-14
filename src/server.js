import mongoose from "mongoose";
import app from "./app.js";
import config from "./app/config/index.js";

const main = async () => {
    try {
        await mongoose.connect(config.database_url);
        console.log("🔗 Connected to Database");
        app.listen(config.port, () => {
            console.log(`Server is listening on port ${config.port}`);
        });
    } catch (error) {
        console.log("❌ Failed to connect to Database");
    }
};

main();
