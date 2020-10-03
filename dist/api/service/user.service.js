'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    validateSignupSchema: function validateSignupSchema(body) {
        var schema = _joi2.default.object().keys({
            email: _joi2.default.string().email().required(),
            password: _joi2.default.string().required(),
            name: _joi2.default.string().required()
        });

        var _Joi$validate = _joi2.default.validate(body, schema),
            error = _Joi$validate.error,
            value = _Joi$validate.value;

        if (error && error.details) {
            return { error: error };
        }
        return { value: value };
    },
    validateSchema: function validateSchema(body) {
        var schema = _joi2.default.object().keys({
            email: _joi2.default.string().email().required(),
            password: _joi2.default.string().required()

        });

        var _Joi$validate2 = _joi2.default.validate(body, schema),
            error = _Joi$validate2.error,
            value = _Joi$validate2.value;

        if (error && error.details) {
            return { error: error };
        }
        return { value: value };
    },
    validateForgotSchema: function validateForgotSchema(body) {
        var schema = _joi2.default.object().keys({
            email: _joi2.default.string().email().required()
        });

        var _Joi$validate3 = _joi2.default.validate(body, schema),
            error = _Joi$validate3.error,
            value = _Joi$validate3.value;

        if (error && error.details) {
            return { error: error };
        }
        return { value: value };
    },
    getUser: function getUser(user) {
        var rsp = {};
        if (user.local.email) {
            rsp.name = user.local.name;
            rsp.email = user.local.email;
        }
        return rsp;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvc2VydmljZS91c2VyLnNlcnZpY2UuanMiXSwibmFtZXMiOlsidmFsaWRhdGVTaWdudXBTY2hlbWEiLCJib2R5Iiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsImVtYWlsIiwic3RyaW5nIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsIm5hbWUiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwidmFsaWRhdGVTY2hlbWEiLCJ2YWxpZGF0ZUZvcmdvdFNjaGVtYSIsImdldFVzZXIiLCJ1c2VyIiwicnNwIiwibG9jYWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7a0JBRWM7QUFDVkEsd0JBRFUsZ0NBQ1dDLElBRFgsRUFDaUI7QUFDdkIsWUFBTUMsU0FBU0MsY0FBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQy9CQyxtQkFBT0gsY0FBSUksTUFBSixHQUNKRCxLQURJLEdBRUpFLFFBRkksRUFEd0I7QUFJL0JDLHNCQUFVTixjQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFKcUI7QUFLL0JFLGtCQUFNUCxjQUFJSSxNQUFKLEdBQWFDLFFBQWI7QUFMeUIsU0FBbEIsQ0FBZjs7QUFEdUIsNEJBUUVMLGNBQUlRLFFBQUosQ0FBYVYsSUFBYixFQUFtQkMsTUFBbkIsQ0FSRjtBQUFBLFlBUWZVLEtBUmUsaUJBUWZBLEtBUmU7QUFBQSxZQVFSQyxLQVJRLGlCQVFSQSxLQVJROztBQVN2QixZQUFJRCxTQUFTQSxNQUFNRSxPQUFuQixFQUE0QjtBQUMxQixtQkFBTyxFQUFFRixZQUFGLEVBQVA7QUFDRDtBQUNELGVBQU8sRUFBRUMsWUFBRixFQUFQO0FBQ0QsS0FkTztBQWVWRSxrQkFmVSwwQkFlS2QsSUFmTCxFQWVVO0FBQ2hCLFlBQU1DLFNBQVNDLGNBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUM3QkMsbUJBQVFILGNBQUlJLE1BQUosR0FBYUQsS0FBYixHQUFxQkUsUUFBckIsRUFEcUI7QUFFN0JDLHNCQUFZTixjQUFJSSxNQUFKLEdBQWFDLFFBQWI7O0FBRmlCLFNBQWxCLENBQWY7O0FBRGdCLDZCQU1PTCxjQUFJUSxRQUFKLENBQWFWLElBQWIsRUFBa0JDLE1BQWxCLENBTlA7QUFBQSxZQU1UVSxLQU5TLGtCQU1UQSxLQU5TO0FBQUEsWUFNRkMsS0FORSxrQkFNRkEsS0FORTs7QUFPaEIsWUFBR0QsU0FBU0EsTUFBTUUsT0FBbEIsRUFBMEI7QUFDdEIsbUJBQU8sRUFBQ0YsWUFBRCxFQUFQO0FBQ0g7QUFDRCxlQUFPLEVBQUNDLFlBQUQsRUFBUDtBQUNILEtBMUJTO0FBNEJWRyx3QkE1QlUsZ0NBNEJXZixJQTVCWCxFQTRCZ0I7QUFDdEIsWUFBTUMsU0FBU0MsY0FBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxtQkFBUUgsY0FBSUksTUFBSixHQUFhRCxLQUFiLEdBQXFCRSxRQUFyQjtBQURxQixTQUFsQixDQUFmOztBQURzQiw2QkFJQ0wsY0FBSVEsUUFBSixDQUFhVixJQUFiLEVBQWtCQyxNQUFsQixDQUpEO0FBQUEsWUFJZlUsS0FKZSxrQkFJZkEsS0FKZTtBQUFBLFlBSVJDLEtBSlEsa0JBSVJBLEtBSlE7O0FBS3RCLFlBQUdELFNBQVNBLE1BQU1FLE9BQWxCLEVBQTBCO0FBQ3RCLG1CQUFPLEVBQUNGLFlBQUQsRUFBUDtBQUNIO0FBQ0QsZUFBTyxFQUFDQyxZQUFELEVBQVA7QUFDSCxLQXJDUztBQXVDVkksV0F2Q1UsbUJBdUNGQyxJQXZDRSxFQXVDSTtBQUNWLFlBQU1DLE1BQU0sRUFBWjtBQUNBLFlBQUlELEtBQUtFLEtBQUwsQ0FBV2QsS0FBZixFQUFzQjtBQUNwQmEsZ0JBQUlULElBQUosR0FBV1EsS0FBS0UsS0FBTCxDQUFXVixJQUF0QjtBQUNBUyxnQkFBSWIsS0FBSixHQUFZWSxLQUFLRSxLQUFMLENBQVdkLEtBQXZCO0FBQ0Q7QUFDRCxlQUFPYSxHQUFQO0FBQ0g7QUE5Q1MsQyIsImZpbGUiOiJ1c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIHZhbGlkYXRlU2lnbnVwU2NoZW1hKGJvZHkpIHtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgICAgICBlbWFpbDogSm9pLnN0cmluZygpXHJcbiAgICAgICAgICAgIC5lbWFpbCgpXHJcbiAgICAgICAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IEpvaS52YWxpZGF0ZShib2R5LCBzY2hlbWEpO1xyXG4gICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgICAgICByZXR1cm4geyBlcnJvciB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB2YWx1ZSB9O1xyXG4gICAgICB9LFxyXG4gICAgdmFsaWRhdGVTY2hlbWEoYm9keSl7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoeyAgICAgXHJcbiAgICAgICAgICAgIGVtYWlsIDogSm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSwgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwYXNzd29yZCAgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSwgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7ZXJyb3IsIHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9OyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge3ZhbHVlfTtcclxuICAgIH0sXHJcblxyXG4gICAgdmFsaWRhdGVGb3Jnb3RTY2hlbWEoYm9keSl7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoeyAgICAgXHJcbiAgICAgICAgICAgIGVtYWlsIDogSm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSwgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLCB2YWx1ZX0gPSBKb2kudmFsaWRhdGUoYm9keSxzY2hlbWEpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yfTsgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHt2YWx1ZX07XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFVzZXIodXNlcikge1xyXG4gICAgICAgIGNvbnN0IHJzcCA9IHt9O1xyXG4gICAgICAgIGlmICh1c2VyLmxvY2FsLmVtYWlsKSB7XHJcbiAgICAgICAgICByc3AubmFtZSA9IHVzZXIubG9jYWwubmFtZTtcclxuICAgICAgICAgIHJzcC5lbWFpbCA9IHVzZXIubG9jYWwuZW1haWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByc3A7XHJcbiAgICB9XHJcbn0iXX0=