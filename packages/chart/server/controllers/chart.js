'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Article = mongoose.model('Article'),
    Chart = mongoose.model('Chart'),
    _ = require('lodash');


/**
 * Show an chart data
 */
exports.show = function(req, res) {
    Chart.find({ name : req.param('name')}).sort('time').exec(function(err, chart) {
        if (err) {
            return res.json(500, {
                error: 'Cannot list the chart'
            });
        }
        var ret = [];
        for(var c in chart) {
            ret.push([chart[c].time, chart[c].value]);
        }
        res.json(ret);
    });
};

/**
 * Create an chart data
 */
exports.create = function(req, res) {
    //console.log(req.body);
    var chart = new Chart(req.body);

    chart.save(function(err) {
        if (err) {
            return res.json(500, {
                error: err
            });
        }
        res.json(chart);
    });
};