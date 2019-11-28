function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var username = getParameterByName('user')

function searchUser() {
  $.ajax({
    url: "https://playentry.org/api/getUserByUsername/" + username,
    crossDomain: true,
    dataType: "jsonp",
    type: 'GET',
    data: "",
    success: function(res) {
      console.log(res.created)
    }
  })
}