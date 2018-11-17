const Express = require('express')
const Todo = require('../../models/Todo');
const passport = require('passport');

const router = Express.Router();


// routes
/*
* create a to do
* update a to do
* remove a to do
* change a to do cat || project.
* change priority
*
* */

router.post("/", passport.authenticate('jwt', {session: false}), async (res, req) => {
    const {_id} = req.user;
    const {title, category, project, description} = req.body;
    const newTodo = new Todo({
        user: _id,
        title,
        category,
        description
    })
})
