'use strict'

// -----------------------------------------------------------------
//  This stub Zome code file was auto-generated
// -----------------------------------------------------------------

/**
 * Called only when your source chain is generated
 * @return {boolean} success
 */
function genesis () {
  // any genesis code here
  return true
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
    case 'task':
      // validation code here
      return true
    case 'task_links':
            // validation code here
      return true
    default:
      // invalid entry name!!
      return false
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
    case 'task':
      // validation code here
      return true
    case 'task_links':
      // validation code here
      return true
    default:
      // invalid entry name!!
      return false
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
    case 'task':
      // validation code here
      return true
    default:
      // invalid entry name!!
      return false
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
function validateDel (entryName, hash, pkg, sources) {
  switch (entryName) {
    case 'task':
      // validation code here
      return false
    default:
      // invalid entry name!!
      return false
  }
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validatePutPkg (entryName) {
  return true
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

 /**
 * Called to validate any changes to the DHT
 * @param {?} pkg - ?
 * @param {?} sources - ?
 * @return {boolean} is valid?
 */
function validateLink (linkEntryType, baseHash, links, pkg, sources) {
  switch (linkEntryType) {
    case 'task_links':
      // validation code here
      return true
    default:
      // invalid entry name!!
      return false
  }
}

/*
This function saves the task object to your local chain and returns the hash
With that new hash it then creates and entry in the DHT that links the new task object to the
Hash of the application's DNA. This allows us to retrieve all of the "task" objects from the DHT when we
call getTasks below.
The debugs are to show on the terminal screen the hashes and any errors.
*/
function taskCreate (task) {
  debug('App.DNA.Hash ' + App.DNA.Hash)
  var hash = commit('task', task)        // Commits the entry block to my source chain, assigns resulting hash to 'key'
  if (!isErr(hash)) {
    debug('task_links ' + commit('task_links', {Links: [{Base: App.DNA.Hash, Link: hash, Tag: 'task'}]}))
  } else {
    debug('task_links ' + isErr(hash))
  }
  debug(hash)
  return hash
}
/*
The taskRead function uses the hash key of the commited object to get the object from your local chain
and return it as a task object.
*/
function taskRead (hash) {
  debug('hash ' + hash)
  var json = get(hash)
  var task = JSON.parse(json)
  return task
}

/*
This function returns all of the task objects linked the DNA hash for the App.
The {Load: true} arugment tells Holochain to load the data and not just the
hashes for the objects.
*/
function getTasks () {
  var result = getLinks(App.DNA.Hash, 'task', {Load: true})
  if (isErr(result)) {
    return []
  }
  return result
}

function isErr (result) {
  return ((typeof result === 'object') && result.name === 'HolochainError')
}
