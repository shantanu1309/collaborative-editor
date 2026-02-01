const { Schema, model } = require("mongoose");

// This defines the "shape" of your data in the database
const DocumentSchema = new Schema({
  // _id will be the unique ID for each document (e.g., "my-first-doc")
  _id: String,
  // data will store the actual text and formatting from the Quill editor
  data: Object,
});

// We export this so we can use it in server.js to find/save documents
module.exports = model("Document", DocumentSchema);