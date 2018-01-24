function holoWorldEntryCreate (task, callback) {
  var xhr = new XMLHttpRequest()
  var url = '/fn/HoloWorld/holoWorldEntryCreate'
  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText))
    }
  }
  var data = JSON.stringify({'content': task, 'timestamp': 101010})
  xhr.send(data)
}

function holoWorldEntryRead (hash, callback) {
  var xhr = new XMLHttpRequest()
  var url = '/fn/HoloWorld/holoWorldEntryRead'
  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText))
    }
  }
  var data = JSON.stringify(hash)
  xhr.send(data)
}
