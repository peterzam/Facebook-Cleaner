
var page = id.concat('/allactivity?privacy_source=activity_log&category_key=search');
if (window.location.href === page){

    var c = confirm("Are you sure?");
    if (c == true) {
        $("span:contains(Clear Searches):visible").click();
        setTimeout(function() {
            $("button:contains(Clear Searches)").click();
          }, 1000);

        setTimeout(function() {
            location.reload();
          }, 1000);
        
    } else {
        alert("OK Bye Bye.")
    }

} else {
    window.location.href = page;
    alert("Please go to Facebook History Log Page first.");

}