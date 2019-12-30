function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var username = getParameterByName('user')

$("#userinfo").append(`
    ${username}
`);

$.ajax({
  url: "https://playentry.org/api/getUserByUsername/" + username,
  crossDomain: true,
  dataType: "jsonp",
  type: 'GET',
  data: "",
  success: function(res) {
      $("#container").append(`
        <iframe class="ui container br" src="https://ent2.ml/entstat/?${res.username}" width="100%" height="240px" frameborder="0">
    `);
    $("#userdesc").append(`
        ${res.description}
    `);
  }
})