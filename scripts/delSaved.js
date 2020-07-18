
var page = id.concat('/allactivity?privacy_source=activity_log&category_key=savedforlater');
if (window.location.href === page){

    var c = confirm("Are you sure?");
    if (c == true) {
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        setInterval(function () {
        var last = $("._6a._6b.uiPopover.rfloat a span").last().click();
        $("span:contains(Delete):visible").click();
        var post = last.closest(".pam");
        post.prev().remove();
        post.remove();
        }, 700);
    } else {
        alert("OK Bye Bye.")
    }

} else {
    window.location.href = page;
    alert("Please go to Facebook Saved Log Page first.");

}

