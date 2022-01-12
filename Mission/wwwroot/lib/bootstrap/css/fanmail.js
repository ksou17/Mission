////document.getElementById("buttonsend").addEventListener("click", function () {
////    alert("From: " + document.getElementById("txtFrom").value +
////        ", Subject: " + document.getElementById("txtSubject").value +
////        ", Message: " + document.getElementById("txtMessage").value);
////})

$("#buttonsend").click(function () {
    alert("From: " + $("#txtFrom").val() +
        ", Subject: " + $("#txtSubject").val() +
        ", Message: " + $("#txtMessage").val());

    $("#picGanderson").fadeToggle();

    alert("hello");
})