import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    note: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
