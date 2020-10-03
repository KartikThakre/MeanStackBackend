'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var InvoiceSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    due: {
        type: Date,
        required: true
    },
    rate: {
        type: Number
    },
    tax: {
        type: Number
    },
    client: {
        ref: 'Client',
        type: Schema.Types.ObjectId,
        required: true
    }
});
InvoiceSchema.plugin(_mongoosePaginate2.default); //useing paginate plugin
exports.default = _mongoose2.default.model('Invoice', InvoiceSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWwvaW52b2ljZS5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIkludm9pY2VTY2hlbWEiLCJpdGVtIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicXR5IiwiTnVtYmVyIiwiZGF0ZSIsIkRhdGUiLCJkdWUiLCJyYXRlIiwidGF4IiwiY2xpZW50IiwicmVmIiwiVHlwZXMiLCJPYmplY3RJZCIsInBsdWdpbiIsIm1vbmdvb3NlUGFnaW5hdGUiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTUEsU0FBU0MsbUJBQVNELE1BQXhCO0FBQ0EsSUFBTUUsZ0JBQWdCLElBQUlGLE1BQUosQ0FBVztBQUM3QkcsVUFBTTtBQUNGQyxjQUFPQyxNQURMO0FBRUZDLGtCQUFXO0FBRlQsS0FEdUI7QUFLN0JDLFNBQUs7QUFDREgsY0FBT0ksTUFETjtBQUVERixrQkFBVztBQUZWLEtBTHdCO0FBUzdCRyxVQUFPO0FBQ0hMLGNBQU9NLElBREo7QUFFSEosa0JBQVc7QUFGUixLQVRzQjtBQWE3QkssU0FBSztBQUNEUCxjQUFPTSxJQUROO0FBRURKLGtCQUFXO0FBRlYsS0Fid0I7QUFpQjdCTSxVQUFNO0FBQ0ZSLGNBQU9JO0FBREwsS0FqQnVCO0FBb0I3QkssU0FBSTtBQUNBVCxjQUFPSTtBQURQLEtBcEJ5QjtBQXVCN0JNLFlBQU87QUFDSEMsYUFBSyxRQURGO0FBRUhYLGNBQU1KLE9BQU9nQixLQUFQLENBQWFDLFFBRmhCO0FBR0hYLGtCQUFXO0FBSFI7QUF2QnNCLENBQVgsQ0FBdEI7QUE2QkFKLGNBQWNnQixNQUFkLENBQXFCQywwQkFBckIsRSxDQUE0QztrQkFDN0JsQixtQkFBU21CLEtBQVQsQ0FBZSxTQUFmLEVBQXlCbEIsYUFBekIsQyIsImZpbGUiOiJpbnZvaWNlLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IG1vbmdvb3NlUGFnaW5hdGUgZnJvbSAnbW9uZ29vc2UtcGFnaW5hdGUnO1xyXG5cclxuXHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuY29uc3QgSW52b2ljZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgaXRlbSA6e1xyXG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQgOiB0cnVlLFxyXG4gICAgfSwgXHJcbiAgICBxdHkgOntcclxuICAgICAgICB0eXBlIDogTnVtYmVyLFxyXG4gICAgICAgIHJlcXVpcmVkIDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBkYXRlIDoge1xyXG4gICAgICAgIHR5cGUgOiBEYXRlLFxyXG4gICAgICAgIHJlcXVpcmVkIDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBkdWUgOntcclxuICAgICAgICB0eXBlIDogRGF0ZSxcclxuICAgICAgICByZXF1aXJlZCA6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgcmF0ZSA6e1xyXG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXHJcbiAgICB9LFxyXG4gICAgdGF4OntcclxuICAgICAgICB0eXBlIDogTnVtYmVyLCAgICBcclxuICAgIH0sXHJcbiAgICBjbGllbnQ6e1xyXG4gICAgICAgIHJlZiA6J0NsaWVudCcsXHJcbiAgICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgICAgIHJlcXVpcmVkIDogdHJ1ZSxcclxuICAgIH1cclxufSk7XHJcbkludm9pY2VTY2hlbWEucGx1Z2luKG1vbmdvb3NlUGFnaW5hdGUpOyAgICAgLy91c2VpbmcgcGFnaW5hdGUgcGx1Z2luXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKCdJbnZvaWNlJyxJbnZvaWNlU2NoZW1hKTsiXX0=