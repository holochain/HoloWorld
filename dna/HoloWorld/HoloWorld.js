'use strict';

// -----------------------------------------------------------------
//  This stub Zome code file was auto-generated
// -----------------------------------------------------------------

/**
 * Called only when your source chain is generated
 * @return {boolean} success
 */
function genesis() {
  // any genesis code here
  return true;
}

// -----------------------------------------------------------------
//  validation functions for every DHT entry change
// -----------------------------------------------------------------

/**
 * Called to validate any changes to the DHT
 * @param {string} entryName - the name of entry being modified
 * @param {*} entry - the entry data to be set
 * @param {?} header - ?
 * @param {?} pkg - ?
 * @param {?} sources - ?
 * @return {boolean} is valid?
 */
function validateCommit (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case 'entry':
    case 'entry_links':
      // validation code here
      return true;
    default:
      // invalid entry name!!
      return false;
  }
}

/**
 * Called to validate any changes to the DHT
 * @param {string} entryName - the name of entry being modified
 * @param {*}entry - the entry data to be set
 * @param {?} header - ?
 * @param {?} pkg - ?
 * @param {?} sources - ?
 * @return {boolean} is valid?
 */
function validatePut (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case 'entry':
      // validation code here
      return true;
    default:
      // invalid entry name!!
      return false;
  }
}

/**
 * Called to validate any changes to the DHT
 * @param {string} entryName - the name of entry being modified
 * @param {*} entry- the entry data to be set
 * @param {?} header - ?
 * @param {*} replaces - the old entry data
 * @param {?} pkg - ?
 * @param {?} sources - ?
 * @return {boolean} is valid?
 */
function validateMod (entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case 'entry':
      // validation code here
      return true;
    default:
      // invalid entry name!!
      return false;
  }
}

/**
 * Called to validate any changes to the DHT
 * @param {string} entryName - the name of entry being modified
 * @param {string} hash - the hash of the entry to remove
 * @param {?} pkg - ?
 * @param {?} sources - ?
 * @return {boolean} is valid?
 */
function validateDel (entryName,hash, pkg, sources) {
  switch (entryName) {
    case 'entry':
      // validation code here
    return false;
    default:
      // invalid entry name!!
      return false;
  }
}

/**
 * Called to validate any changes to the DHT
 * @param {?} pkg - ?
 * @param {?} sources - ?
 * @return {boolean} is valid?
 */
function validateLink (linkEntryType, baseHash, links, pkg, sources) {
    switch (linkEntryType) {
    case "entry_links":
        // validation code here
        return true;
    default:
        // invalid entry name!!
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
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */

function entryCreate (entry) {
  var key = commit('entry', entry)        // Commits the entry block to my source chain, assigns resulting hash to 'key'

  if (!isErr(key)) {
      var link_key = commit('entry_links', {Links: [{Base: App.DNA.Hash, Link: key, Tag: 'entry'}]})
      debug(link_key)
  }
  debug(key)
  return key
}

function entryRead (key) {
    var json = get(key)
    debug(json)
  var entry = JSON.parse(json)
  return entry
}

function isErr (result) {
  return ((typeof result === 'object') && result.name === 'HolochainError')
}
