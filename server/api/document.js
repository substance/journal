var util = require("./util"),
    _ = require('lodash'),
    express = require('express'),
    documentAPI = express.Router(),
    db = require("../db/index"),
    Document = db.models.Document;


var EMPTY_DOC = {
  "nodes": {
    "document": {
      "title": "New document"
    }
  }
};

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
  Document.create(EMPTY_DOC, user.username, util.out(res, next));
};

// Reading documents collection
// -----------

var listDocuments = function(req, res, next) {
  // TODO: list documents related to current user, pagination
  var user = req.user;
  Document.findAll(util.out(res, next));
};


documentAPI.route('/documents')
  .post(util.checkToken, createDocument)
  .get(util.checkToken, listDocuments);

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
  var documentId = req.params.id;
  Document.get(id, util.out(res, next));
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
  var data = req.body;
  // TODO: In future check JSON if it conforms to a valid Substance document
  Document.update(documentId, data, user.username, util.out(res, next));
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
  .get(util.checkToken, getDocument)
  .put(util.checkToken, updateDocument)
  .delete(util.checkToken, removeDocument);

module.exports = documentAPI;