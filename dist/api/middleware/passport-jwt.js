'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configureJWTStrategy = undefined;

var _passportJwt = require('passport-jwt');

var _passportJwt2 = _interopRequireDefault(_passportJwt);

var _development = require('../config/env/development');

var _user = require('../model/user.model');

var _user2 = _interopRequireDefault(_user);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureJWTStrategy = exports.configureJWTStrategy = function configureJWTStrategy() {
    var opts = {};
    opts.jwtFromRequest = _passportJwt2.default.ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = _development.devConfig.secret;
    _passport2.default.use(new _passportJwt2.default.Strategy(opts, function (payload, done) {
        _user2.default.findOne({ _id: payload.id }, function (err, user) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZS9wYXNzcG9ydC1qd3QuanMiXSwibmFtZXMiOlsiY29uZmlndXJlSldUU3RyYXRlZ3kiLCJvcHRzIiwiand0RnJvbVJlcXVlc3QiLCJwYXNzcG9ydGp3dCIsIkV4dHJhY3RKd3QiLCJmcm9tQXV0aEhlYWRlckFzQmVhcmVyVG9rZW4iLCJzZWNyZXRPcktleSIsImRldkNvbmZpZyIsInNlY3JldCIsInBhc3Nwb3J0IiwidXNlIiwiU3RyYXRlZ3kiLCJwYXlsb2FkIiwiZG9uZSIsIlVzZXIiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJlcnIiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxzREFBdUIsU0FBdkJBLG9CQUF1QixHQUFNO0FBQzFDLFFBQU1DLE9BQU8sRUFBYjtBQUNBQSxTQUFLQyxjQUFMLEdBQXNCQyxzQkFBWUMsVUFBWixDQUF1QkMsMkJBQXZCLEVBQXRCO0FBQ0FKLFNBQUtLLFdBQUwsR0FBbUJDLHVCQUFVQyxNQUE3QjtBQUNBQyx1QkFBU0MsR0FBVCxDQUFhLElBQUlQLHNCQUFZUSxRQUFoQixDQUF5QlYsSUFBekIsRUFBK0IsVUFBU1csT0FBVCxFQUFrQkMsSUFBbEIsRUFBd0I7QUFDaEVDLHVCQUFLQyxPQUFMLENBQWEsRUFBQ0MsS0FBS0osUUFBUUssRUFBZCxFQUFiLEVBQWdDLFVBQVNDLEdBQVQsRUFBY0MsSUFBZCxFQUFvQjtBQUNoRCxnQkFBSUQsR0FBSixFQUFTO0FBQ0wsdUJBQU9MLEtBQUtLLEdBQUwsRUFBVSxLQUFWLENBQVA7QUFDSDtBQUNELGdCQUFJQyxJQUFKLEVBQVU7QUFDTix1QkFBT04sS0FBSyxJQUFMLEVBQVdNLElBQVgsQ0FBUDtBQUNILGFBRkQsTUFFTztBQUNILHVCQUFPTixLQUFLLElBQUwsRUFBVyxLQUFYLENBQVA7QUFDQTtBQUNIO0FBQ0osU0FWRDtBQVdILEtBWlksQ0FBYjtBQWFDLENBakJNIiwiZmlsZSI6InBhc3Nwb3J0LWp3dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXNzcG9ydGp3dCBmcm9tICdwYXNzcG9ydC1qd3QnO1xyXG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tICcuLi9jb25maWcvZW52L2RldmVsb3BtZW50JztcclxuaW1wb3J0ICBVc2VyICBmcm9tICcuLi9tb2RlbC91c2VyLm1vZGVsJztcclxuaW1wb3J0ICBwYXNzcG9ydCAgZnJvbSAncGFzc3BvcnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZUpXVFN0cmF0ZWd5ID0gKCkgPT4ge1xyXG5jb25zdCBvcHRzID0ge31cclxub3B0cy5qd3RGcm9tUmVxdWVzdCA9IHBhc3Nwb3J0and0LkV4dHJhY3RKd3QuZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuKCk7XHJcbm9wdHMuc2VjcmV0T3JLZXkgPSBkZXZDb25maWcuc2VjcmV0O1xyXG5wYXNzcG9ydC51c2UobmV3IHBhc3Nwb3J0and0LlN0cmF0ZWd5KG9wdHMsIGZ1bmN0aW9uKHBheWxvYWQsIGRvbmUpIHtcclxuICAgIFVzZXIuZmluZE9uZSh7X2lkOiBwYXlsb2FkLmlkfSwgZnVuY3Rpb24oZXJyLCB1c2VyKSB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9uZShlcnIsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gb3IgeW91IGNvdWxkIGNyZWF0ZSBhIG5ldyBhY2NvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxufTsiXX0=