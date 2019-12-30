function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var page = getParameterByName('page')
var category = getParameterByName('category')

$.ajax({
  url: "https://playentry.org/api/discuss/find?category=" + category + "&sort=created&noCache=1515927646938&page=" + page + "&rows=500",
  crossDomain: true,
  dataType: "jsonp",
  type: 'GET',
  data: "",
  success: function(res) {
      for (var i = 0; i < 500; i++) {
          $("#table").append("<tr><td class=\"left aligned\">" + res.data[i].number + "</td><td class=\"left aligned\"><a href=\"" + "./read/?id=" + res.data[i]._id + "&category=" + category + "\">" + res.data[i].title + "</a></td><td class=\"left aligned\">" + res.data[i].owner + "</td><td class=\"left aligned\">" + res.data[i].created.substring(0, 10) + "</td></tr>");
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

if (category == "") {
  window.location.href = "./?page=1&category=free"
}
if (category == "free") {
  $("#free").html("<div class=\"active item\"><a href=\"/commu\">엔이</a></div>");
}
if (category == "qna") {
  $("#qna").html("<div class=\"active item\"><a href=\"/commu\">묻답</a></div>");
}
if (category == "tips") {
  $("#tips").html("<div class=\"active item\"><a href=\"/commu\">노팁</a></div>");
}
if (category == "notice") {
  $("#notice").html("<div class=\"active item\"><a href=\"/commu\">공지</a></div>");
}
