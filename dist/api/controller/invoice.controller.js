'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _invoice = require('../model/invoice.model');

var _invoice2 = _interopRequireDefault(_invoice);

var _httpStatusCodes = require('http-status-codes');

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    findAll: function findAll(req, res, next) {
        var _req$query = req.query,
            _req$query$page = _req$query.page,
            page = _req$query$page === undefined ? 1 : _req$query$page,
            _req$query$perPage = _req$query.perPage,
            perPage = _req$query$perPage === undefined ? 10 : _req$query$perPage,
            filter = _req$query.filter,
            sortField = _req$query.sortField,
            sortDir = _req$query.sortDir; //crete option to display records

        var options = {
            page: parseInt(page, 10),
            limit: parseInt(perPage, 10),
            populate: 'client'
        };
        var query = {};
        if (filter) {
            query.item = {
                $regex: filter
            };
        } //filter is use to filter the data
        if (sortField && sortDir) {
            //dynamically sort and filter
            options.sort = (0, _defineProperty3.default)({}, sortField, sortDir);
        }
        console.log(options);
        _invoice2.default.paginate(query, options).then(function (invoice) {
            return res.json(invoice);
        }) //useing paginate() instend of find()
        .catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });
    },
    create: function create(req, res, next) {
        // const error = new Error('Not Found');    //specific URL type middleware to handle the error
        // error.message = "MMAMAMAMA";
        // error.status = 404;
        // next(error);
        var schema = _joi2.default.object().keys({ //useing the Joi middleware for validation
            item: _joi2.default.string().required(),
            qty: _joi2.default.number().integer().required(),
            date: _joi2.default.date().required(),
            due: _joi2.default.date().required(),
            client: _joi2.default.string().required(),
            rate: _joi2.default.number().optional(),
            tax: _joi2.default.number().optional()

        });

        var _Joi$validate = _joi2.default.validate(req.body, schema),
            error = _Joi$validate.error,
            value = _Joi$validate.value;

        if (error && error.details) {
            return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error);
        }
        _invoice2.default.create(value).then(function (invoice) {
            return res.json(invoice);
        }).catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });

        // const {item,qty,date,due,rate,tax} = req.body;
        // if(!item){
        //     return res.status(HttpStatus.BAD_REQUEST).json({err : 'item is required'});         //before use of Joi middleware
        //  }
        // if(!qty){
        //     return res.status(HttpStatus.BAD_REQUEST).json({err : 'qty is required'});      //useing the HTTPstatuscodes
        // }
        // if(!date){
        //     return res.status(HttpStatus.BAD_REQUEST).json({err : 'date is required'});
        // }
        // if(!due){
        //     return res.status(HttpStatus.BAD_REQUEST).json({err : 'due is required'});
        // }
        // if(!rate){
        //     return res.status(HttpStatus.BAD_REQUEST).json({err : 'rate is required'});
        // }
        // if(!tax){
        //     return res.status(HttpStatus.BAD_REQUEST).json({err : 'tax is required'});
        // }
        // Invoice.create({item,qty,date,due,rate,tax})
        // .then(invoice =>res.json(invoice))
        // .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },
    findOne: function findOne(req, res) {
        var id = req.params.id;

        _invoice2.default.findById(id).populate('client').then(function (invoice) {
            if (!invoice) {
                return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: 'Could not find any invoice' });
            }
            return res.json(invoice);
        }).catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });
    },
    delete: function _delete(req, res) {
        var id = req.params.id;

        _invoice2.default.findByIdAndRemove(id).then(function (invoice) {
            if (!invoice) {
                return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: 'Could not delete any invoice' });
            }
            return res.json(invoice);
        }).catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });
    },
    update: function update(req, res) {
        var id = req.params.id;

        var schema = _joi2.default.object().keys({ //useing the Joi middleware
            item: _joi2.default.string().optional(),
            qty: _joi2.default.number().integer().optional(),
            date: _joi2.default.date().optional(),
            due: _joi2.default.date().optional(),
            rate: _joi2.default.number().optional(),
            tax: _joi2.default.number().optional(),
            client: _joi2.default.string().optional()
        });

        var _Joi$validate2 = _joi2.default.validate(req.body, schema),
            error = _Joi$validate2.error,
            value = _Joi$validate2.value;

        if (error && error.details) {
            return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error);
        }
        _invoice2.default.findOneAndUpdate({ _id: id }, req.body, { new: true }).then(function (invoice) {
            return res.json(invoice);
        }).catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY29udHJvbGxlci9pbnZvaWNlLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZmluZEFsbCIsInJlcSIsInJlcyIsIm5leHQiLCJxdWVyeSIsInBhZ2UiLCJwZXJQYWdlIiwiZmlsdGVyIiwic29ydEZpZWxkIiwic29ydERpciIsIm9wdGlvbnMiLCJwYXJzZUludCIsImxpbWl0IiwicG9wdWxhdGUiLCJpdGVtIiwiJHJlZ2V4Iiwic29ydCIsImNvbnNvbGUiLCJsb2ciLCJJbnZvaWNlIiwicGFnaW5hdGUiLCJ0aGVuIiwianNvbiIsImludm9pY2UiLCJjYXRjaCIsInN0YXR1cyIsIkh0dHBTdGF0dXMiLCJJTlRFUk5BTF9TRVJWRVJfRVJST1IiLCJlcnIiLCJjcmVhdGUiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJrZXlzIiwic3RyaW5nIiwicmVxdWlyZWQiLCJxdHkiLCJudW1iZXIiLCJpbnRlZ2VyIiwiZGF0ZSIsImR1ZSIsImNsaWVudCIsInJhdGUiLCJvcHRpb25hbCIsInRheCIsInZhbGlkYXRlIiwiYm9keSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiQkFEX1JFUVVFU1QiLCJmaW5kT25lIiwiaWQiLCJwYXJhbXMiLCJmaW5kQnlJZCIsIk5PVF9GT1VORCIsImRlbGV0ZSIsImZpbmRCeUlkQW5kUmVtb3ZlIiwidXBkYXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsIm5ldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVjO0FBQ1ZBLFdBRFUsbUJBQ0ZDLEdBREUsRUFDRUMsR0FERixFQUNNQyxJQUROLEVBQ1c7QUFBQSx5QkFDNENGLElBQUlHLEtBRGhEO0FBQUEseUNBQ1ZDLElBRFU7QUFBQSxZQUNWQSxJQURVLG1DQUNILENBREc7QUFBQSw0Q0FDQUMsT0FEQTtBQUFBLFlBQ0FBLE9BREEsc0NBQ1UsRUFEVjtBQUFBLFlBQ2NDLE1BRGQsY0FDY0Es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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5pbXBvcnQgIEludm9pY2UgIGZyb20gJy4uL21vZGVsL2ludm9pY2UubW9kZWwnO1xyXG5pbXBvcnQgSHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGZpbmRBbGwocmVxLHJlcyxuZXh0KXtcclxuICAgICAgICBjb25zdCB7cGFnZSA9IDEsIHBlclBhZ2UgPSAxMCwgZmlsdGVyLCBzb3J0RmllbGQsIHNvcnREaXJ9ID0gcmVxLnF1ZXJ5OyAgICAgICAgICAgICAgICAgICAgICAgICAvL2NyZXRlIG9wdGlvbiB0byBkaXNwbGF5IHJlY29yZHNcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBwYWdlIDogcGFyc2VJbnQocGFnZSwxMCksXHJcbiAgICAgICAgICAgIGxpbWl0IDogcGFyc2VJbnQocGVyUGFnZSwxMCksXHJcbiAgICAgICAgICAgIHBvcHVsYXRlIDogJ2NsaWVudCcsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHt9O1xyXG4gICAgICAgIGlmKGZpbHRlcil7XHJcbiAgICAgICAgICAgIHF1ZXJ5Lml0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICRyZWdleCA6IGZpbHRlcixcclxuICAgICAgICB9O1xyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZpbHRlciBpcyB1c2UgdG8gZmlsdGVyIHRoZSBkYXRhXHJcbiAgICAgICAgaWYoc29ydEZpZWxkICYmIHNvcnREaXIpeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2R5bmFtaWNhbGx5IHNvcnQgYW5kIGZpbHRlclxyXG4gICAgICAgICAgICBvcHRpb25zLnNvcnQgPSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NvcnQgZm9yIHNvcnRpbmcgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIFtzb3J0RmllbGRdIDogc29ydERpcixcclxuICAgICAgICAgICAgIH07ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9ucyk7XHJcbiAgICAgICAgSW52b2ljZS5wYWdpbmF0ZShxdWVyeSxvcHRpb25zKVxyXG4gICAgICAgLnRoZW4oaW52b2ljZSA9PiByZXMuanNvbihpbnZvaWNlKSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy91c2VpbmcgcGFnaW5hdGUoKSBpbnN0ZW5kIG9mIGZpbmQoKVxyXG4gICAgICAgLmNhdGNoKGVyciA9PnJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlKHJlcSxyZXMsbmV4dCl7XHJcbiAgICAvLyBjb25zdCBlcnJvciA9IG5ldyBFcnJvcignTm90IEZvdW5kJyk7ICAgIC8vc3BlY2lmaWMgVVJMIHR5cGUgbWlkZGxld2FyZSB0byBoYW5kbGUgdGhlIGVycm9yXHJcbiAgICAvLyBlcnJvci5tZXNzYWdlID0gXCJNTUFNQU1BTUFcIjtcclxuICAgIC8vIGVycm9yLnN0YXR1cyA9IDQwNDtcclxuICAgIC8vIG5leHQoZXJyb3IpO1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHsgICAgICAgICAgICAgICAgICAgICAgLy91c2VpbmcgdGhlIEpvaSBtaWRkbGV3YXJlIGZvciB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIGl0ZW0gOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgcXR5ICA6IEpvaS5udW1iZXIoKS5pbnRlZ2VyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgZGF0ZSA6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgZHVlICA6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgY2xpZW50IDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHJhdGUgOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKSxcclxuICAgICAgICAgICAgdGF4ICA6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLCB2YWx1ZX0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksc2NoZW1hKTtcclxuICAgICAgICBpZihlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgICAgSW52b2ljZS5jcmVhdGUodmFsdWUpXHJcbiAgICAgICAgLnRoZW4oaW52b2ljZSA9PnJlcy5qc29uKGludm9pY2UpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnN0IHtpdGVtLHF0eSxkYXRlLGR1ZSxyYXRlLHRheH0gPSByZXEuYm9keTtcclxuICAgICAgICAvLyBpZighaXRlbSl7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oe2VyciA6ICdpdGVtIGlzIHJlcXVpcmVkJ30pOyAgICAgICAgIC8vYmVmb3JlIHVzZSBvZiBKb2kgbWlkZGxld2FyZVxyXG4gICAgICAgIC8vICB9XHJcbiAgICAgICAgLy8gaWYoIXF0eSl7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oe2VyciA6ICdxdHkgaXMgcmVxdWlyZWQnfSk7ICAgICAgLy91c2VpbmcgdGhlIEhUVFBzdGF0dXNjb2Rlc1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZighZGF0ZSl7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oe2VyciA6ICdkYXRlIGlzIHJlcXVpcmVkJ30pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZighZHVlKXtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbih7ZXJyIDogJ2R1ZSBpcyByZXF1aXJlZCd9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYoIXJhdGUpe1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKHtlcnIgOiAncmF0ZSBpcyByZXF1aXJlZCd9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYoIXRheCl7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oe2VyciA6ICd0YXggaXMgcmVxdWlyZWQnfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIEludm9pY2UuY3JlYXRlKHtpdGVtLHF0eSxkYXRlLGR1ZSxyYXRlLHRheH0pXHJcbiAgICAgICAgLy8gLnRoZW4oaW52b2ljZSA9PnJlcy5qc29uKGludm9pY2UpKVxyXG4gICAgICAgIC8vIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICBmaW5kT25lKHJlcSxyZXMpe1xyXG4gICAgICAgIGNvbnN0IHtpZH0gPSByZXEucGFyYW1zO1xyXG4gICAgICAgIEludm9pY2UuZmluZEJ5SWQoaWQpXHJcbiAgICAgICAgLnBvcHVsYXRlKCdjbGllbnQnKVxyXG4gICAgICAgIC50aGVuKGludm9pY2UgPT57XHJcbiAgICAgICAgICAgIGlmKCFpbnZvaWNlKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuTk9UX0ZPVU5EKS5qc29uKHtlcnI6ICdDb3VsZCBub3QgZmluZCBhbnkgaW52b2ljZSd9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oaW52b2ljZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlKHJlcSxyZXMpe1xyXG4gICAgICAgIGNvbnN0IHtpZH0gPSByZXEucGFyYW1zO1xyXG4gICAgICAgIEludm9pY2UuZmluZEJ5SWRBbmRSZW1vdmUoaWQpXHJcbiAgICAgICAgLnRoZW4oaW52b2ljZSA9PntcclxuICAgICAgICAgICAgaWYoIWludm9pY2Upe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5OT1RfRk9VTkQpLmpzb24oe2VycjogJ0NvdWxkIG5vdCBkZWxldGUgYW55IGludm9pY2UnfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShyZXEscmVzKXtcclxuICAgICAgICBjb25zdCB7aWR9ID0gcmVxLnBhcmFtcztcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7ICAgICAgICAgICAgICAgICAgICAgIC8vdXNlaW5nIHRoZSBKb2kgbWlkZGxld2FyZVxyXG4gICAgICAgICAgICBpdGVtIDogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgICAgICAgIHF0eSAgOiBKb2kubnVtYmVyKCkuaW50ZWdlcigpLm9wdGlvbmFsKCksXHJcbiAgICAgICAgICAgIGRhdGUgOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXHJcbiAgICAgICAgICAgIGR1ZSAgOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXHJcbiAgICAgICAgICAgIHJhdGUgOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKSxcclxuICAgICAgICAgICAgdGF4ICA6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICAgICAgICBjbGllbnQgOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSwgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLCB2YWx1ZX0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksc2NoZW1hKTtcclxuICAgICAgICBpZihlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgICAgSW52b2ljZS5maW5kT25lQW5kVXBkYXRlKHtfaWQ6aWR9LHJlcS5ib2R5LHtuZXcgOnRydWV9KVxyXG4gICAgICAgIC50aGVuKGludm9pY2UgPT5yZXMuanNvbihpbnZvaWNlKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=