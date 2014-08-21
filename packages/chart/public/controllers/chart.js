'use strict';

angular.module('mean.chart').controller('ChartController', ['$scope', 'Global', 'Chart',
    function($scope, Global, Chart) {
        $scope.global = Global;
        $scope.package = {
            name: 'chart'
        };

        $.getJSON('/chart/sample', function(data) {
            // Create the chart
            $('#container').highcharts('StockChart', {
                chart : {
                    events : {
                        load : function () {
                            var series = this.series[0];
                            Chart.on('chart sample', function(data){
                                console.log(data);
                                series.addPoint([data.time, data.value], true, true);
                            });
                        }
                    }
                },
                rangeSelector : {
                    selected : 1,
                    inputEnabled: $('#container').width() > 480
                },
                title : {
                    text : 'AAPL Stock Price'
                },
                series : [{
                    name : 'AAPL',
                    data : data,
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            });
        });
    }
]);
