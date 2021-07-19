/**
 *
 * @param {*} context
 * @param {*} event
 * @param {*} callback
 *
 * Pull the current list off numbers from the store
*/

exports.handler = function (context, event, callback) {

    const response = new Twilio.Response();

    callback(null, response);
}
