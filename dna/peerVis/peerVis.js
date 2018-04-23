function genesis() {
  commit("peerLink", {
    Links: [
      {Base: App.DNA.Hash, Tag: "peer", Link: App.Key.Hash}
    ]
  })
  return true
}

function validateCommit() {
  return true
}

function validatePut() {
  return true
}

function validateLink() {
  return true
}

function getPeers() {
  var peers = []
  var possiblePeers = getLinks(App.DNA.Hash, "peer")
  // try contacting each peer
  possiblePeers.forEach(function (p) {
    // try sending a message to peer
    try {
      var res = send(p.Hash, {msg:"hi"})
      // they're online
      peers.push({
        me: p.Hash === App.Key.Hash,
        address: p.Hash
      })
    } catch(e) {}
  })
  return peers
}

function receive(from, msg) {
  return "hi"
}