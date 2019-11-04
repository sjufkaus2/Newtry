function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var id = getParameterByName('id')
var category = getParameterByName('category')

$.ajax({
    url: "https://playentry.org/api/discuss/" + id,
    crossDomain: true,
    dataType: "jsonp",
    type: 'GET',
    data: "",
    success: function(res) {
        $("#title").html("<br><a id=\"title\" href=\"" + "https://playentry.org/ds#!/free/" + res._id + "\" style=\"font-size: 2em;\">" + res.title + "</a>")
        $("#owner").html("<br><a id=\"owner\" href=\"" + "https://playentry.org/" + res.owner + "\" style=\"font-size: 1.2em;\">" + res.owner + "</a>")
        $("#content").html("<br>" + res.content)
        for (var i = 0; i <= res.images.length; i++) {
            $("#image").append("<br>" + "<img src=\"https://playentry.org/" + res.images[i].imageUrl + "\">")
        }
    }
})


if (category == "") {
    window.location.href = "/?page=1&category=free"
}
if (category == "free") {
    $("#free").html("<div class=\"active item\"><a href=\"/\">자유게시판</a></div>");
}
if (category == "qna") {
    $("#qna").html("<div class=\"active item\"><a href=\"/\">묻고답하기</a></div>");
}
if (category == "tips") {
    $("#tips").html("<div class=\"active item\"><a href=\"/\">노하우&팁</a></div>");
}
if (category == "notice") {
    $("#notice").html("<div class=\"active item\"><a href=\"/\">공지사항</a></div>");
}