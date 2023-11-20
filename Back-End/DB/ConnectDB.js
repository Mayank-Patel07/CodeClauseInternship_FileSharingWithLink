import mongoose from 'mongoose'; // mongoose is use for connection between mongoDB and backend (Node or Expess JS)
import 'dotenv/config'

// Use Async await if you are using MongoDB Atlas. 
// In MongoDB compass Async await is not required . 

const connectToMongo = async () => {
    try {
        mongoose.set("strictQuery", false); // Require for mongoose to work properly .

        // Connect with MongoDB with the help of mongoDB URI Sting
        // Use your MongoDB credentials to connect to MongoDB 
        await mongoose.connect(`${process.env.DBConnect}/shearingApp`);
        console.log("Connected to Mongo Successfully!");
    } catch (error) {
        console.log(error);
    }
}

export default connectToMongo;

