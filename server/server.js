import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todo-app')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
