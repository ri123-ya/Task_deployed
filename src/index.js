import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'https://taupe-horse-00605b.netlify.app'  
}));
app.use(bodyParser.json());

app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running at : ${PORT}`);
});
