'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _user = require('../model/user.model');

var _user2 = _interopRequireDefault(_user);

var _httpStatusCodes = require('http-status-codes');

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _user3 = require('../service/user.service');

var _user4 = _interopRequireDefault(_user3);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _development = require('../config/env/development');

var _util = require('../modules/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    signup: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
            var _userService$validate, error, value, existingUser, user, salt, hash;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _userService$validate = _user4.default.validateSignupSchema(req.body), error = _userService$validate.error, value = _userService$validate.value;

                            if (!(error && error.details)) {
                                _context.next = 4;
                                break;
                            }

                            return _context.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json(error));

                        case 4:
                            _context.next = 6;
                            return _user2.default.findOne({ 'local.email': value.email });

                        case 6:
                            existingUser = _context.sent;

                            if (!existingUser) {
                                _context.next = 9;
                                break;
                            }

                            return _context.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json({ err: 'You have already created account' }));

                        case 9:
                            _context.next = 11;
                            return new _user2.default();

                        case 11:
                            user = _context.sent;

                            user.local.email = value.email;
                            user.local.name = value.name;
                            _context.next = 16;
                            return _bcryptjs2.default.genSalt();

                        case 16:
                            salt = _context.sent;
                            _context.next = 19;
                            return _bcryptjs2.default.hash(value.password, salt);

                        case 19:
                            hash = _context.sent;

                            user.local.password = hash;
                            _context.next = 23;
                            return user.save();

                        case 23:
                            return _context.abrupt('return', res.json({ success: true, message: 'User created successfully' }));

                        case 26:
                            _context.prev = 26;
                            _context.t0 = _context['catch'](0);

                            console.error(_context.t0);
                            return _context.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context.t0));

                        case 30:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 26]]);
        }));

        function signup(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return signup;
    }(),
    login: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
            var _userService$validate2, error, value, user, matched, token;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _userService$validate2 = _user4.default.validateSchema(req.body), error = _userService$validate2.error, value = _userService$validate2.value;

                            if (!(error && error.details)) {
                                _context2.next = 4;
                                break;
                            }

                            return _context2.abrupt('return', res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error));

                        case 4:
                            _context2.next = 6;
                            return _user2.default.findOne({ 'local.email': value.email });

                        case 6:
                            user = _context2.sent;

                            debugger;
                            console.log(user);

                            if (user) {
                                _context2.next = 11;
                                break;
                            }

                            return _context2.abrupt('return', res.status(_httpStatusCodes2.default.BAD_REQUEST).json({ err: 'Invalid Email Or Password' }));

                        case 11:
                            _context2.next = 13;
                            return _bcryptjs2.default.compare(value.password, user.password);

                        case 13:
                            matched = _context2.sent;

                            if (matched) {
                                _context2.next = 16;
                                break;
                            }

                            return _context2.abrupt('return', res.status(_httpStatusCodes.UNAUTHORIZED).json({ err: 'Invalid Credentials' }));

                        case 16:
                            token = _jsonwebtoken2.default.sign({ id: user._id }, _development.devConfig.secret, { expiresIn: '1d' });
                            return _context2.abrupt('return', res.json({ Success: true, token: token }));

                        case 20:
                            _context2.prev = 20;
                            _context2.t0 = _context2['catch'](0);

                            console.error(_context2.t0);
                            return _context2.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context2.t0));

                        case 24:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this, [[0, 20]]);
        }));

        function login(_x3, _x4) {
            return _ref2.apply(this, arguments);
        }

        return login;
    }(),
    test: function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            return _context3.abrupt('return', res.json(req.user));

                        case 1:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function test(_x5, _x6) {
            return _ref3.apply(this, arguments);
        }

        return test;
    }(),
    forgotPassword: function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
            var _userService$validate3, value, error, user, token, resetLink, sanitizedUser, results;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            _userService$validate3 = _user4.default.validateForgotSchema(req.body), value = _userService$validate3.value, error = _userService$validate3.error;

                            if (!(error && error.details)) {
                                _context4.next = 4;
                                break;
                            }

                            return _context4.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json(error));

                        case 4:
                            _context4.next = 6;
                            return _user2.default.findOne({ 'local.email': value.email });

                        case 6:
                            user = _context4.sent;

                            debugger;
                            console.log(user);

                            if (user) {
                                _context4.next = 11;
                                break;
                            }

                            return _context4.abrupt('return', res.status(_httpStatusCodes.NOT_FOUND).json({ err: 'could not find user' }));

                        case 11:
                            token = (0, _util.getJWTToken)({ id: user._id });
                            resetLink = '\n   <h4> Please click on the link to reset the password </h4>\n   <a href =\'' + _development.devConfig.frontendURL + '/reset-password/' + token + '\'>Reset Password</a>\n  ';
                            sanitizedUser = _user4.default.getUser(user);
                            _context4.next = 16;
                            return sendEmail({
                                html: resetLink,
                                subject: 'Forgot Password',
                                email: sanitizedUser.email
                            });

                        case 16:
                            results = _context4.sent;
                            return _context4.abrupt('return', res.json(results));

                        case 20:
                            _context4.prev = 20;
                            _context4.t0 = _context4['catch'](0);

                            console.error(_context4.t0);
                            return _context4.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context4.t0));

                        case 24:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this, [[0, 20]]);
        }));

        function forgotPassword(_x7, _x8) {
            return _ref4.apply(this, arguments);
        }

        return forgotPassword;
    }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY29udHJvbGxlci91c2VyLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsic2lnbnVwIiwicmVxIiwicmVzIiwidXNlclNlcnZpY2UiLCJ2YWxpZGF0ZVNpZ251cFNjaGVtYSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsInN0YXR1cyIsIkJBRF9SRVFVRVNUIiwianNvbiIsIlVzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJleGlzdGluZ1VzZXIiLCJlcnIiLCJ1c2VyIiwibG9jYWwiLCJuYW1lIiwiYmNyeXB0anMiLCJnZW5TYWx0Iiwic2FsdCIsImhhc2giLCJwYXNzd29yZCIsInNhdmUiLCJzdWNjZXNzIiwibWVzc2FnZSIsImNvbnNvbGUiLCJJTlRFUk5BTF9TRVJWRVJfRVJST1IiLCJsb2dpbiIsInZhbGlkYXRlU2NoZW1hIiwiSHR0cFN0YXR1cyIsImxvZyIsImNvbXBhcmUiLCJtYXRjaGVkIiwiVU5BVVRIT1JJWkVEIiwidG9rZW4iLCJqd3QiLCJzaWduIiwiaWQiLCJfaWQiLCJkZXZDb25maWciLCJzZWNyZXQiLCJleHBpcmVzSW4iLCJTdWNjZXNzIiwidGVzdCIsImZvcmdvdFBhc3N3b3JkIiwidmFsaWRhdGVGb3Jnb3RTY2hlbWEiLCJOT1RfRk9VTkQiLCJyZXNldExpbmsiLCJmcm9udGVuZFVSTCIsInNhbml0aXplZFVzZXIiLCJnZXRVc2VyIiwic2VuZEVtYWlsIiwiaHRtbCIsInN1YmplY3QiLCJyZXN1bHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O2tCQUljO0FBQ0xBLFVBREs7QUFBQSw2R0FDRUMsR0FERixFQUNNQyxHQUROO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQUdjQyxlQUFZQyxvQkFBWixDQUFpQ0gsSUFBSUksSUFBckMsQ0FIZCxFQUdI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QUFrRU47QUFDQVcsb0NBQVFLLEdBQVIsQ0FBWWhCLElBQVo7O0FBbkVNLGdDQW9FREEsSUFwRUM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOERBcUVLZixJQUFJTyxNQUFKLENBQVd3QywwQkFBWCxFQUFzQnRDLElBQXRCLENBQTJCLEVBQUVLLEtBQUsscUJBQVAsRUFBM0IsQ0FyRUw7O0FBQUE7QUF1RUFxQixpQ0F2RUEsR0F1RVEsdUJBQVksRUFBRUcsSUFBSXZCLEtBQUt3QixHQUFYLEVBQVosQ0F2RVI7QUF5RUFTLHFDQXpFQSxzRkEyRUNSLHVCQUFVUyxXQTNFWCx3QkEyRXlDZCxLQTNFekM7QUE2RUFlLHlDQTdFQSxHQTZFZ0JqRCxlQUFZa0QsT0FBWixDQUFvQnBDLElBQXBCLENBN0VoQjtBQUFBO0FBQUEsbUNBOEVnQnFDLFVBQVU7QUFDNUJDLHNDQUFNTCxTQURzQjtBQUU1Qk0seUNBQVMsaUJBRm1CO0FBRzVCMUMsdUNBQU9zQyxjQUFjdEM7QUFITyw2QkFBVixDQTlFaEI7O0FBQUE7QUE4RUEyQyxtQ0E5RUE7QUFBQSw4REFtRkN2RCxJQUFJUyxJQUFKLENBQVM4QyxPQUFULENBbkZEOztBQUFBO0FBQUE7QUFBQTs7QUFxRk43QixvQ0FBUXRCLEtBQVI7QUFyRk0sOERBc0ZDSixJQUFJTyxNQUFKLENBQVdvQixzQ0FBWCxFQUFrQ2xCLElBQWxDLGNBdEZEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiJ1c2VyLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcbmltcG9ydCAgVXNlciAgZnJvbSAnLi4vbW9kZWwvdXNlci5tb2RlbCc7XHJcbmltcG9ydCBIdHRwU3RhdHVzLCB7IElOVEVSTkFMX1NFUlZFUl9FUlJPUiwgQkFEX1JFUVVFU1QsIFVOQVVUSE9SSVpFRCwgTk9UX0ZPVU5EIH0gZnJvbSAnaHR0cC1zdGF0dXMtY29kZXMnO1xyXG5pbXBvcnQgYmNyeXB0anMgZnJvbSAnYmNyeXB0anMnO1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi4vc2VydmljZS91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnQnO1xyXG5pbXBvcnQgeyBnZXRKV1RUb2tlbiB9IGZyb20gJy4uL21vZHVsZXMvdXRpbCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gIGFzeW5jICBzaWdudXAocmVxLHJlcyl7IFxyXG4gICAgICAgIHRyeSB7XHJcblx0XHRcdGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSB1c2VyU2VydmljZS52YWxpZGF0ZVNpZ251cFNjaGVtYShyZXEuYm9keSk7XHJcblx0XHRcdGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7ICdsb2NhbC5lbWFpbCc6IHZhbHVlLmVtYWlsIH0pO1xyXG5cdFx0XHRpZiAoZXhpc3RpbmdVc2VyKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoQkFEX1JFUVVFU1QpLmpzb24oeyBlcnI6ICdZb3UgaGF2ZSBhbHJlYWR5IGNyZWF0ZWQgYWNjb3VudCcgfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgdXNlciA9IGF3YWl0IG5ldyBVc2VyKCk7XHJcblx0XHRcdHVzZXIubG9jYWwuZW1haWwgPSB2YWx1ZS5lbWFpbDtcclxuXHRcdFx0dXNlci5sb2NhbC5uYW1lID0gdmFsdWUubmFtZTtcclxuXHRcdFx0Y29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdGpzLmdlblNhbHQoKTtcclxuXHRcdFx0Y29uc3QgaGFzaCA9IGF3YWl0IGJjcnlwdGpzLmhhc2godmFsdWUucGFzc3dvcmQsIHNhbHQpO1xyXG5cdFx0XHR1c2VyLmxvY2FsLnBhc3N3b3JkID0gaGFzaDtcclxuXHRcdFx0YXdhaXQgdXNlci5zYXZlKCk7XHJcblx0XHRcdHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdVc2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JyB9KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGVycik7XHJcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKElOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpO1xyXG5cdFx0fVxyXG4gICAgfSAsXHJcbiAgICBcclxuICBhc3luYyBsb2dpbihyZXEscmVzKXtcclxuICAgICAgdHJ5e1xyXG4gICAgY29uc3Qge2Vycm9yLCB2YWx1ZX0gPSB1c2VyU2VydmljZS52YWxpZGF0ZVNjaGVtYShyZXEuYm9keSk7XHJcbiAgICBpZihlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgJ2xvY2FsLmVtYWlsJzogdmFsdWUuZW1haWwgfSk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKHtlcnIgOiAnSW52YWxpZCBFbWFpbCBPciBQYXNzd29yZCd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXRjaGVkID0gYXdhaXQgYmNyeXB0anMuY29tcGFyZSh2YWx1ZS5wYXNzd29yZCAsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgIGlmKCFtYXRjaGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoVU5BVVRIT1JJWkVEKS5qc29uKHtlcnIgOiAnSW52YWxpZCBDcmVkZW50aWFscyd9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7aWQgOnVzZXIuX2lkfSxkZXZDb25maWcuc2VjcmV0LHtleHBpcmVzSW4gOiAnMWQnfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtTdWNjZXNzOnRydWUsIHRva2VufSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcblxyXG4gICAgfSBcclxuICAgfSxcclxuICAgYXN5bmMgdGVzdChyZXEscmVzKXtcclxuICAgICAgIHJldHVybiByZXMuanNvbihyZXEudXNlcik7XHJcbiAgIH0sXHJcblxyXG4gICBhc3luYyBmb3Jnb3RQYXNzd29yZChyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gdXNlclNlcnZpY2UudmFsaWRhdGVGb3Jnb3RTY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKEJBRF9SRVFVRVNUKS5qc29uKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc3QgY3JpdGVyaWEgPSB7XHJcbiAgICAgICAgLy8gICAgICRvcjogW1xyXG4gICAgICAgIC8vICAgICAgICAgeyAnbG9jYWwuZW1haWwnOiB2YWx1ZS5lbWFpbCB9LFxyXG4gICAgICAgIC8vICAgICBdLFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7ICdsb2NhbC5lbWFpbCc6IHZhbHVlLmVtYWlsIH0pO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhOT1RfRk9VTkQpLmpzb24oeyBlcnI6ICdjb3VsZCBub3QgZmluZCB1c2VyJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnZXRKV1RUb2tlbih7IGlkOiB1c2VyLl9pZCB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzZXRMaW5rID0gYFxyXG4gICA8aDQ+IFBsZWFzZSBjbGljayBvbiB0aGUgbGluayB0byByZXNldCB0aGUgcGFzc3dvcmQgPC9oND5cclxuICAgPGEgaHJlZiA9JyR7ZGV2Q29uZmlnLmZyb250ZW5kVVJMfS9yZXNldC1wYXNzd29yZC8ke3Rva2VufSc+UmVzZXQgUGFzc3dvcmQ8L2E+XHJcbiAgYDtcclxuICAgICAgICBjb25zdCBzYW5pdGl6ZWRVc2VyID0gdXNlclNlcnZpY2UuZ2V0VXNlcih1c2VyKTtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgc2VuZEVtYWlsKHtcclxuICAgICAgICAgICAgaHRtbDogcmVzZXRMaW5rLFxyXG4gICAgICAgICAgICBzdWJqZWN0OiAnRm9yZ290IFBhc3N3b3JkJyxcclxuICAgICAgICAgICAgZW1haWw6IHNhbml0aXplZFVzZXIuZW1haWwsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHJlc3VsdHMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKElOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpO1xyXG4gICAgfVxyXG59LFxyXG59OyJdfQ==