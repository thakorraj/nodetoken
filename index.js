var outlook = require('node-outlook');

var newEvent = {
  "Subject": "Discuss the Calendar REST API",
  "Body": {
      "ContentType": "HTML",
      "Content": "I think it will meet our requirements!"
  },
  // "Start": {
  //   "DateTime": "2014-02-02T18:00:00",
  //   "TimeZone": "Pacific Standard Time"
  // }.
  "Start": "2020-04-10T16:30:00.000645Z",
  "End": "2020-04-10T17:30:00.0002024Z",
  
  "Attendees":[
    {
      "EmailAddress": {
        "Address": "kevin.doig@humber.ca",
        "Name": "Janet Schorr"
      }
    }
  ],
  // "Location":{
  //     "DisplayName":"Humber"
  // },
  
};


let createEventParameters = {
    token: ['EwBwA+l3BAAUFFpUAo7J3Ve0bjLBWZWCclRC3EoAAZ85uXGNmgYI4grHnDn1bzigXz3249dBWts+Z9BKfQ8jFGbpZgne567XsK8UthCNXoc5W60zSqhjUp+zo5srfkuf9OozBgS7xF58qgMp7wu+kyfU531glKZ3Em2oYC53CqdaSxsdpwZwU2E/uZ7iLtRF3bcOS62+50SJXFdxWq6FuVcRmE+5jAEw2yGSBpxZZDFtdjHA8Js4XQILVgUlRuXT9v8zuxQdCbYoJCRpzLQhU65gwPLFnAFZNkEGzmCIIXi3Dm1fmtGQ3Wpsg5i/hHOd7bTPV+XlE8Vc5QC6VaayVsBIJPWm37/m2bV2W9qQwvWkKw2halD/99+SkKiK1RYDZgAACOo3Xq0dAVFbQALtVkTIhveXPVnaKzZJkUDgI1hifss86rvn7CnKhhtSkomwCZWddYdf8HC3TfdjuE+yWStGX0zWB35WbHHn46LyDWqZvQlr6wGKfHCI76T53mFEHvOGu/gEZWa3qJFXbijm8our6wvv4feDOxC78PFqQof83I+G7W29Er7K7++6/CCtLiCkKDyj9omQ/Zujk1zgYgcgedevPpYTIilvP5VE6jZ69jDLDpvWJXYyU0IbkfnW0ZKgr+H5sJ7IPBq1X+lzANuNIdjHP/D+R+F14L9ZWNhWU6OVZwm5b7dIDVn3i1nWOLz179D1IgW7yTnot56i9E/SajUli/5TU/mSocAyfSAeYZ1bqMDAPLlWjHmZRJlytUZd6FJPMT/H7i/Kzs0OsHI2gwOMXglEmkz9vHMiW4cUjxSjL7B28+Ax0GuJwfqtndj9uVxyFdKx9lXKgpBM2+RryDpFhpkR/NnS625CxvNW7Y2zB4Uwx99C6CghPhXc+RU6L3PQMaXYRxibq+d5+N7wu7SmLZp5L5MEwt+1rTLmsHDVyGMbnRTrhxOCqWYAZI2lZ45jeWa1RycDyLwWmlCxOknnCpAzGJ+L59p5GmJIFHMgGU2DAQEEYbnCoG1N0pNIwspBnQ4jhdffXeSZYIxSVX4hWz1rVzCD2P+mkcxTVzuKrVB4vPC9i/PDKQDJStUu6N0WgFrg8e1oflgFX6IaoV+1xOjKNQwkQPMOaFnp8nEZqJ/60XkoDUTalyslP9tnOYeEtNOqltsGFtVuAg=='],
    event: newEvent
};
outlook.calendar.createEvent(createEventParameters, function (error, event) {
    if(error) {
        console.log(error);                 
    } else {
        console.log(event);                         
    }
});
// var outlookClient = new outlook.Microsoft.OutlookServices.Client('https://outlook.office.com/api/v2.0',
//   authHelper.getAccessTokenFn('https://outlook.office.com/', session));

// var queryParams = {
//     '$select': 'Subject,ReceivedDateTime,From',
//     '$orderby': 'ReceivedDateTime desc',
//     '$top': 10
//   };
   
//   // Set the API endpoint to use the v2.0 endpoint
//   outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');
//   // Set the anchor mailbox to the user's SMTP address
//   outlook.base.setAnchorMailbox("rajthakor98@outlook.com");
//    var token=""
//   outlook.mail.getMessages({token: token, odataParams: queryParams},
//     function(error, result){
//       if (error) {
//         console.log('getMessages returned an error: ' + error);
//       }
//       else if (result) {
//         console.log('getMessages returned ' + result.value.length + ' messages.');
//         result.value.forEach(function(message) {
//           console.log('  Subject: ' + message.Subject);
//           var from = message.From ? message.From.EmailAddress.Name : "NONE";
//           console.log('  From: ' + from);
//           console.log('  Received: ' + message.ReceivedDateTime.toString());
//         });
//       }
//     });