function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var page = getParameterByName('page')
var category = getParameterByName('category')

$.ajax({
  url: "https://playentry.org/api/rankProject?type=staff&limit=3",
  crossDomain: true,
  dataType: "jsonp",
  type: 'GET',
  data: "",
  success: function(res) {
    $("#staff").append("<div class=\"ui card br\"><div class=\"image\"><img class=\"br-top\" src=\"https://playentry.org/" + res[0].project.thumb + "\"></div><div class=\"content\"><a href=\"https://playentry.org/" + res[0].project.user.username + "/" + res[0].project._id + "\" class=\"header\">" + res[0].project.name + "</a><div class=\"meta\"><span class=\"date\">" + res[0].project.user.username + "</span></div></div></div><div class=\"ui card br\"><div class=\"image\"><img class=\"br-top\" src=\"https://playentry.org/" + res[1].project.thumb + "\"></div><div class=\"content\"><a href=\"https://playentry.org/" + res[1].project.user.username + "/" + res[1].project._id + "\" class=\"header\">" + res[1].project.name + "</a><div class=\"meta\"><span class=\"date\">" + res[1].project.user.username + "</span></div></div></div><div class=\"ui card br\"><div class=\"image\"><img class=\"br-top\" src=\"https://playentry.org/" + res[2].project.thumb + "\"></div><div class=\"content\"><a href=\"https://playentry.org/" + res[2].project.user.username + "/" + res[2].project._id + "\" class=\"header\">" + res[2].project.name + "</a><div class=\"meta\"><span class=\"date\">" + res[2].project.user.username + "</span></div></div></div>");
  }
})

$.ajax({
  url: "https://playentry.org/api/rankProject?type=best&limit=9",
  crossDomain: true,
  dataType: "jsonp",
  type: 'GET',
  data: "",
  success: function(res) {
    $("#best").append("<div class=\"ui card br\"><div class=\"image\"><img class=\"br-top\" src=\"https://playentry.org/" + res[0].project.thumb + "\"></div><div class=\"content\"><a href=\"https://playentry.org/" + res[0].project.user.username + "/" + res[0].project._id + "\" class=\"header\">" + res[0].project.name + "</a><div class=\"meta\"><span class=\"date\">" + res[0].project.user.username + "</span></div></div></div><div class=\"ui card br\"><div class=\"image\"><img class=\"br-top\" src=\"https://playentry.org/" + res[1].project.thumb + "\"></div><div class=\"content\"><a href=\"https://playentry.org/" + res[1].project.user.username + "/" + res[1].project._id + "\" class=\"header\">" + res[1].project.name + "</a><div class=\"meta\"><span class=\"date\">" + res[1].project.user.username + "</span></div></div></div><div class=\"ui card br\"><div class=\"image\"><img class=\"br-top\" src=\"https://playentry.org/" + res[2].project.thumb + "\"></div><div class=\"content\"><a href=\"https://playentry.org/" + res[2].project.user.username + "/" + res[2].project._id + "\" class=\"header\">" + res[2].project.name + "</a><div class=\"meta\"><span class=\"date\">" + res[2].project.user.username + "</span></div></div></div><div class=\"ui card br\"><div class=\"image\"><img class=\"br-top\" src=\"https://playentry.org/" + res[3].project.thumb + "\"></div><div class=\"content\"><a href=\"https://playentry.org/" + res[3].project.user.username + "/" + res[3].project._id + "\" class=\"header\">" + res[3].project.name + "</a><div class=\"meta\"><span class=\"date\">" + res[3].project.user.username + "</span></div></div></div><div class=\"ui card br\"><div class=\"image\"><img class=\"br-top\" src=\"https://playentry.org/" + res[4].project.thumb + "\"></div><div class=\"content\"><a href=\"https://playentry.org/" + res[4].project.user.username + "/" + res[4].project._id + "\" class=\"header\">" + res[4].project.name + "</a><div class=\"meta\"><span class=\"date\">" + res[4].project.user.username + "</span></div></div></div><div class=\"ui card br\"><div class=\"image\"><img class=\"br-top\" src=\"https://playentry.org/" + res[5].project.thumb + "\"></div><div class=\"content\"><a href=\"https://playentry.org/" + res[5].project.user.username + "/" + res[5].project._id + "\" class=\"header\">" + res[5].project.name + "</a><div class=\"meta\"><span class=\"date\">" + res[5].project.user.username + "</span></div></div></div><div class=\"ui card br\"><div class=\"image\"><img class=\"br-top\" src=\"https://playentry.org/" + res[6].project.thumb + "\"></div><div class=\"content\"><a href=\"https://playentry.org/" + res[6].project.user.username + "/" + res[6].project._id + "\" class=\"header\">" + res[6].project.name + "</a><div class=\"meta\"><span class=\"date\">" + res[6].project.user.username + "</span></div></div></div><div class=\"ui card br\"><div class=\"image\"><img class=\"br-top\" src=\"https://playentry.org/" + res[7].project.thumb + "\"></div><div class=\"content\"><a href=\"https://playentry.org/" + res[7].project.user.username + "/" + res[7].project._id + "\" class=\"header\">" + res[7].project.name + "</a><div class=\"meta\"><span class=\"date\">" + res[7].project.user.username + "</span></div></div></div><div class=\"ui card br\"><div class=\"image\"><img class=\"br-top\" src=\"https://playentry.org/" + res[8].project.thumb + "\"></div><div class=\"content\"><a href=\"https://playentry.org/" + res[8].project.user.username + "/" + res[8].project._id + "\" class=\"header\">" + res[8].project.name + "</a><div class=\"meta\"><span class=\"date\">" + res[8].project.user.username + "</span></div></div></div>");
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