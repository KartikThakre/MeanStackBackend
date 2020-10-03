'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setglobalMiddleware = undefined;

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _swaggerUiExpress = require('swagger-ui-express');

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _swagger = require('../../api/config/swagger.json');

var _swagger2 = _interopRequireDefault(_swagger);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _route = require('../../api/config/route');

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _passportJwt = require('../middleware/passport-jwt');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var setglobalMiddleware = exports.setglobalMiddleware = function setglobalMiddleware(app) {

    app.use(_express2.default.json());
    app.use(_express2.default.urlencoded({ extended: true }));

    //useing cors to backend for getting req from backend to frontend & prevent croossorigin pblm form browser  
    app.use((0, _cors2.default)());

    //useing httprequest useing morgan middleware
    app.use((0, _morgan2.default)('dev'));
    //For Route Purpose
    app.use('/api', _route.router);

    //useing passport 3rd party middleware for authentication
    app.use(_passport2.default.initialize());

    //Useing Passport-jwt for Authentication
    (0, _passportJwt.configureJWTStrategy)();

    //useing swagger middleware
    app.use('/api-docs', _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default, {
        explorer: true
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZS9nbG9iYWwtbWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6WyJhcHAiLCJzZXRnbG9iYWxNaWRkbGV3YXJlIiwidXNlIiwiZXhwcmVzcyIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJyb3V0ZXIiLCJwYXNzcG9ydCIsImluaXRpYWxpemUiLCJzd2FnZ2VydWkiLCJzZXJ2ZSIsInNldHVwIiwic3dhZ2dlckRvY3VtZW50IiwiZXhwbG9yZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBLElBQU1BLE1BQU0sd0JBQVo7O0FBR08sSUFBTUMsb0RBQXNCLFNBQXRCQSxtQkFBc0IsTUFBTTs7QUFHekNELFFBQUlFLEdBQUosQ0FBUUMsa0JBQVFDLElBQVIsRUFBUjtBQUNBSixRQUFJRSxHQUFKLENBQVFDLGtCQUFRRSxVQUFSLENBQW1CLEVBQUNDLFVBQVcsSUFBWixFQUFuQixDQUFSOztBQUVBO0FBQ0FOLFFBQUlFLEdBQUosQ0FBUSxxQkFBUjs7QUFFQTtBQUNBRixRQUFJRSxHQUFKLENBQVEsc0JBQU8sS0FBUCxDQUFSO0FBQ0E7QUFDQUYsUUFBSUUsR0FBSixDQUFRLE1BQVIsRUFBZUssYUFBZjs7QUFFQTtBQUNBUCxRQUFJRSxHQUFKLENBQVFNLG1CQUFTQyxVQUFULEVBQVI7O0FBRUE7QUFDQTs7QUFHQTtBQUNBVCxRQUFJRSxHQUFKLENBQVEsV0FBUixFQUFvQlEsMkJBQVVDLEtBQTlCLEVBQXFDRCwyQkFBVUUsS0FBVixDQUFnQkMsaUJBQWhCLEVBQWdDO0FBQ2pFQyxrQkFBVztBQURzRCxLQUFoQyxDQUFyQztBQUdDLENBekJNIiwiZmlsZSI6Imdsb2JhbC1taWRkbGV3YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZ2dlciBmcm9tICdtb3JnYW4nO1xyXG5pbXBvcnQgc3dhZ2dlcnVpIGZyb20gJ3N3YWdnZXItdWktZXhwcmVzcyc7XHJcbmltcG9ydCBzd2FnZ2VyRG9jdW1lbnQgZnJvbSAnLi4vLi4vYXBpL2NvbmZpZy9zd2FnZ2VyLmpzb24nO1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcclxuaW1wb3J0IHtyb3V0ZXJ9IGZyb20gJy4uLy4uL2FwaS9jb25maWcvcm91dGUnO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHtjb25maWd1cmVKV1RTdHJhdGVneX0gIGZyb20gJy4uL21pZGRsZXdhcmUvcGFzc3BvcnQtand0JztcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRnbG9iYWxNaWRkbGV3YXJlID0gYXBwID0+e1xyXG5cclxuXHJcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7ZXh0ZW5kZWQgOiB0cnVlfSkpO1xyXG5cclxuLy91c2VpbmcgY29ycyB0byBiYWNrZW5kIGZvciBnZXR0aW5nIHJlcSBmcm9tIGJhY2tlbmQgdG8gZnJvbnRlbmQgJiBwcmV2ZW50IGNyb29zc29yaWdpbiBwYmxtIGZvcm0gYnJvd3NlciAgXHJcbmFwcC51c2UoY29ycygpKTtcclxuXHJcbi8vdXNlaW5nIGh0dHByZXF1ZXN0IHVzZWluZyBtb3JnYW4gbWlkZGxld2FyZVxyXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xyXG4vL0ZvciBSb3V0ZSBQdXJwb3NlXHJcbmFwcC51c2UoJy9hcGknLHJvdXRlcik7XHJcblxyXG4vL3VzZWluZyBwYXNzcG9ydCAzcmQgcGFydHkgbWlkZGxld2FyZSBmb3IgYXV0aGVudGljYXRpb25cclxuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xyXG5cclxuLy9Vc2VpbmcgUGFzc3BvcnQtand0IGZvciBBdXRoZW50aWNhdGlvblxyXG5jb25maWd1cmVKV1RTdHJhdGVneSgpO1xyXG5cclxuXHJcbi8vdXNlaW5nIHN3YWdnZXIgbWlkZGxld2FyZVxyXG5hcHAudXNlKCcvYXBpLWRvY3MnLHN3YWdnZXJ1aS5zZXJ2ZSwgc3dhZ2dlcnVpLnNldHVwKHN3YWdnZXJEb2N1bWVudCx7XHJcbiAgICBleHBsb3JlciA6IHRydWVcclxufSkpO1xyXG59O1xyXG5cclxuIl19