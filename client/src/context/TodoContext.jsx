import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TodoContext = createContext();

export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get("/api/todos");
                setTodoList(response.data); // Assuming response.data is an array
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };
        fetchTodos();
    }, []);

    const addTodo = async (todo) => {
        try {
            const response = await axios.post("/api/todos", todo);
            setTodoList((prev) => [...prev, response.data]);
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    const updateTodo = async (id, completed) => {
        try {
            await axios.put(`/api/todos/${id}`, { completed });
            setTodoList((prev) =>
                prev.map((todo) =>
                    todo._id === id ? { ...todo, completed } : todo
                )
            );
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`/api/todos/${id}`);
            setTodoList((prev) => prev.filter((todo) => todo._id !== id));
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    return (
        <TodoContext.Provider
            value={{ todoList, addTodo, updateTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
