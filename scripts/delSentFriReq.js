
var page = 'https://m.facebook.com/friends/center/requests/outgoing';
if (window.location.href === page){

    var c = confirm("Are you sure?");
    if (c == true) {
        setInterval(function () {
                $("button:contains(Cancel):visible").click();
        }, 700);
    } else {
        alert("OK Bye Bye.")
    }

} else {
    window.location.href = page;
    alert("Please go to Facebook Friend Requests Sent Page first.");

}

