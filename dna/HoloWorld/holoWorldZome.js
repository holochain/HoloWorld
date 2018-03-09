'use strict';

// EXPOSED METHODS

// creates a holoWorldEntry entry
function holoWorldEntryCreate(entry) {
  return commit('holoWorldEntry', entry);
}

// retrieves a holoWorldEntry entry
// @param  data  { hash: string }  JSON object sent from UI with hash of entry to retrieve
function holoWorldEntryRead(data) {
  return get(data.hash);
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

function validateCommit(entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case 'holoWorldEntry':
      // in order for the 'commit' action to work, validateCommit (given a holoWorldEntry) must return true
      // there is no special validation that we have to perform for our simple app
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validatePut(entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case 'holoWorldEntry':
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateMod(entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case 'sampleEntry':
      return false;
    default:
      // invalid entry name
      return false;
  }
}

function validateDel(entryName, hash, pkg, sources) {
  switch (entryName) {
    case 'sampleEntry':
      return false;
    default:
      // invalid entry name
      return false;
  }
}

function validatePutPkg(entryName) {
  return null;
}
function validateModPkg(entryName) {
  return null;
}
function validateDelPkg(entryName) {
  return null;
}
