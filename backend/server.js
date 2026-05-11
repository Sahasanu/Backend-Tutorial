
import express from "express"
import ConnectDB from "./Config/db.js";
import UserRoutes from "./Routes/user.routes.js";


ConnectDB();


const app=express();

const PORT=8080;

app.use(express.json());


app.get('/', (req,res) => {
  res.send("Hello World")   
}
)
app.get('/about', (req,res) => {
  res.send("This is about")   
}
)

app.use('/users', UserRoutes);


 
app.listen(PORT,() => {
  console.log("server is running on port :"+PORT)
}
)


