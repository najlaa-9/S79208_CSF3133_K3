/*
Error 1: onsubmit="checkMark()" did not return value.
Fix: return checkMark()

Error 2: mark field can be empty.
Fix: Added empty mark validation.

Error 3: parseInt() used before validation.
Fix: Validate first, then convert.

Error 4: Result colour property written as style.colour.
Fix: Changed to style.color.

Error 5: showtable() function name mismatch.
Fix: Changed to showTable().

Error 6: Grade table missing grade A.
Fix: Loop starts from index 0.

Error 7: Table row HTML incorrect.
Fix: Added proper <tr> and </tr> tags.

Error 8: Result disappeared after submit.
Fix: return false to prevent form refresh.

Error 9: No Random Mark button.
Fix: Added randomMark().

Error 10: No date and time display.
Fix: Added Date() output.
*/

/*
Error Fixes Listed Here
(As required by assignment)
*/

function checkMark() {

    let name = document.forms["gradeForm"]["name"].value;
    let mark = document.forms["gradeForm"]["mark"].value;

    if (name == "") {
        alert("Name must be filled out.");
        return false;
    }

    if (mark == "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    mark = parseInt(mark);

    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    let grade = "";

    if (mark >= 80) {
        grade = "A";
    }
    else if (mark >= 65) {
        grade = "B";
    }
    else if (mark >= 50) {
        grade = "C";
    }
    else {
        grade = "F";
    }

    document.getElementById("result").innerHTML =
        name + " got grade " + grade;

    /* Change colour according to grade */
    if (grade == "A" || grade == "B") {
        document.getElementById("result").style.color = "green";
    }
    else if (grade == "C") {
        document.getElementById("result").style.color = "orange";
    }
    else {
        document.getElementById("result").style.color = "red";
    }

    document.getElementById("checkedTime").innerHTML =
        "Checked on: " + new Date();

    return false;
}

/* Show Grade Table */
function showTable() {

    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];

    let tableHTML =
        "<table>" +
        "<tr><th>Grade</th><th>Mark Range</th></tr>";

    for (let i = 0; i < grades.length; i++) {

        tableHTML +=
            "<tr>" +
            "<td>" + grades[i] + "</td>" +
            "<td>" + ranges[i] + "</td>" +
            "</tr>";
    }

    tableHTML += "</table>";

    document.getElementById("tableContainer").innerHTML =
        tableHTML;
}

/* Random Mark */
function randomMark() {

    let randomNumber =
        Math.floor(Math.random() * 101);

    document.getElementById("mark").value =
        randomNumber;
}
