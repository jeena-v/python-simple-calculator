function butnclick(val) {
    var screen = document.getElementById("screen");
    
    // Prevent consecutive operators
    if (/[\+\-\*\/]$/.test(screen.value) && /[\+\-\*\/]/.test(val)) {
        return;
    }

    // Prevent multiple decimals in the same number segment
    let lastNumberSegment = screen.value.split(/[\+\-\*\/]/).pop();
    if (val === '.' && lastNumberSegment.includes('.')) {
        return;
    }

    screen.value += val;
}

function clearDisplay(){
    document.getElementById("screen").value=""
}
function equalDisplay(){
    var text=document.getElementById("screen").value
    var result=eval(text)                  /*eval calculate all maths operation its in built */
    document.getElementById("screen").value=result

}