require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
// middlewares
app.use(express.json());
// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});
app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks')          - get all the tasks
// app.post('/api/v1/tasks')         - create a task
// app.get('/api/v1/tasks/:id')      - get a single task with given id
// app.patch('/api/v1/tasks/:id')    - update a task with given id
// app.delete('/api/v1/tasks/:id')   - delte a task with given id
const port = 3000;
app.listen(port, console.log(`Server is listening on port ${port}...`));
