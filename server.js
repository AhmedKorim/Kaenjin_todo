const Express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport')
const cors = require('cors');
const bodyParser = require('body-parser');
// connect to db
mongoose.connect('mongodb://localhost:27017/ceevo_todo', err => {
    if (!err) return console.log('connected to db');

    console.log(err);
})

// routs

const todo = require('./api/routes/todo');

const user = require('./api/routes/user');


const app = Express();
// body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// cors headers
app.use(cors());

// request sniffing
app.use(morgan('dev'))
// passport
app.use(passport.initialize());

// passport config
require('./config/passport')(passport);




app.use('/api/auth', user);

app.use('/api/todo', todo);

app.get('/', (req, res) => {
    res.status(200)
        .json({
            message: 'hello'
        })
})
app.listen(3032, err => {
    if (!err) return console.log('sever is running at http://localhost:3032');

    console.log(err);
})



