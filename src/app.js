const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const globalErrorHandler = require("./lib/globalErrorHandler");
const userRouter = require("./routes/userRoute");
const customerRouter = require("./routes/customerRoute");
const projectRouter = require("./routes/projectRoute");
const taskRouter = require("./routes/taskRoute");
const expenseRouter = require("./routes/expenseRoute");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/customers", customerRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/expenses", expenseRouter);

app.get("/", (req, res) => {
  res.send("crm api is running....");
});

// handling all route which is not found
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

module.exports = app;
