// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/',
  base64encode: 'https://nexgen.influxiq.com/php/index.php?encode=encodefile',
  uploadurl: 'http://nexgen.influxiq.com/php/index.php',
  // nodesslurl : 'https://dev.api.influxhostserver.com/',
  nodesslurl : 'https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/',
  download_url : 'https://api.influxhostserver.com/download',
  inventory_url : 'https://marketcheck-prod.apigee.net/v1/search?api_key=',
  inventory__auto_completeurl : 'https://marketcheck-prod.apigee.net/v1/search/auto-complete?api_key=', 
  inventory_url_api : 'XbXdzXVQKzczQH5xHZmgTJ0rBhigADov',
  share_link : 'http://localhost:4200/',
  Meta_image_url : 'https://dev.probidauto.com/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
