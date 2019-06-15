'use strict';


/* dependencies */
const path = require('path');
const { SchemaTypes } = require('@lykmapipo/mongoose-common');
const { expect } = require('@lykmapipo/mongoose-test-helpers');
const { Campaign } = require(path.join(__dirname, '..', '..'));

describe('Campaign Schema', () => {
  it('should have form field', () => {
    const form = Campaign.path('form');

    expect(form).to.exist;
    expect(form).to.be.an.instanceof(SchemaTypes.String);
    expect(form.instance).to.be.equal('String');
    expect(form).to.be.an('object');
    expect(form.options.type).to.be.a('function');
    expect(form.options.type.name).to.be.equal('String');
    expect(form.options.enum).to.exist;
    expect(form.options.enum).to.be.eql(Campaign.FORMS);
    expect(form.options.trim).to.be.true;
    expect(form.options.default).to.exist;
    expect(form.options.index).to.be.true;
    expect(form.options.searchable).to.be.true;
    expect(form.options.taggable).to.be.true;
    expect(form.options.fake).to.exist;
  });

  it('should have title field', () => {
    const title = Campaign.path('title');

    expect(title).to.exist;
    expect(title).to.be.an.instanceof(SchemaTypes.String);
    expect(title.instance).to.be.equal('String');
    expect(title).to.be.an('object');
    expect(title.options.type).to.be.a('function');
    expect(title.options.type.name).to.be.equal('String');
    expect(title.options.trim).to.be.true;
    expect(title.options.index).to.be.true;
    expect(title.options.searchable).to.be.true;
    expect(title.options.fake).to.exist;
  });

  it('should have subject field', () => {
    const subject = Campaign.path('subject');

    expect(subject).to.exist;
    expect(subject).to.be.an.instanceof(SchemaTypes.String);
    expect(subject.instance).to.be.equal('String');
    expect(subject).to.be.an('object');
    expect(subject.options.type).to.be.a('function');
    expect(subject.options.type.name).to.be.equal('String');
    expect(subject.options.trim).to.be.true;
    expect(subject.options.index).to.be.true;
    expect(subject.options.searchable).to.be.true;
    expect(subject.options.fake).to.exist;
  });

  it('should have message field', () => {
    const message = Campaign.path('message');

    expect(message).to.exist;
    expect(message).to.be.an.instanceof(SchemaTypes.String);
    expect(message.instance).to.be.equal('String');
    expect(message).to.be.an('object');
    expect(message.options.type).to.be.a('function');
    expect(message.options.type.name).to.be.equal('String');
    expect(message.options.trim).to.be.true;
    expect(message.options.index).to.be.true;
    expect(message.options.searchable).to.be.true;
    expect(message.options.fake).to.exist;
  });
});