exports.handler = function (context, event, callback) {

  const response = new Twilio.twiml.VoiceResponse();

  // Grab the numbers list from Sync
  const usersListArray = [
    {
      "index": 0,
      "accountSid": "AC75ca6789a296a3f86c54367a0dc5a11a",
      "serviceSid": "IS6b14a498d1287bf7c5bb9b738d7b80aa",
      "listSid": "ES68d93ad07dfc4b23ad7a33b108510243",
      "url": "https://sync.twilio.com/v1/Services/IS6b14a498d1287bf7c5bb9b738d7b80aa/Lists/ES68d93ad07dfc4b23ad7a33b108510243/Items/0",
      "revision": "2",
      "data": {
        "phone": "+61401277115",
        "busy": false,
        "name": "Des"
      },
      "dateExpires": null,
      "dateCreated": "2021-07-19T01:43:12.000Z",
      "dateUpdated": "2021-07-19T06:56:35.000Z",
      "createdBy": "system"
    },
    {
      "index": 1,
      "accountSid": "AC75ca6789a296a3f86c54367a0dc5a11a",
      "serviceSid": "IS6b14a498d1287bf7c5bb9b738d7b80aa",
      "listSid": "ES68d93ad07dfc4b23ad7a33b108510243",
      "url": "https://sync.twilio.com/v1/Services/IS6b14a498d1287bf7c5bb9b738d7b80aa/Lists/ES68d93ad07dfc4b23ad7a33b108510243/Items/1",
      "revision": "4",
      "data": {
        "phone": "+61405468859",
        "busy": true,
        "name": "Kris"
      },
      "dateExpires": null,
      "dateCreated": "2021-07-19T01:43:41.000Z",
      "dateUpdated": "2021-07-19T06:57:27.000Z",
      "createdBy": "system"
    }
  ]

  const numbers = [];

  usersListArray.forEach(element => {
    if (element.data.busy) {
      console.log(`Busy: ${element.data.busy} - ${element.data.name} is busy, so not calling`);
    } else {
      console.log(`Busy: ${element.data.busy} - Not busy, so calling ${element.data.name}`);

      // response.dial('415-123-4567');

    }
    //console.log(`Entry: ${element.index}, phone: ${element.data.phone} is busy: ${element.data.busy}`);
  });



  callback(null, "Done")
};



/**
 * timeout
Specifying a timeout will set the limit in seconds that <Dial> will wait for the dialed party to answer the call.
This tells Twilio how long to let the call ring before giving up and setting no-answer as the DialCallStatus.
timeout's default value is 30 seconds, the minimum allowed value is five seconds, and the maximum value is 600 seconds.
 */