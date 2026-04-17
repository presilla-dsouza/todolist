const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// routes
const taskRoutes = require("./routes/taskRoutes");
app.use("/api", taskRoutes);

// MongoDB
mongoose.connect("mongodb+srv://todolist:pass03@cluster0.6eeputd.mongodb.net/todoDB?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => console.log("Server running"));