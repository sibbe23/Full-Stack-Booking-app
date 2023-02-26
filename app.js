const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('./util/database')
const errorController = require('./controllers/error')

const app=express()

const Routes = require('./routes/routes')

app.use(cors())
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', Routes);

app.use(errorController.get404);

sequelize.sync().then(res=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
})