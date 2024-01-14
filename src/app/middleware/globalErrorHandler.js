import config from "../config/index.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler = (error, req, res, next) => {
    let statusCode = 500;
    let message = "Internal Server Error";
    let errorMessages = [];

    if (error instanceof Error) {
        message = error.message;
        errorMessages = error.message
            ? [
                  {
                      path: "",
                      message: error.message,
                  },
              ]
            : [];
    }

    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: config.env === "development" ? error.stack : null,
    });
};

export default globalErrorHandler;
