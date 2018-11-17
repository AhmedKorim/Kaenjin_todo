const Express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {secretOrKey} = require('../../config/keys');

// models
const User = require('../../models/User');
const Category = require('../../models/Category');
const Project = require('../../models/Project');

const router = Express.Router();


router.post('/register', async (req, res, next) => {
    const {email, password, name} = req.body;
    try {
        const user = await User.findOne({email})
        if (user) {
            return res.status(400)
                .json({
                    error: 'this email is in use already'
                })
        } else {
            const newUser = new User({
                email,
                name,
                password
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, async (err, hashPassword) => {
                    if (err) return res.status(500).json({error: 'internal server error'})

                    newUser.password = hashPassword;
                    const user = await newUser.save();
                    if (user) {
                        const defaultCategory = new Category({
                            user: user._id
                        })
                        const defaultProject = new Project({
                            title: 'daily rotten',
                            user: user._id
                        })
                        defaultCategory.categories.push({title:'inbox'});
                        try {
                            const [UserCategory, userProject] = await Promise.all([
                                defaultCategory.save(),
                                defaultProject.save()
                            ]);
                            if (UserCategory && userProject) {
                                res.status(200)
                                    .json({
                                        message: 'user created',
                                        user: {
                                            name: user.name,
                                            Categories: UserCategory,
                                            projects:defaultProject
                                        }
                                    })
                            }

                        } catch (e) {
                            res.status(500).json({
                                message: 'internal server error'
                            })
                        }


                    }
                })
            })
        }
    } catch (e) {
        res.status(500).json({message: 'internal server error'});
    }

})


router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({
                error: 'email is not found'
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                expTimeout: 3600 * 3,
            }
            jwt.sign(payload, secretOrKey, {expiresIn: 3600 * 3}, (err, token) => {
                if (err) return res.status(500).json({error: 'internal Server Error'})

                res.status(200).json({
                    message: "success login",
                    user: {
                        id: user._id.toString(),
                        userName: user.name,
                    },
                    token: 'Bearer ' + token
                })
            })
        } else {
            res.status(401)
                .json({
                    message: 'failed to login'
                })
        }
    } catch (e) {
        console.log(e);
        res.status(500)
            .json({
                message: "internal serve error"
            })
    }

})
module.exports = router;
