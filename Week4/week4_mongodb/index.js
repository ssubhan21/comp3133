const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://Subhan:subhan2003@cluster0.ugn4v.mongodb.net/comp3133?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log(`Error Mongodb connection: ${JSON.stringify(err)}`)
});

app.use(employeeRouter);

app.listen(8081, () => { console.log('Server is running...') });
