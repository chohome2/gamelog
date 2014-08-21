'use strict';

var chart = require('../controllers/chart');

module.exports = function(Chart, app, auth) {

    var apps = require('express')();
    var http = require('http').Server(apps);
    var io = require('socket.io')(http);

    io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    });

    http.listen(3001, function(){
        console.log('listening on *:3001');
    });


    var emitChartData = function(req, res, next) {
        console.log(req.body);
        io.emit('chart ' + req.body.name,req.body);
        next();
    };

    app.route('/chart/:name')
        .get(chart.show)
        .put(emitChartData, chart.create);

};
