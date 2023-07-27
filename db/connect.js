const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://ashishkadam7363:ashish7262@cluster0.xih9x81.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTED TO THE DB...");
  })
  .catch((err) => console.log(err));
