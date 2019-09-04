function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var id = getParameterByName('id')

var app = new Vue({
    el: "#app",
    data: {
        name: "",
        title: "",
        content: "",
        link: ""
    }
})

$.ajax({
url: "https://playentry.org/api/discuss/" + id,
crossDomain: true,
dataType: "jsonp",
type: 'GET',
data: "",
success: function(res) {
app.name = res.user.username
app.title = res.title
app.content = res.content
app.link = "https://playentry.org/ds#!/free/"+res._id
$("#url").html("<a id=\"url\" href=\"" + app.link +"\">글 주소</a>");
}
})