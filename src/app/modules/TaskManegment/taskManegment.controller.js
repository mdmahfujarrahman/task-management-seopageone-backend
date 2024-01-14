import catchAsync from "../../shared/catchAsync.js";
import sendResponse from "../../shared/sendResponse.js";
import { TaskManegementService } from "./taskManegment.service.js";

const getAllTask = catchAsync(async (req, res) => {
    const result = await TaskManegementService.getAllTask();
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "All Task Retrived Successfully",
        data: result,
    });
});

const addTask = catchAsync(async (req, res) => {
    const result = await TaskManegementService.createTask(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "New Task Added Successfully",
        data: result,
    });
});

const addNewSubTask = catchAsync(async (req, res) => {
    const result = await TaskManegementService.addNewSubTask(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "New Task Added Successfully",
        data: result,
    });
});

const updateTask = catchAsync(async (req, res) => {
    const result = await TaskManegementService.updateTask(req.body);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Attachment Added Successfully",
        data: result,
    });
});

export const TaskManegmentController = {
    getAllTask,
    updateTask,
    addTask,
    addNewSubTask,
};
