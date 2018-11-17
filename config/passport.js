const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt =  require('passport-jwt').ExtractJwt;

const User = require('../models/User');
// secret Or key
const {secretOrKey}   = require('./keys');
const opts ={};
// extract the token from the header
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretOrKey;
module.exports = passport =>{
    return passport.use(new JwtStrategy(opts , (jwt_payload,done)=>{
        return  User.findById(jwt_payload.id)
            .then(user =>{
               if(user){
                   // user form db

                   return done(null,user)
               }
               return done(null,false)
            })
            .catch(err => console.log(err))
    }));
}
