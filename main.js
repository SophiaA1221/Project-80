function getParagraph1() {
    var inputs = [];
    for (var i = 1; i <= 7; i++);
    {
        inputs.push(document.getElementById("p1_input1" + i).value);
        inputs.push(document.getElementById("p1_input2" + i).value);
        inputs.push(document.getElementById("p1_input3" + i).value);
        inputs.push(document.getElementById("p1_input4" + i).value);
        inputs.push(document.getElementById("p1_input5" + i).value);
        inputs.push(document.getElementById("p1_input6" + i).value);
        inputs.push(document.getElementById("p1_input7" + i).value);
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ");

}
function getParagraph2() {
    var inputs = [];
    for (var i = 1; i <= 7; i++);
    {
        inputs.push(document.getElementById("p2_input1" + i).value);
        inputs.push(document.getElementById("p2_input2" + i).value);
        inputs.push(document.getElementById("p2_input3" + i).value);
        inputs.push(document.getElementById("p2_input4" + i).value);
        inputs.push(document.getElementById("p2_input5" + i).value);
        inputs.push(document.getElementById("p2_input6" + i).value);
        inputs.push(document.getElementById("p2_input7" + i).value);
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ");

}