const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const mongoUri = process.env.URI;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { 
    console.log("mongodb connnected");
  })
  .catch((e) => {
    console.log(mongoose.version);
    console.log("Unable to connect to MongoDB. Error: " + e);
  });

// const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
  
// app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));