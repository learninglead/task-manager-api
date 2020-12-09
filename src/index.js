const exprss = require('express');
require('./db/mongoose');
// const User = require('./models/user');
// const Task = require('./models/task');

const app = exprss();
const port = process.env.PORT;

const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');

app.use(exprss.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log("Server is up on port "+ port);
})