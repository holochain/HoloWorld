/*
  "genesis" is the one function which Holochain requires you to implement for each Zome.
  It is called the first time any individual attempts to run a Holochain application.
  It provides an opportunity for any setup to occur, and any validation rules 
  to check whether the user is able to join the app.
  It must return a boolean (true or false) value, where true 
  allows the user to join the app, and false amounts to an error and does 
  not allow them to join.
  For HoloWorld, we have nothing special to define here, just return true.
*/
function genesis() {
  return true
}

/*
  "validateCommit" is a function which Holochain will call every time that the 
  native function "commit" is called in an application. It is used as a 
  consistent way to check the validity of any entry that an agent is
  attempting to author to their local source chain. It must return true in
  order for the entry to be written. If validateCommit is undefined,
  or returns false, commit will return an error instead of a hash.
  For HoloWorld, we have nothing special to define here, just return true.
*/
function validateCommit() {
  return true
}

/*
  "validatePut" is a function which Holochain will call every time
  that it attempts to add a new entry to its local DHT. 
  Unlike the other functions in this file, the function
  can be triggered as a result of gossiping with other nodes, and being
  told to write a new entry (someone elses or ones own) to its DHT.
  It must return true or false. If false, the entry will not be written.
*/
function validatePut() {
  return true
}

/*
  "holoTextWrite" is a custom function that we declared in our dna.json file.
  It accepts a string of text as its input and writes that text as an entry
  into the local source chain, using the native function "commit". As noted above,
  commit triggers a call to validateCommit which must return true in order
  for the commit to succeed. Commit returns a hash or an error. Either way,
  we return the result of calling commit as the result of the function.
  The first parameter passed to "commit" is the type of entry, and must be one which
  is specified in the Zome configuration in the dna.json file. 
  The second parameter passed to "commit" is the intended entry contents.
*/
function holoTextWrite(text) {
  var hash = commit("holoText", text)
  return hash
}

/*
  "holoTextRead" is a custom function that we declared in our dna.json file.
  It accepts a hash as its input, and tries to look up that hash in the local
  source chain and retrieve the entry and its contents.
*/
function holoTextRead(hash) {
  // "get" is a native function in Holochain
  // Look for the entry in the DHT.
  var holoText = get(hash)
  return holoText
}