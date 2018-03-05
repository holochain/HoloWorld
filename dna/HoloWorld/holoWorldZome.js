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
  return get(params.hash)
}

// uses the bridged function from HoloWorldBridge
function holoWorldBridged (value) {
  var bridges = getBridges()
  if (bridges.length === 0){
    debug('Expecting bridged app HoloWorldBridge, run: hcdev --bridgeTo=../HoloWorldBridge test')
    return null
  }
  var bridgeHash = bridges[0].ToApp
  var bridgedResult = bridge(bridgeHash, 'HoloWorldBridge', 'prependPrefix', value)
  return bridgedResult
}

function bridgeGenesis(side, dna, appData){
  debug('bridgeGenesis Side: ' + side + ' DNA: ' + dna + ' appData: ' + appData)
  return true;
}

// creates a holoWorldEntry entry
function holoWorldEntryCreateAndLinkToAnchor (entry) {
  var hash = commit('holoWorldEntry', entry)
  var anch = addAnchor('user', 'philip')
  debug ('anchor' + anch)
  commit('agent_entry_link', { Links:[{Base: anch, Link: hash, Tag: 'philip'}]})
  return hash
}

function addAnchor(anchorType, anchorText){
  return call('anchors', 'anchor', {anchorType: anchorType, anchorText: anchorText}).replace(/"/g, '');
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
    case 'agent_entry_link':
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
    case 'agent_entry_link':
          // in order for the 'commit' action to work, validateCommit (given a holoWorldEntry) must return true
          // there is no special validation that we have to perform for our simple app
      return true
    default:
      // invalid entry name
      return false
  }
}

function validateMod (entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case "holoWorldEntry":
      return false;
    default:
      // invalid entry name
      return false;
  }
}

function validateDel (entryName,hash, pkg, sources) {
  switch (entryName) {
    case "holoWorldEntry":
      return false;
    default:
      // invalid entry name
      return false;
  }
}

function validateLink(linkingEntryType,baseHash,linkHash,pkg,sources){
    // can only link from my profile
    if (linkingEntryType == 'agent_entry_link' ){
        return true
    }
    return false
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
