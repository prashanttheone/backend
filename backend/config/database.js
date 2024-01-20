 const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
   await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected successfully"))
  .catch((error) => {
    console.error('DB connection error:', error.message);
    process.exit(1); // Exit the application only on database connection error
  });
};

module.exports = dbConnect;
