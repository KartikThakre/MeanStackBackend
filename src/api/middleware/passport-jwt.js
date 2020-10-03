import passportjwt from 'passport-jwt';
import { devConfig } from '../config/env/development';
import  User  from '../model/user.model';
import  passport  from 'passport';

export const configureJWTStrategy = () => {
const opts = {}
opts.jwtFromRequest = passportjwt.ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = devConfig.secret;
passport.use(new passportjwt.Strategy(opts, function(payload, done) {
    User.findOne({_id: payload.id}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user); 
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));
};