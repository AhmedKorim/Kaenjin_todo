const Express = require('express')
const passport = require('passport');

const router = Express.Router();


// modles
const Project = require('../../models/User');
const Category = require('../../models/Category');
const Todo = require('../../models/Todo');


// routes
/*
* create a to do
* update a to do
* remove a to do
* change a to do cat || project.
* change priority
*
* */

router.post("/", passport.authenticate('jwt', {session: false}), async (req, res) => {
        try {
            console.log(req);
            const {_id} = req.user;
            let {title, category, project, description} = req.body;
            if (!project || !category) {
                try {
                    const [defalutProject, defalutCategory] =await Promise.all([
                        Category.findOne({user: _id}),
                        Project.findOne({user: _id})
                    ])

                    project = project || defalutProject.categories[0]._id;
                    category = category || defalutCategory[0]._id;
                } catch (e) {
                    console.log(e);
                    return res.status(500).json({})
                }
                const newTodo = new Todo({
                    user: _id,
                    title,
                    category,
                    project,
                    description
                })
                const todo = await newTodo.save();
                if (todo) {
                    res.status(200).json({
                        message: 'created todo successfully',
                        todo
                    })
                }
            }
        } catch (e) {
            console.log(e);
        }

    }
)

module.exports = router;
