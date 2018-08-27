'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;
const { Message } = require(path.join(__dirname, '..', '..'));


describe('Message Schema', () => {

  it('should have type field', function () {

    const type = Message.schema.path('type');

    expect(type).to.exist;
    expect(type).to.be.an.instanceof(Types.String);
    expect(type.instance).to.be.equal('String');
    expect(type).to.be.an('object');
    expect(type.options.type).to.be.a('function');
    expect(type.options.type.name).to.be.equal('String');
    expect(type.options.enum).to.exist;
    expect(type.options.enum).to.be.eql(Message.TYPES);
    expect(type.options.trim).to.be.true;
    expect(type.options.default).to.exist;
    expect(type.options.index).to.be.true;
    expect(type.options.searchable).to.be.true;
    expect(type.options.fake).to.exist;

  });

  it('should have mime field', function () {

    const mime = Message.schema.path('mime');

    expect(mime).to.exist;
    expect(mime).to.be.an.instanceof(Types.String);
    expect(mime.instance).to.be.equal('String');
    expect(mime).to.be.an('object');
    expect(mime.options.type).to.be.a('function');
    expect(mime.options.type.name).to.be.equal('String');
    expect(mime.options.enum).to.exist;
    expect(mime.options.enum).to.be.eql(Message.MIMES);
    expect(mime.options.trim).to.be.true;
    expect(mime.options.default).to.exist;
    expect(mime.options.index).to.be.true;
    expect(mime.options.searchable).to.be.true;
    expect(mime.options.fake).to.exist;

  });

  it('should have direction field', function () {

    const direction = Message.schema.path('direction');

    expect(direction).to.exist;
    expect(direction).to.be.an.instanceof(Types.String);
    expect(direction.instance).to.be.equal('String');
    expect(direction).to.be.an('object');
    expect(direction.options.type).to.be.a('function');
    expect(direction.options.type.name).to.be.equal('String');
    expect(direction.options.enum).to.exist;
    expect(direction.options.enum).to.be.eql(Message.DIRECTIONS);
    expect(direction.options.trim).to.be.true;
    expect(direction.options.default).to.exist;
    expect(direction.options.index).to.be.true;
    expect(direction.options.searchable).to.be.true;
    expect(direction.options.fake).to.exist;

  });

  it('should have state field', function () {

    const state = Message.schema.path('state');

    expect(state).to.exist;
    expect(state).to.be.an.instanceof(Types.String);
    expect(state.instance).to.be.equal('String');
    expect(state).to.be.an('object');
    expect(state.options.type).to.be.a('function');
    expect(state.options.type.name).to.be.equal('String');
    expect(state.options.enum).to.exist;
    expect(state.options.enum).to.be.eql(Message.STATES);
    expect(state.options.trim).to.be.true;
    expect(state.options.default).to.exist;
    expect(state.options.index).to.be.true;
    expect(state.options.searchable).to.be.true;
    expect(state.options.fake).to.exist;

  });

  it('should have mode field', function () {

    const mode = Message.schema.path('mode');

    expect(mode).to.exist;
    expect(mode).to.be.an.instanceof(Types.String);
    expect(mode.instance).to.be.equal('String');
    expect(mode).to.be.an('object');
    expect(mode.options.type).to.be.a('function');
    expect(mode.options.type.name).to.be.equal('String');
    expect(mode.options.enum).to.exist;
    expect(mode.options.enum).to.be.eql(Message.SEND_MODES);
    expect(mode.options.trim).to.be.true;
    expect(mode.options.default).to.exist;
    expect(mode.options.index).to.be.true;
    expect(mode.options.searchable).to.be.true;
    expect(mode.options.fake).to.exist;

  });

  it('should have sender field', function () {

    const sender = Message.schema.path('sender');

    expect(sender).to.exist;
    expect(sender).to.be.an.instanceof(Types.String);
    expect(sender.instance).to.be.equal('String');
    expect(sender).to.be.an('object');
    expect(sender.options.type).to.be.a('function');
    expect(sender.options.type.name).to.be.equal('String');
    expect(sender.options.trim).to.be.true;
    expect(sender.options.lowercase).to.be.true;
    expect(sender.options.index).to.be.true;
    expect(sender.options.searchable).to.be.true;
    expect(sender.options.fake).to.exist;

  });

  //TODO to, cc, bcc

  it('should have subject field', function () {

    const subject = Message.schema.path('subject');

    expect(subject).to.exist;
    expect(subject).to.be.an.instanceof(Types.String);
    expect(subject.instance).to.be.equal('String');
    expect(subject).to.be.an('object');
    expect(subject.options.type).to.be.a('function');
    expect(subject.options.type.name).to.be.equal('String');
    expect(subject.options.trim).to.be.true;
    expect(subject.options.index).to.be.true;
    expect(subject.options.searchable).to.be.true;
    expect(subject.options.fake).to.exist;

  });

  it('should have body field', function () {

    const body = Message.schema.path('body');

    expect(body).to.exist;
    expect(body).to.be.an.instanceof(Types.String);
    expect(body.instance).to.be.equal('String');
    expect(body).to.be.an('object');
    expect(body.options.type).to.be.a('function');
    expect(body.options.type.name).to.be.equal('String');
    expect(body.options.trim).to.be.true;
    expect(body.options.index).to.be.true;
    expect(body.options.searchable).to.be.true;
    expect(body.options.fake).to.exist;

  });

  it('should have sentAt field', function () {

    const sentAt = Message.schema.path('sentAt');

    expect(sentAt).to.exist;
    expect(sentAt).to.be.an.instanceof(Types.Date);
    expect(sentAt.instance).to.be.equal('Date');
    expect(sentAt).to.be.an('object');
    expect(sentAt.options.type).to.be.a('function');
    expect(sentAt.options.type.name).to.be.equal('Date');
    expect(sentAt.options.index).to.be.true;
    expect(sentAt.options.fake).to.exist;

  });

  it('should have failedAt field', function () {

    const failedAt = Message.schema.path('failedAt');

    expect(failedAt).to.exist;
    expect(failedAt).to.be.an.instanceof(Types.Date);
    expect(failedAt.instance).to.be.equal('Date');
    expect(failedAt).to.be.an('object');
    expect(failedAt.options.type).to.be.a('function');
    expect(failedAt.options.type.name).to.be.equal('Date');
    expect(failedAt.options.index).to.be.true;
    expect(failedAt.options.fake).to.exist;

  });

  it('should have deliveredAt field', function () {

    const deliveredAt = Message.schema.path('deliveredAt');

    expect(deliveredAt).to.exist;
    expect(deliveredAt).to.be.an.instanceof(Types.Date);
    expect(deliveredAt.instance).to.be.equal('Date');
    expect(deliveredAt).to.be.an('object');
    expect(deliveredAt.options.type).to.be.a('function');
    expect(deliveredAt.options.type.name).to.be.equal('Date');
    expect(deliveredAt.options.index).to.be.true;
    expect(deliveredAt.options.fake).to.exist;

  });

  it('should have result field', function () {

    const result = Message.schema.path('result');

    expect(result).to.exist;
    expect(result).to.be.an.instanceof(Types.Mixed);
    expect(result.instance).to.be.equal('Mixed');
    expect(result).to.be.an('object');
    expect(result.options.type).to.be.a('function');
    expect(result.options.type.name).to.be.equal('Mixed');
    expect(result.options.fake).to.exist;

  });

});