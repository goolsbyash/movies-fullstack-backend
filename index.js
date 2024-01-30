import './loadEnv.js'
import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import moviesRouter from './routes/movies.js';


const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());   // allows front end to communicate with backend
app.use(morgan('dev'));  // logger
app.use(express.json()); // for receiving data in req.body
app.use(express.urlencoded({extended: true})); // allows data in url string

// Routes
app.use("/api/movies", moviesRouter);

app.get("/", (req, res) => {
  res.send("backend...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
