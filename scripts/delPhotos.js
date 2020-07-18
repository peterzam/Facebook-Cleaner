
var page = id.concat('/allactivity?privacy_source=activity_log&category_key=photos');
if (window.location.href === page){

    var c = confirm("Are you sure?");
    if (c == true) {
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        setInterval (function () {
            var last = $("._6a._6b.uiPopover.rfloat a span").last().click();
            $("span:contains(Delete):visible").click();
            setTimeout(function () {
                $("button:contains(Delete):visible").click();
                $("button:contains(Close):visible").click();
            }, 500);
            last.closest("table").remove();
            
        }, 5000);
    } else {
        alert("OK Bye Bye.")
    }

} else {
    window.location.href = page;
    alert("Please go to Facebook Photo Log Page first.");

}