'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Chart = new Module('chart');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Chart.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Chart.routes(app, auth, database);
  Chart.aggregateAsset('css', 'chart.css');
  //We are adding a link to the main menu for all authenticated users
  Chart.menus.add({
    title: 'chart example page',
    link: 'chart example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Chart.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Chart.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Chart.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Chart;
});
