
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');

const port = 8000;

app.use(express.json())

app.get('/hello', (req, res)=>{
    res.send('Task Manager App')
});

app.use('/api/v1/tasks', tasks);

const start = async () =>{
    try{
        await connectDB();
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}`)
        });
    }
    catch (e){
        console.log(e);
    }
}

start();

