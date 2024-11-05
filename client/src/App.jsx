import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import TodoPage from "./pages/TodoPage";

const App = () => {
    return (
        <Router>
            <TodoProvider>
                <Routes>
                    <Route path="/" element={<TodoPage />} />
                </Routes>
            </TodoProvider>
        </Router>
    );
};

export default App;

