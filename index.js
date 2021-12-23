const dotenv = require("dotenv");
const express = require("express");
const routes = require("./routes");
const openDBConnection = require("./helpers/db");

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

dotenv.config();

async function main() {
  try {

    await openDBConnection(uri);

    mongoose.createConnection()
    
    const app = express();

    app.use(express.json()); 

    app.use(routes);
    

  } catch (error) {
    console.log("main:", error);
  }

  app.listen(port, () => {
    console.log(`Running in Port ${port}`)
})

}

main(); 
