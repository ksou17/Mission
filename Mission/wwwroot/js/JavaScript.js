$("#plzwork").click(function () {
    total = (parseInt($("#exam").val())*(.2)) + (parseInt($("#assignments").val())*(.55)) + (parseInt($("#projects").val())*(.05)) + (parseInt($("#quizzes").val())*(.1)) + (parseInt($("#intex").val())*(.1));
    grade = "A";

    if (total >= 94) {
        grade = "A";
    } else if (total >= 90) {
        grade = "A-";
    } else if (total >= 87) {
        grade = "B+";
    } else if (total >= 84) {
        grade = "B";
    } else if (total >= 80) {
        grade = "B-";
    } else if (total >= 77) {
        grade = "C+";
    } else if (total >= 74) {
        grade = "C";
    } else if (total >= 70) {
        grade = "C-";
    } else if (total >= 67) {
        grade = "D+";
    } else if (total >= 64) {
        grade = "D";
    } else if (total >= 60) {
        grade = "D-";
    } else {
        grade = "E";
    }

    alert("You recieved " + total.toFixed(2) + "% in the class resulting in a(n) " + grade);
    
})

//document.getElementById("plzwork").addEventListener("click", function () {
//    alert("Did this work?");
//})