'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _client = require('../model/client.model');

var _client2 = _interopRequireDefault(_client);

var _httpStatusCodes = require('http-status-codes');

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    create: function create(req, res) {
        var schema = _joi2.default.object().keys({ //useing the Joi middleware for validation
            firstname: _joi2.default.string().required(),
            lastname: _joi2.default.string().required(),
            email: _joi2.default.string().email().required()

        });

        var _Joi$validate = _joi2.default.validate(req.body, schema),
            error = _Joi$validate.error,
            value = _Joi$validate.value;

        if (error && error.details) {
            return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error);
        }
        _client2.default.create(value).then(function (client) {
            return res.json(client);
        }).catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });
    },
    findAll: function findAll(req, res) {
        var client = _client2.default.find().then(function (client) {
            return res.json(client);
        }).catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });
    },
    findOne: function findOne(req, res) {
        var id = req.params.id;

        _client2.default.findById(id).then(function (client) {
            if (!client) {
                return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: 'Could not find any Client' });
            }
            return res.json(client);
        }).catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });
    },
    delete: function _delete(req, res) {
        var id = req.params.id;

        _client2.default.findByIdAndRemove(id).then(function (client) {
            if (!client) {
                return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: 'Could not delete any Client' });
            }
            return res.json(client);
        }).catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });
    },
    update: function update(req, res) {
        var id = req.params.id;

        var schema = _joi2.default.object().keys({
            firstname: _joi2.default.string().optional(),
            lastname: _joi2.default.string().optional(),
            email: _joi2.default.string().email().optional()
        });

        var _Joi$validate2 = _joi2.default.validate(req.body, schema),
            error = _Joi$validate2.error,
            value = _Joi$validate2.value;

        if (error && error.details) {
            return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error);
        }
        _client2.default.findOneAndUpdate({ _id: id }, req.body, { new: true }).then(function (client) {
            return res.json(client);
        }).catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY29udHJvbGxlci9jbGllbnQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJyZXEiLCJyZXMiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJrZXlzIiwiZmlyc3RuYW1lIiwic3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0bmFtZSIsImVtYWlsIiwidmFsaWRhdGUiLCJib2R5IiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwiQ2xpZW50IiwidGhlbiIsImNsaWVudCIsImNhdGNoIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiZXJyIiwiZmluZEFsbCIsImZpbmQiLCJmaW5kT25lIiwiaWQiLCJwYXJhbXMiLCJmaW5kQnlJZCIsIk5PVF9GT1VORCIsImRlbGV0ZSIsImZpbmRCeUlkQW5kUmVtb3ZlIiwidXBkYXRlIiwib3B0aW9uYWwiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwibmV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFHYztBQUNYQSxVQURXLGtCQUNKQyxHQURJLEVBQ0FDLEdBREEsRUFDSTtBQUNWLFlBQU1DLFNBQVNDLGNBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQixFQUF1QjtBQUNwREMsdUJBQVlILGNBQUlJLE1BQUosR0FBYUMsUUFBYixFQURpQjtBQUU3QkMsc0JBQVlOLGNBQUlJLE1BQUosR0FBYUMsUUFBYixFQUZpQjtBQUc3QkUsbUJBQVFQLGNBQUlJLE1BQUosR0FBYUcsS0FBYixHQUFxQkYsUUFBckI7O0FBSHFCLFNBQWxCLENBQWY7O0FBRFUsNEJBT2FMLGNBQUlRLFFBQUosQ0FBYVgsSUFBSVksSUFBakIsRUFBc0JWLE1BQXRCLENBUGI7QUFBQSxZQU9IVyxLQVBHLGlCQU9IQSxLQVBHO0FBQUEsWUFPSUMsS0FQSixpQkFPSUEsS0FQSjs7QUFRVixZQUFH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QUEsWUFPTFcsS0FQSyxrQkFPTEEsS0FQSztBQUFBLFlBT0VDLEtBUEYsa0JBT0VBLEtBUEY7O0FBUVosWUFBR0QsU0FBU0EsTUFBTUUsT0FBbEIsRUFBMEI7QUFDdEIsbUJBQU9kLElBQUllLE1BQUosQ0FBV0MsMEJBQVdDLFdBQXRCLEVBQW1DQyxJQUFuQyxDQUF3Q04sS0FBeEMsQ0FBUDtBQUNIO0FBQ0RPLHlCQUFPaUIsZ0JBQVAsQ0FBd0IsRUFBQ0MsS0FBSVQsRUFBTCxFQUF4QixFQUFpQzdCLElBQUlZLElBQXJDLEVBQTBDLEVBQUMyQixLQUFLLElBQU4sRUFBMUMsRUFDQ2xCLElBREQsQ0FDTTtBQUFBLG1CQUFTcEIsSUFBSWtCLElBQUosQ0FBU0csTUFBVCxDQUFUO0FBQUEsU0FETixFQUVDQyxLQUZELENBRU87QUFBQSxtQkFBT3RCLElBQUllLE1BQUosQ0FBV0MsMEJBQVdPLHFCQUF0QixFQUE2Q0wsSUFBN0MsQ0FBa0RNLEdBQWxELENBQVA7QUFBQSxTQUZQO0FBR0g7QUE3RFMsQyIsImZpbGUiOiJjbGllbnQuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuaW1wb3J0ICBDbGllbnQgIGZyb20gJy4uL21vZGVsL2NsaWVudC5tb2RlbCc7XHJcbmltcG9ydCBIdHRwU3RhdHVzLCB7IElOVEVSTkFMX1NFUlZFUl9FUlJPUiB9IGZyb20gJ2h0dHAtc3RhdHVzLWNvZGVzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgY3JlYXRlKHJlcSxyZXMpeyBcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7ICAgICAgICAgICAgICAgICAgICAgIC8vdXNlaW5nIHRoZSBKb2kgbWlkZGxld2FyZSBmb3IgdmFsaWRhdGlvblxyXG4gICAgICAgICAgICBmaXJzdG5hbWUgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgbGFzdG5hbWUgIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGVtYWlsIDogSm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSwgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLCB2YWx1ZX0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksc2NoZW1hKTtcclxuICAgICAgICBpZihlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgICAgQ2xpZW50LmNyZWF0ZSh2YWx1ZSlcclxuICAgICAgICAudGhlbihjbGllbnQgPT5yZXMuanNvbihjbGllbnQpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICAgIH0sXHJcblxyXG4gICAgIGZpbmRBbGwocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgY2xpZW50ID0gQ2xpZW50LmZpbmQoKVxyXG4gICAgICAgLnRoZW4oY2xpZW50ID0+IHJlcy5qc29uKGNsaWVudCkpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgLmNhdGNoKGVyciA9PnJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7ICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBmaW5kT25lKHJlcSxyZXMpe1xyXG4gICAgICAgIGNvbnN0IHtpZH0gPSByZXEucGFyYW1zO1xyXG4gICAgICAgIENsaWVudC5maW5kQnlJZChpZClcclxuICAgICAgICAudGhlbihjbGllbnQgPT57XHJcbiAgICAgICAgICAgIGlmKCFjbGllbnQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5OT1RfRk9VTkQpLmpzb24oe2VycjogJ0NvdWxkIG5vdCBmaW5kIGFueSBDbGllbnQnfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGNsaWVudCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG5cclxuICAgICBkZWxldGUocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3Qge2lkfSA9IHJlcS5wYXJhbXM7XHJcbiAgICAgICAgQ2xpZW50LmZpbmRCeUlkQW5kUmVtb3ZlKGlkKVxyXG4gICAgICAgIC50aGVuKGNsaWVudCA9PntcclxuICAgICAgICAgICAgaWYoIWNsaWVudCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLk5PVF9GT1VORCkuanNvbih7ZXJyOiAnQ291bGQgbm90IGRlbGV0ZSBhbnkgQ2xpZW50J30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihjbGllbnQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuXHJcbiAgICAgdXBkYXRlKHJlcSxyZXMpe1xyXG4gICAgICAgIGNvbnN0IHtpZH0gPSByZXEucGFyYW1zO1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZpcnN0bmFtZSA6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICAgICAgICBsYXN0bmFtZSAgOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgICAgICAgICAgZW1haWwgOiBKb2kuc3RyaW5nKCkuZW1haWwoKS5vcHRpb25hbCgpICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7ZXJyb3IsIHZhbHVlfSA9IEpvaS52YWxpZGF0ZShyZXEuYm9keSxzY2hlbWEpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICBDbGllbnQuZmluZE9uZUFuZFVwZGF0ZSh7X2lkOmlkfSxyZXEuYm9keSx7bmV3IDp0cnVlfSlcclxuICAgICAgICAudGhlbihjbGllbnQgPT5yZXMuanNvbihjbGllbnQpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICAgIH1cclxufTtcclxuIl19