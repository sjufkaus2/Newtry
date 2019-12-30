function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var page = getParameterByName('page')


$.ajax({
  url: "https://playentry.org/api/project/find?page=\"" + page + "\"&rows=12",
  crossDomain: true,
  dataType: "jsonp",
  type: 'GET',
  data: "",
  success: function(res) {
    for( var i = 0 ; i < 12; i++ ){
    $("#projects").append(`
    <div class="ui card">
        <div class="image">
            <img src="https://playentry.org/${res.data[i].thumb}">
        </div>
        <div class="content">
          <a class="header" href="https://playentry.org/${res.data[i].user.username}/${res.data[i]._id}">${res.data[i].name}</a>
          <div class="meta">
            <a href="https://playentry.org/${res.data[i].user.username}">${res.data[i].user.username}</a>
           </div>
        </div>
        <div class="extra content">
           <a>
            <i class="like icon"></i>
            ${res.data[i].likeCnt}
          </a>
          &nbsp;&nbsp;&nbsp;
          <a>
           <i class="comment icon"></i>
           ${res.data[i].comment}
          </a>
       </div>
     </div>
    `);
    }
  }
})

var back = Number(page) - 1
var next = Number(page) + 1

if (Number(page) < 2) {
  $("#next").html("<a id=\"next\" href=\"?page=" + next + "\">다음 페이지</a>");
}
if (Number(page) > 1) {
  $("#back").html("<a id=\"back\" href=\"?page=" + back + "\">이전 페이지</a>");
}