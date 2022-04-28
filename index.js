import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/userdata', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

//Initialize body-parser middleware
app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req,res) => {
    res.send("Hello from Homepage!");
})

app.listen(PORT, () => {
    console.log("Server is Running on port: " + PORT);
});