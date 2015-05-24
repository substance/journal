var Substance = require("substance");
var Article = require('../article');
var EXAMPLE_DOC = require("../../data/sample_doc");
var _ = require("substance/helpers");

// TODO: persist session, so we don't need to reauthenticate each time

var Backend = function(opts) {
  this.session = null;

  // this.authenticate(null, null, function() {});
};

Backend.Prototype = function() {

  // Document
  // ------------------

  this.getDocument = function(documentId, cb) {
    var doc = new Article(EXAMPLE_DOC);
    window.doc = doc;
    cb(null, doc);
  };

  this.saveDocument = function(doc, cb) {
    cb(new Error("Saving not supported in dev mode"));
  };

  this.authenticate = function(username, password, cb) {
    var self = this;

    $.ajax({
      type: "POST",
      url: "/api/authenticate",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({
        "email": username,
        "password": password
      }),
      dataType: "json",
      success: function(data, textStatus) {
        self.session = {
          token: data.token,

          // Michael, you can do atob(data.split('.')[1]) to get real user data from server
          user: {
            email: "x@y.com",
            name: "Michael Aufreiter"
          }
        };

        cb(null, self.session);
      },
      error: function(err) {
        console.error(err);
        cb(err.responseText);
      }
    });
  };

  this.logout = function(cb) {
    this.session = null;
    cb(null);
  };

  this.isAuthenticated = function() {
    return !!this.session;
  };

  // Get user information of currently logged in user
  this.getUser = function() {
    return this.session.user;
  };
};

Substance.initClass(Backend);

module.exports = Backend;