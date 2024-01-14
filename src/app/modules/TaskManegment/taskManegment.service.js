import { TaskManegement } from "./taskManegment.model.js";

const createTask = async (task) => {
    const newTask = {
        title: task.title,
        task: task.task,
    };
    try {
        const result = await TaskManegement.create(newTask);
        return result;
    } catch (error) {
        console.log(error);
    }
};

const getAllTask = async () => {
    try {
        const result = await TaskManegement.find().lean();
        return result;
    } catch (error) {
        console.log(error);
    }
};

const addNewSubTask = async (task) => {
    const newTask = {
        title: task.task.title,
        attachment: task.task.attachment || [],
    };

    console.log(newTask);
    try {
        const result = await TaskManegement.findOneAndUpdate(
            { _id: task._id },
            { $push: { task: newTask } },
            { new: true }
        );
        return result;
    } catch (error) {
        console.log(error);
    }
};

const updateTask = async (task) => {
    try {
        const result = await TaskManegement.findOneAndUpdate(
            { _id: task.mainTaskId, "task._id": task.taskId },
            { $push: { "task.$.attachment": { $each: task.attachment } } },
            { new: true }
        );
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const TaskManegementService = {
    createTask,
    addNewSubTask,
    getAllTask,
    updateTask,
};
