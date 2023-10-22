const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize=require('./util/database');
const app = express();

app.use(cors(
    {
        origin:"*"
    }
));

const userRoute=require('./routes/user');
const messageRoute=require('./routes/message');
 
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/user',userRoute);
app.use('/message',messageRoute);

sequelize
        .sync()
    // .sync({force:true})
    .then(()=>app.listen(3100))
    .catch(err=>console.log(err));  