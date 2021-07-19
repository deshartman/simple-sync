/**
 *
 * @param {*} context
 * @param {*} event
 * @param {*} callback
 *
 * Pull the current list off numbers from the store
*/

//const { Twilio } = require("twilio");

exports.handler = async function (context, event, callback) {
    // Fetch already initialized Twilio REST client
    const twilioClient = context.getTwilioClient();

    const { SYNC_LIST_SID, SYNC_SERVICE_SID } = context;



    // Fetch all the List items
    try {
        const syncListItems = await twilioClient.sync.services(SYNC_SERVICE_SID)
            .syncLists(SYNC_LIST_SID)
            .syncListItems
            .list({ limit: 20 });

        // Process the items to extract the data, where a user is free
        return callback(null, `Sync Service worked ${JSON.stringify(syncListItems, null, 4)}`);
    } catch (error) {
        console.log(`Error occured ${error}`);
        return callback(error);
    }
}
