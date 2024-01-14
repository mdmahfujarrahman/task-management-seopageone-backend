import express from "express";
import cors from "cors";
import routes from "./app/routes/index.js";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(import.meta.url);

// middleware
import globalErrorHandler from "./app/middleware/globalErrorHandler.js";

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", routes);

app.use(globalErrorHandler);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "API endpoint doesn't exist",
        erroeMessages: [
            {
                path: "",
                message: "API endpoint doesn't exist",
            },
        ],
    });
});

export default app;
