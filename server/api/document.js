var util = require("./util"),
    _ = require('lodash'),
    express = require('express'),
    documentAPI = express.Router(),
    db = require("../db/index"),
    Document = db.models.Document;

var SAMPLE_DOC = require("../../data/sample_doc");

// console.log('SAMPLE DOC', SAMPLE_DOC);
// var EMPTY_DOC = {
//   "nodes": {
//     "document": {
//       "title": "New document"
//     }
//   }
// };

// Document API
// ===================
//
// REST API for creating, reading, updating and deleting documents


// Create an empty document
// -----------
// 
// POST /api/documents
// 
// 
// Response:
// 
// Status: 200 OK
// 
// {
//   "id": "3a0f86f", // generated by server
//   "data": "SUBSTANCE_DOC_JSON",
//   "created_at": "2015-05-17T15:39:52.403Z",
//   "updated_at": "2015-05-17T15:39:52.403Z",
//   "url": "/docuemnt/3a0f86f"
// }

var createDocument = function(req, res, next) {
  var user = req.user;
  Document.create(SAMPLE_DOC, user.username, util.out(res, next));
};

// Reading documents collection
// -----------

var listDocuments = function(req, res, next) {
  // TODO: enable util.out again so we have it shorter
  // Document.findAll(util.out(res, next));
  var options = {};
  var user = req.user;

  if(_.isUndefined(user)) {
    options.publishedOnly = true;
  }
  Document.find(options, util.out(res, next));
};


documentAPI.route('/documents')
  .post(util.checkToken, createDocument)
  .get(util.checkAuth, listDocuments);

// Reading an existing document
// -----------
// 
// GET /api/documents/:id
// 
// 
// Response:
// 
// Status: 200 OK
// 
// {
//   "id": "3a0f86f", // generated by server
//   "data": "SUBSTANCE_DOC_JSON",
//   "created_at": "2015-05-17T15:39:52.403Z",
//   "updated_at": "2015-05-17T15:39:52.403Z",
//   "url": "/docuemnt/3a0f86f"
// }

var getDocument = function(req, res, next) {
  console.log('getting document');

  var options = {};
  var user = req.user;
  var documentId = req.params.id;

  if(_.isUndefined(user)) {
    options.publishedOnly = true;
  }

  Document.get(documentId, options, util.out(res, next));
};

// Update an existing document
// -----------
// 
// PUT /api/documents/:id
// 
// Input:
// 
// {
//   data: "SUBSTANCE_DOC_JSON"
// }
// 
// Response:
// 
// Status: 200 OK
// 
// {
//   "id": "3a0f86f", // generated by server
//   "data": "SUBSTANCE_DOC_JSON",
//   "created_at": "2015-05-17T15:39:52.403Z",
//   "updated_at": "2015-05-17T15:39:52.403Z",
//   "url": "/docuemnt/3a0f86f"
// }

var updateDocument = function(req, res, next) {
  var user = req.user;
  var documentId = req.params.id;

  // TODO daniel: we must ensure we get the doc in JSON format here,
  // which should be the case when using application/json right?
  // Daniel: I believe it will not pass data in other format
  var docData = req.body;

  Document.update(documentId, docData, user.username, util.out(res, next));
};


// Delete document
// -----------
// 
// Response:
// 
// Status: 200 OK

var removeDocument = function(req, res, next) {
  var user = req.user;
  var documentId = req.params.id;
  Document.remove(documentId, user.username, util.out(res,next));
};


documentAPI.route('/documents/:id')
  // Disabled checkToken just for the moment. We need to do
  // some checking here if the doc has been published (everybody has access)
  // vs. draft docs (only logged in users get the result)
  .get(util.checkAuth, getDocument)
  .put(util.checkToken, updateDocument)
  .delete(util.checkToken, removeDocument);

module.exports = documentAPI;