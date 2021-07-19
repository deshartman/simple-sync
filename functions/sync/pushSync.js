/**
 * 
 * @param {*} context 
 * @param {*} event 
 * @param {*} callback 
 * 
 * Push the updated list off numbers back to the store
 */

exports.handler = function (context, event, callback) {

    const response = new Twilio.Response();

    callback(null, response);
}
