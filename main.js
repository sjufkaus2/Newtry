function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var page = getParameterByName('page')

$.ajax({
    url:"https://playentry.org/api/discuss/find?category=free&sort=created&noCache=1515927646938&page=" + page + "&rows=200",
    crossDomain: true,
    dataType: "jsonp",
    type: 'GET',
    data: "",
    success:function(res){
      for (var i = 0; i < 200; i++) {
        $("#container").append("<a href=\"" + "view.html?id=" + res.data[i]._id + "\"><p>" + res.data[i].title + "</p></a>");
      }
    }
})

var back = Number(page) - 1
var next = Number(page) + 1


$("#next").html("<a id=\"next\" href=\"?page=" + next +"\">다음 페이지</a>");

if ( Number(page) > 1){
$("#back").html("<a id=\"back\" href=\"?page=" + back +"\">이전 페이지</a>");
}