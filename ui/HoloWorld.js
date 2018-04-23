// create the ui-facing function that allows the creation of a holoText entry
// create a new XML-formatted http request.  POST to the url with json data
// entry, a timestamp, and a callback function.
function holoWorldEntryCreate (entry, callback) {

  // url to POST request to 
  var url = '/fn/HoloWorld/holoWorldEntryCreate'

  // create a new request, which will be a POST to the url above, with JSON data
  var xhr = new XMLHttpRequest()
  xhr.open('Post', url, true)
  xhr.setRequestHeader('Content-type', 'application/json')

  // add the given callback to the request to be called when its state changes.
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText)
    }
  }

  // ensure that the Date.now object is initialized
  // https://stackoverflow.com/a/221297/3972042
  //if (!Date.now) {
        //Date.now = function() { return new Date().getTime(); }
  //}

  // format the data and send it via the constructed request
  var data = JSON.stringify({'content': entry, 'timestamp': Date.now()})
  xhr.send(data)
}

// create the ui-facing function that allows reading a holoText entry
// create a new XML-formatted http request.  POST to the url with the hash
// and a callback function to be called on the retrieved entry
function holoWorldEntryRead (hash, callback) {

  // the url to post to
  var url = '/fn/HoloWorld/holoWorldEntryRead'
  
  // create the new request object & configure it to POST json data to url 
  var xhr = new XMLHttpRequest()
  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-type', 'application/json')

  // add a callback function to be called on the response 
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText)
    }
  }

  // format and send the hash through the request.
  var data = JSON.stringify(hash)
  xhr.send(data)
}
