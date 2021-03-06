'use strict';

/* dependencies */
const path = require('path');
// const { expect } = require('chai');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { Message } = require(path.join(__dirname, '..', '..'));
let messages = [];

describe('Message#requeue', () => {
  before(done => clear(done));

  before(done => {
    const message = Message.fakeExcept('deliveredAt');
    messages = messages.concat(message);
    message.post(done);
  });

  it.skip('should be able to requeue messages');

  after(done => clear(done));
});
