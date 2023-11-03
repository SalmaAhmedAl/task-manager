const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

// Middleware
app.use(express.json()); //To have the ability to read the body of the request - req.body
app.use('./public', express.static(__dirname + '/public')); //To serve static files

//routes
app.use('/api/v1/tasks', tasks);


const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();

