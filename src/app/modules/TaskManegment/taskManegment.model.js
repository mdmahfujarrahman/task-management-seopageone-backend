import { Schema, model } from "mongoose";

const TaskManegementSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    task: [
        {
            title: {
                type: String,
            },
            attachment: [],
        },
    ],
});

export const TaskManegement = model("TaskManegement", TaskManegementSchema);
