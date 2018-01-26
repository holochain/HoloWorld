'use strict';

// CUSTOM METHOD IMPLEMENTATIONS

/**
 * Called to create a new holoWorld entry
 * @param {object} entry - the entry object, containing 'content' and 'stamp' properties
 * @return {string} the hash of the new commited entry
 */
function holoWorldEntryCreate (entry) {
  return commit('holoWorldEntry', entry)
}

/**
 * Called to retrieve an existing holoWorld entry
 * @param {string} hash - the hash of the entry to retrieve
 * @return {object} the holoWorld entry object
 */
function holoWorldEntryRead (hash) {
  // at the moment, we have to parse the response
  // this won't be true for much longer, it will be a json object
  return JSON.parse(get(hash))
}

// -----------------------------------------------------------------
//  validation functions for every DHT entry change, called automatically by holochain
// -----------------------------------------------------------------

function validateCommit (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case 'holoWorldEntry':
      // there is no complex validation to do in this case, just return true
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validatePut (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case 'holoWorldEntry':
      // there is no complex validation to do in this case, just return true
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateMod (entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case 'holoWorldEntry':
      // there is no complex validation to do in this case, just return true
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateDel (entryName,hash, pkg, sources) {
  switch (entryName) {
    case 'holoWorldEntry':
      // there is no complex validation to do in this case, just return true
      return true;
    default:
      // invalid entry name
      return false;
  }
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validatePutPkg (entryName) {
  return null;
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validateModPkg (entryName) {
  return null;
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validateDelPkg (entryName) {
  return null;
}

/**
 * Called only when your source chain is generated
 * @return {boolean} success
 */
function genesis() {
  return true;
}
