import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
    title: String,
    author: String,
}
);

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

export { Todo };