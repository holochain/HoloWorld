function entryCreate (entry) {
  var xhr = new XMLHttpRequest()
  var url = '/fn/HoloWorld/entryCreate'
  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
  var data = JSON.stringify({'content': entry, 'timestamp': 101010})
  xhr.send(data)
}
