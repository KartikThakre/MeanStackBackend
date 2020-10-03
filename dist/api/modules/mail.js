'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendEmail = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _htmlToText = require('html-to-text');

var _htmlToText2 = _interopRequireDefault(_htmlToText);

var _development = require('../config/env/development');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendEmail = exports.sendEmail = function sendEmail(options) {
    new _promise2.default(function (resolve, reject) {
        var transporter = _nodemailer2.default.createTransport({
            host: _development.devConfig.ethereal.host,
            port: _development.devConfig.ethereal.port,
            auth: {
                user: _development.devConfig.ethereal.username,
                password: _development.devConfig.ethereal.password
            }
        });
        var text = _htmlToText2.default.fromString(options.html, {
            wordwrap: 130
        });
        var mailOptions = {
            from: 'kartikthakre24@gmail.com',
            to: 'thakrekartik92@gmail.com',
            subject: options.subject,
            text: text,
            html: options.html
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return reject(error);
            }
            console.log('Message id', info.messageId);
            console.log('Preview URL', _nodemailer2.default.getTestMessageUrl(info));
            return resolve({ message: 'Reset Email has sent to your inbox' });
        });
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kdWxlcy9tYWlsLmpzIl0sIm5hbWVzIjpbInNlbmRFbWFpbCIsInJlc29sdmUiLCJyZWplY3QiLCJ0cmFuc3BvcnRlciIsIm5vZGVtYWlsZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwiZGV2Q29uZmlnIiwiZXRoZXJlYWwiLCJwb3J0IiwiYXV0aCIsInVzZXIiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidGV4dCIsImh0bWx0b1RleHQiLCJmcm9tU3RyaW5nIiwib3B0aW9ucyIsImh0bWwiLCJ3b3Jkd3JhcCIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwic3ViamVjdCIsInNlbmRNYWlsIiwiZXJyb3IiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2VJZCIsImdldFRlc3RNZXNzYWdlVXJsIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxnQ0FBWSxTQUFaQSxTQUFZLFVBQVU7QUFDOUIsMEJBQVksVUFBQ0MsT0FBRCxFQUFTQyxNQUFULEVBQW9CO0FBQzdCLFlBQU1DLGNBQWNDLHFCQUFXQyxlQUFYLENBQTJCO0FBQzNDQyxrQkFBT0MsdUJBQVVDLFFBQVYsQ0FBbUJGLElBRGlCO0FBRTNDRyxrQkFBT0YsdUJBQVVDLFFBQVYsQ0FBbUJDLElBRmlCO0FBRzNDQyxrQkFDQTtBQUNJQyxzQkFBT0osdUJBQVVDLFFBQVYsQ0FBbUJJLFFBRDlCO0FBRUlDLDBCQUFXTix1QkFBVUMsUUFBVixDQUFtQks7QUFGbEM7QUFKMkMsU0FBM0IsQ0FBcEI7QUFTQSxZQUFNQyxPQUFPQyxxQkFBV0MsVUFBWCxDQUFzQkMsUUFBUUMsSUFBOUIsRUFBbUM7QUFDNUNDLHNCQUFXO0FBRGlDLFNBQW5DLENBQWI7QUFHQSxZQUFNQyxjQUFjO0FBQ2hCQyxrQkFBTywwQkFEUztBQUVoQkMsZ0JBQUssMEJBRlc7QUFHaEJDLHFCQUFVTixRQUFRTSxPQUhGO0FBSWhCVCxzQkFKZ0I7QUFLaEJJLGtCQUFPRCxRQUFRQztBQUxDLFNBQXBCO0FBT0FmLG9CQUFZcUIsUUFBWixDQUFxQkosV0FBckIsRUFBaUMsVUFBQ0ssS0FBRCxFQUFRQyxJQUFSLEVBQWdCO0FBQzdDLGdCQUFHRCxLQUFILEVBQVM7QUFDTCx1QkFBT3ZCLE9BQU91QixLQUFQLENBQVA7QUFDSDtBQUNERSxvQkFBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJGLEtBQUtHLFNBQS9CO0FBQ0FGLG9CQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQnhCLHFCQUFXMEIsaUJBQVgsQ0FBNkJKLElBQTdCLENBQTNCO0FBQ0EsbUJBQU96QixRQUFRLEVBQUM4QixTQUFVLG9DQUFYLEVBQVIsQ0FBUDtBQUNILFNBUEQ7QUFTSCxLQTdCQTtBQStCSixDQWhDTSIsImZpbGUiOiJtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBub2RlbWFpbGVyICBmcm9tICdub2RlbWFpbGVyJztcclxuaW1wb3J0ICBodG1sdG9UZXh0ICBmcm9tICdodG1sLXRvLXRleHQnO1xyXG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tICcuLi9jb25maWcvZW52L2RldmVsb3BtZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kRW1haWwgPSBvcHRpb25zID0+e1xyXG4gICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgICAgICAgICBob3N0IDogZGV2Q29uZmlnLmV0aGVyZWFsLmhvc3QsXHJcbiAgICAgICAgICAgIHBvcnQgOiBkZXZDb25maWcuZXRoZXJlYWwucG9ydCxcclxuICAgICAgICAgICAgYXV0aCA6IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1c2VyIDogZGV2Q29uZmlnLmV0aGVyZWFsLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBkZXZDb25maWcuZXRoZXJlYWwucGFzc3dvcmRcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGh0bWx0b1RleHQuZnJvbVN0cmluZyhvcHRpb25zLmh0bWwse1xyXG4gICAgICAgICAgICB3b3Jkd3JhcCA6IDEzMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgZnJvbSA6ICdrYXJ0aWt0aGFrcmUyNEBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICB0byA6ICd0aGFrcmVrYXJ0aWs5MkBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICBzdWJqZWN0IDogb3B0aW9ucy5zdWJqZWN0LFxyXG4gICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICBodG1sIDogb3B0aW9ucy5odG1sLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMsKGVycm9yLCBpbmZvKSA9PntcclxuICAgICAgICAgICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ01lc3NhZ2UgaWQnICxpbmZvLm1lc3NhZ2VJZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcmV2aWV3IFVSTCcgLG5vZGVtYWlsZXIuZ2V0VGVzdE1lc3NhZ2VVcmwoaW5mbykpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7bWVzc2FnZSA6ICdSZXNldCBFbWFpbCBoYXMgc2VudCB0byB5b3VyIGluYm94J30pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxufSJdfQ==