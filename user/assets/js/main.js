function searchUser() {
  var username = $('#username').val();
  console.log(username)
  location.href = "./view/?user=" + username;
}