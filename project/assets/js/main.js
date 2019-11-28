function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var page = getParameterByName('page')
var category = getParameterByName('category')

var total = $.ajax({
  url: "https://playentry.org/api/project/count/total?noCache=1573480455830",
  crossDomain: true,
  dataType: "jsonp",
  type: 'GET',
  data: ""
})

$.ajax({
  url: "https://playentry.org/api/project/find",
  crossDomain: true,
  dataType: "jsonp",
  type: 'GET',
  data: "",
  success: function(res) {
    console.log(total.responseJSON.count)
    for( var i ; i <= total.responseJSON.count; ++i){
    $("#projects").append("<div class=\"ui card br\"><div class=\"image\"><img class=\"br-top\" src=\"https://playentry.org/" + res[i].project.thumb + "\"></div><div class=\"content\"><a href=\"https://playentry.org/" + res[i].project.user.username + "/" + res[i].project._id + "\" class=\"header\">" + res[i].project.name + "</a><div class=\"meta\"><span class=\"date\">" + res[i].project.user.username + "</span></div></div></div>");
    }
  }
})

var back = Number(page) - 1
var next = Number(page) + 1

if (Number(page) < 2) {
  $("#next").html("<a id=\"next\" href=\"?page=" + next + "?category=" + category + "\">다음 페이지</a>");
}
if (Number(page) > 1) {
  $("#back").html("<a id=\"back\" href=\"?page=" + back + "\">이전 페이지</a>");
}

if (category == "free") {
  $("#free").html("<div class=\"active item\"><a href=\"\">엔이</a></div>");
}