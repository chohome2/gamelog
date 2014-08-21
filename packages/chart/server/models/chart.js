'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var ChartSchema = new Schema({
    time: {
        type: Number,
        required: true,
        trim: true
        //default: Date.now
    },
    value: {
        type: Number,
        required: true,
        trim: true
    },
    name: {
        type: String,
        //required: true,
        trim: true
    }
});

/**
 * Validations
*/
ChartSchema.path('time').validate(function(time) {
    return !!time;
}, 'Title cannot be blank');

ChartSchema.path('value').validate(function(value) {
    return !!value;
}, 'Content cannot be blank');

ChartSchema.path('name').validate(function(name) {
    return !!name;
}, 'Content cannot be blank');

/**
 * Statics

 ChartSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};
 */
mongoose.model('Chart', ChartSchema);
