const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
require('dotenv').config();

const port = 8000;

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);

app.use(notFound);

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}`)
        });
    }
    catch (e){
        console.log(e);
    }
}

start();

