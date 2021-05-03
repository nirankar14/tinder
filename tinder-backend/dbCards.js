// A database schema is like a model, this will be a outline structure the cards inside the database

import mongoose from 'mongoose';

const cardSchema  = mongoose.Schema({
    name: String,
    imgUrl: String,
});
// model is a collection
// this is were we will define collection name
export default mongoose.model("cards", cardSchema);