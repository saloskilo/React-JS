const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURL = "mongodb://localhost:27017/";

const connectToMongo = async () => {
    mongoose.connect(mongoURL, () => {
        console.log("Connected to Mongo successfully");

    })
}
module.exports = connectToMongo;