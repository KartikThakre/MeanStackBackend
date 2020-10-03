'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ClientSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
exports.default = _mongoose2.default.model('Client', ClientSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWwvY2xpZW50Lm1vZGVsLmpzIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiQ2xpZW50U2NoZW1hIiwiZmlyc3RuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibGFzdG5hbWUiLCJlbWFpbCIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsbUJBQVNELE1BQXhCO0FBQ0EsSUFBTUUsZUFBZSxJQUFJRixNQUFKLENBQVc7QUFDNUJHLGVBQVc7QUFDUEMsY0FBT0MsTUFEQTtBQUVQQyxrQkFBVztBQUZKLEtBRGlCO0FBSzVCQyxjQUFVO0FBQ05ILGNBQU9DLE1BREQ7QUFFTkMsa0JBQVc7QUFGTCxLQUxrQjtBQVM1QkUsV0FBUTtBQUNKSixjQUFPQyxNQURIO0FBRUpDLGtCQUFXO0FBRlA7QUFUb0IsQ0FBWCxDQUFyQjtrQkFjZUwsbUJBQVNRLEtBQVQsQ0FBZSxRQUFmLEVBQXdCUCxZQUF4QixDIiwiZmlsZSI6ImNsaWVudC5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IENsaWVudFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgZmlyc3RuYW1lIDp7XHJcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZCA6IHRydWUsXHJcbiAgICB9LCBcclxuICAgIGxhc3RuYW1lIDp7XHJcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZCA6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZW1haWwgOiB7XHJcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZCA6IHRydWUsXHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbCgnQ2xpZW50JyxDbGllbnRTY2hlbWEpOyJdfQ==