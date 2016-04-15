function getCurrentTabUrl(callback) {
  debugger;
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });

}

document.addEventListener('DOMContentLoaded', function() {
  debugger;
  getCurrentTabUrl(function(url) {
    alert(url);
  });
});