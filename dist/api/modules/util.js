'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getJWTToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _development = require('../config/env/development');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getJWTToken = exports.getJWTToken = function getJWTToken(payload) {
    var token = _jsonwebtoken2.default.sign({ payload: payload }, _development.devConfig.secret, { expiresIn: '1d' });
    return token;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kdWxlcy91dGlsLmpzIl0sIm5hbWVzIjpbImdldEpXVFRva2VuIiwicGF5bG9hZCIsInRva2VuIiwiand0Iiwic2lnbiIsImRldkNvbmZpZyIsInNlY3JldCIsImV4cGlyZXNJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxvQ0FBYyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBYTtBQUNwQyxRQUFNQyxRQUFRQyx1QkFBSUMsSUFBSixDQUFTLEVBQUNILGdCQUFELEVBQVQsRUFBbUJJLHVCQUFVQyxNQUE3QixFQUFvQyxFQUFDQyxXQUFZLElBQWIsRUFBcEMsQ0FBZDtBQUNBLFdBQU9MLEtBQVA7QUFDSCxDQUhNIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEpXVFRva2VuID0gKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oe3BheWxvYWR9LGRldkNvbmZpZy5zZWNyZXQse2V4cGlyZXNJbiA6ICcxZCd9KTtcclxuICAgIHJldHVybiB0b2tlbjtcclxufSJdfQ==