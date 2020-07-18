
var page = id.concat('/allactivity?privacy_source=activity_log&category_key=commentscluster');
if (window.location.href === page){

    var c = confirm("Are you sure?");
    if (c == true) {
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        setInterval (function () {
        var last = $("._6a._6b.uiPopover.rfloat a span").last().click();
        $("span:contains(Delete):visible").click();
        var post = last.closest("[data-ft]");
        post.prev().remove();
        post.remove();
}, 400);
    } else {
        alert("OK Bye Bye.")
    }

} else {
    window.location.href = page;
    alert("Please go to Facebook Comment Log Page first.");

}

