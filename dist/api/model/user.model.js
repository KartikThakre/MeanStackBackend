'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var UserSchema = new Schema({
    // email:{
    //     type : String,
    //     required : true,
    //     lowercase : true,
    //     unique :true,
    // },
    // password:{
    //     type : String,
    //     required :true,
    // },
    local: {
        email: String,
        password: String
    }
    //   google: {
    //     email: String,
    //     id: String,
    //     displayName: String,
    //     token: String,
    //   },
});

// UserSchema.pre('save', async function(){        //this function used for providing a default password 
// //this.password = "AbbuZadda";
// if(this.isModified('password') || this.isNew){      //if user is modified or its new
//     const salt = await bcryptjs.genSalt();
//     const hash = await bcryptjs.hash(this.password,salt);    //its provideing the HashCode on passwaord field
//     this.password = hash;
// }
// });


exports.default = _mongoose2.default.model('User', UserSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWwvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlVzZXJTY2hlbWEiLCJsb2NhbCIsImVtYWlsIiwiU3RyaW5nIiwicGFzc3dvcmQiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsbUJBQVNELE1BQXhCO0FBQ0EsSUFBTUUsYUFBYSxJQUFJRixNQUFKLENBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUcsV0FBTztBQUNIQyxlQUFPQyxNQURKO0FBRUhDLGtCQUFVRDtBQUZQO0FBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEIwQixDQUFYLENBQW5COztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7a0JBR2VKLG1CQUFTTSxLQUFULENBQWUsTUFBZixFQUFzQkwsVUFBdEIsQyIsImZpbGUiOiJ1c2VyLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IGJjcnlwdGpzIGZyb20gJ2JjcnlwdGpzJztcclxuXHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgLy8gZW1haWw6e1xyXG4gICAgLy8gICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAvLyAgICAgcmVxdWlyZWQgOiB0cnVlLFxyXG4gICAgLy8gICAgIGxvd2VyY2FzZSA6IHRydWUsXHJcbiAgICAvLyAgICAgdW5pcXVlIDp0cnVlLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIHBhc3N3b3JkOntcclxuICAgIC8vICAgICB0eXBlIDogU3RyaW5nLFxyXG4gICAgLy8gICAgIHJlcXVpcmVkIDp0cnVlLFxyXG4gICAgLy8gfSxcclxuICAgIGxvY2FsOiB7XHJcbiAgICAgICAgZW1haWw6IFN0cmluZyxcclxuICAgICAgICBwYXNzd29yZDogU3RyaW5nLFxyXG4gICAgICB9LFxyXG4gICAgLy8gICBnb29nbGU6IHtcclxuICAgIC8vICAgICBlbWFpbDogU3RyaW5nLFxyXG4gICAgLy8gICAgIGlkOiBTdHJpbmcsXHJcbiAgICAvLyAgICAgZGlzcGxheU5hbWU6IFN0cmluZyxcclxuICAgIC8vICAgICB0b2tlbjogU3RyaW5nLFxyXG4gICAgLy8gICB9LFxyXG59KTtcclxuXHJcbi8vIFVzZXJTY2hlbWEucHJlKCdzYXZlJywgYXN5bmMgZnVuY3Rpb24oKXsgICAgICAgIC8vdGhpcyBmdW5jdGlvbiB1c2VkIGZvciBwcm92aWRpbmcgYSBkZWZhdWx0IHBhc3N3b3JkIFxyXG4vLyAvL3RoaXMucGFzc3dvcmQgPSBcIkFiYnVaYWRkYVwiO1xyXG4vLyBpZih0aGlzLmlzTW9kaWZpZWQoJ3Bhc3N3b3JkJykgfHwgdGhpcy5pc05ldyl7ICAgICAgLy9pZiB1c2VyIGlzIG1vZGlmaWVkIG9yIGl0cyBuZXdcclxuLy8gICAgIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHRqcy5nZW5TYWx0KCk7XHJcbi8vICAgICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0anMuaGFzaCh0aGlzLnBhc3N3b3JkLHNhbHQpOyAgICAvL2l0cyBwcm92aWRlaW5nIHRoZSBIYXNoQ29kZSBvbiBwYXNzd2FvcmQgZmllbGRcclxuLy8gICAgIHRoaXMucGFzc3dvcmQgPSBoYXNoO1xyXG4vLyB9XHJcbi8vIH0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKCdVc2VyJyxVc2VyU2NoZW1hKTsiXX0=