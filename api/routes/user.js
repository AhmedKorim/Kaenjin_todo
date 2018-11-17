const Express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// models
const User = require('../../models/User');
const router = Express.Router();
const {secretOrKey} = require('../../config/keys');

router.post('/register', (req, res, next) => {

    User.findOne({email: req.body.email})
        .then(doc => {
            if (doc) {
                return res.status(400)
                    .json({
                        error: 'this email is already in use'
                    })
            }
            // creating new user
            const newUser = new User({
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            });
            bcrypt.genSalt(10, (err, salt) => {
                return bcrypt.hash(newUser.password, salt, (err, hashedPassword) => {
                    if (err) {
                        console.log(err);
                        return res.status(500)
                            .json({
                                error: "internal server error"
                            })
                    }
                    newUser.password = hashedPassword;
                    return newUser.save()
                        .then(doc => {
                            console.log(doc);
                            if (doc) return res.status(201).json({
                                message: 'user created',
                                user: {
                                    name: doc.name,
                                }
                            })
                        })
                })
            })
                .catch(err => console.log(err))
        })

})
router.post('/login', (req, res) => {
    const {email, password} = req.body;


    User.findOne({email})
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    error: 'email is not found'
                })
            }

           return bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            expTimeout: 3600 * 3,
                            date: Date.now()
                        }


                      return  jwt.sign(payload, secretOrKey,
                          {expiresIn: 3600 * 3},
                            (err, token) => {
                          res.status(200)
                                    .json({
                                        message: "success login",
                                        user: {
                                            id: user._id.toString(),
                                            userName: user.name,
                                        },
                                        token: 'Bearer ' + token
                                    })

                            })

                    } else {
                        return res.status(400)
                            .json({
                                message: 'login failed'
                            })
                    }
                }).catch(err =>
                console.log(err))
        })
        .then(err => {
            console.log(err);

            res.status(500)
                .json({error: 'internal server error'})
        })
})
module.exports = router;
