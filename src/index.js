const {serverConfig , Logger} = require('./config/index');
const express = require('express');
const app = express();
const apiRoutes = require('./routes/index');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api' , apiRoutes);



app.listen(serverConfig.PORT , () => {
    console.log(`Server is running on port :: ${serverConfig.PORT}`);
    Logger.log(1 ,  'Server is running ');
});