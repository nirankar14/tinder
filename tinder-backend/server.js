import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';
// App Config
const app = express();

 //this is where our applications going to listen on PORT(so defining port)
const port = process.env.PORT || 8001

const connection_url = 'mongodb+srv://admin:5MFyZZkOOq2EPnmo@cluster0.f447g.mongodb.net/tinderdb?retryWrites=true&w=majority'


//Middleware
app.use(express.json());
app.use(Cors());

// DB CONFIG
// here we are connecting to our mongoDB database and passing some parameters to it
mongoose.connect(connection_url , {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    //to make our connection smooth, this is just beacuse it is developing day by day(mongoose)
})


//  API Endpoints
app.get('/',(req,res) => res.status(200).send('Hello Public!!'));

app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;
// that creates a new document this will have callback function with an error and data parameters
    Cards.create(dbCard, (err, data) => {
        // now we are going to handle the error
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });

});
// to actually that it actually works we have to define another enpoint 
// which will download data from database

app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        // now we are going to handle the error
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
    // Postman is something we can interact with server back and forth
});

// Listener ///
// const port = process.env.PORT || 5000;
// () -> below is the callback function which will call
// ` ` -> this is backtext since we are going to use string concatenation
app.listen(port, () => console.log(`listening in localhost: ${port}`));

//  nodemon because we want to install it globally, 
// it doesnt care which project we are in it will starts running, it is like a tool

