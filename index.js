'use strict';


/* dependencies */
const _ = require('lodash');
const { getString } = require('@lykmapipo/env');
const kue = require('kue');
const { listen } = require('@lykmapipo/kue-common');
const { worker } = require('mongoose-kue');
const Message = require('./lib/message.model');
const Campaign = require('./lib/campaign.model');
const common = require('./lib/common');


/* constants */
const { TYPE_EMAIL, TYPE_SMS, TYPE_PUSH } = Message;
const DEFAULT_SMTP_TRANSPORT_NAME = getString('DEFAULT_SMTP_TRANSPORT_NAME');
const DEFAULT_SMS_TRANSPORT_NAME = getString('DEFAULT_SMS_TRANSPORT_NAME');
const DEFAULT_PUSH_TRANSPORT_NAME = getString('DEFAULT_PUSH_TRANSPORT_NAME');


/**
 * @module postman
 * @name postman
 * @description collective notifications for nodejs
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 1.0.0
 * @public
 */
function postman() {

}

/* export postman campaign model */
postman.Campaign = Campaign;


/* export postman message model */
postman.Message = Message;


/* export postman email message factory */
postman.Email = function Email(payload) {
  const _payload =
    _.merge({}, payload, { transport: DEFAULT_SMTP_TRANSPORT_NAME, type: TYPE_EMAIL });
  return new Message(_payload);
};


/* export postman sms message factory */
postman.SMS = function SMS(payload) {
  const _payload =
    _.merge({}, { transport: DEFAULT_SMS_TRANSPORT_NAME }, payload, { type: TYPE_SMS });
  return new Message(_payload);
};


/* export postman push message factory */
postman.Push = function Push(payload) {
  const _payload =
    _.merge({}, { transport: DEFAULT_PUSH_TRANSPORT_NAME }, payload, { type: TYPE_PUSH });
  return new Message(_payload);
};


/* export postman utils */
postman.utils = require('./lib/utils');


/* export postman worker */
postman.worker = worker;


/* export postman http server */
postman.httpServer = kue.app;


/* export http server listen */
postman.listen = listen;


/* export common constants */
_.forEach(common, (value, key) => {
  postman[key] = value;
});


/* export postman */
module.exports = exports = postman;