// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

/**
 * Parses a 'multipart/form-data' upload request
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

// Node.js doesn't have a built-in multipart/form-data parsing library.
// Instead, we can use the 'busboy' library from NPM to parse these requests.
const Busboy = require("busboy");

exports.formSubmit = functions.https.onRequest((req, res) => {
  if (req.method !== "POST") {
    // Return a "method not allowed" error
    return res.status(405).end();
  }

  res.set("Access-Control-Allow-Origin", "*");

  const busboy = new Busboy({ headers: req.headers });

  // This object will accumulate all the fields, keyed by their name
  const fields = {};

  // This object will accumulate all the uploaded files, keyed by their name.

  // This code will process each non-file field in the form.
  busboy.on("field", (fieldname, val) => {
    // TODO(developer): Process submitted field values here
    console.log(`Processed field ${fieldname}: ${val}.`);
    fields[fieldname] = val;
  });

  busboy.on("finish", () => {
    res.send(`${JSON.stringify(fields)}`);
  });

  if (req.rawBody) {
    busboy.end(req.rawBody);
  } else {
    req.pipe(busboy);
  }
});
