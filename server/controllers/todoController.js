import Todo from '../models/Todo.js';

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos); // This should be an array
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).send("Server Error");
    }
};

export const addTodo = async (req, res) => {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
};

export const updateTodo = async (req, res) => {
    const { completed } = req.body;
    const todo = await Todo.findByIdAndUpdate(req.params.id, { completed }, { new: true });
    res.json(todo);
};

export const deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).send();
};
