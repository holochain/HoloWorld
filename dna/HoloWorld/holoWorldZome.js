'use strict';

// EXPOSED METHODS

// creates a holoWorldEntry entry
function holoWorldEntryCreate (entry) {
  return commit('holoWorldEntry', entry)
}

// retrieves a holoWorldEntry entry
function holoWorldEntryRead (params) {
  // at the moment, to return the entry as JSON
  // we have to use JSON.parse because the entry is a string
  // soon this will be fixed and the JSON.parse can be removed
  debug(params.hash)
  return JSON.parse(get(params.hash))
}

/**
 * Called only when your source chain is generated
 * @return {boolean} success
 */
function genesis() {
  return true;
}

// -----------------------------------------------------------------
//  validation functions for every DHT entry change
// -----------------------------------------------------------------

function validateCommit (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case 'holoWorldEntry':
      // in order for the 'commit' action to work, validateCommit (given a holoWorldEntry) must return true
      // there is no special validation that we have to perform for our simple app
      return true
    default:
      // invalid entry name
      return false
  }
}

function validatePut (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case 'holoWorldEntry':
      return true
    default:
      // invalid entry name
      return false
  }
}

function validateMod (entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case "sampleEntry":
      return false;
    default:
      // invalid entry name
      return false;
  }
}

function validateDel (entryName,hash, pkg, sources) {
  switch (entryName) {
    case "sampleEntry":
      return false;
    default:
      // invalid entry name
      return false;
  }
}

function validatePutPkg (entryName) {
  return null;
}
function validateModPkg (entryName) {
  return null;
}
function validateDelPkg (entryName) {
  return null;
}
