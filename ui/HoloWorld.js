function taskCreate (task) {
  var xhr = new XMLHttpRequest()
  var url = '/fn/HoloWorld/taskCreate'
  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
  var data = JSON.stringify({'content': task, 'timestamp': 101010})
  xhr.send(data)
}

function taskRead (hash) {
  var xhr = new XMLHttpRequest()
  var url = '/fn/HoloWorld/taskRead'
  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
  var data = JSON.stringify(hash)
  xhr.send(data)
}

function getTasks () {
  var xhr = new XMLHttpRequest()
  var url = '/fn/HoloWorld/getTasks'
  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
  xhr.send()
}
