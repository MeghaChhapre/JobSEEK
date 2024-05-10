import mongoose from 'mongoose';
// import validator from 'validator';

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI,{
    dbName: "JOB_SEEK"
  }).then(()=>{
    console.log('Connected to DB')
  }).catch((err) =>{
    console.log(`Error connecting to DB: ${err}`);
  });
};