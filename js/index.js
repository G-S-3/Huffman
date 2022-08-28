function convert() {
    var value = document.getElementById("paragraph_text").value;
    var output = document.getElementById("binary");
    var total = '';
    var i = 0;
    var totalDigit = 0;

    for (; i < value.length; i++) {
        var binary = '';
        var characther = value.charCodeAt(i);

        while (characther > 0) {
            var mod = characther % 2;
            characther = Math.floor(characther / 2)
            binary = String(mod) + String(binary)
        }

        while (binary.length != 8) {
            binary = String(0) + String(binary)

        }

        total += binary + ' ';
        totalDigit += binary.length
    }
    output.textContent = "\xa0\Binary:  " + total;
    var count = document.getElementById("binary_digit");
    count.innerHTML = totalDigit;
}

function frequance(arr) {
    var fr = document.getElementById("freq");
    var new_arr = Object.entries(arr);

    fr.innerHTML = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
    for (var q = 0; q < new_arr.length; q++) {
        var a = new_arr[q][0];
        if (a == " ") {
            a = "Space(SC)";
        } else if (a == "\n") {
            a = "New Line(NL)";
        }
        fr.innerHTML += a + ": " + new_arr[q][1] + " || ";

    }
}

function result() {
    var binary_digit = document.getElementById("binary_digit").innerHTML;
    var encoded_digit = document.getElementById("encoded_digit").innerHTML;
    var result = document.getElementById("result");

    var subt = binary_digit - encoded_digit;
    if (subt == binary_digit) {
        result.innerHTML = 0;
    } else {
        result.innerHTML = ((subt * 100) / binary_digit).toFixed(2) + "%";

    }


}

function main() {
    var text = String(document.getElementById("paragraph_text").value);
    var array = {};
    document.getElementById("text_digit").innerHTML = text.length;

    for (var i = 0; i < text.length; i++) {

        var current = text.charAt(i);

        if (current in array) {
            array[current] = array[current] + 1;

        } else {
            array[current] = 1;
        }

    }

    remove();
    createNodes(array);
    frequance(array);
    result();
}

function reset() {
    location.reload();
}

function remove() {
    var coded = document.getElementById("coded");
    coded.innerHTML = "";
    var graph = document.querySelector('svg');
    if (graph) { graph.parentElement.removeChild(graph) };

}

var huffman = document.getElementById("huffman");
var starty, startx, scrleft, scrtop, isdown;

huffman.addEventListener('mousedown', e => MouseDown(e));
huffman.addEventListener('mouseup', e => mouseUp(e))
huffman.addEventListener('mouseleave', e => mouseLeave(e));
huffman.addEventListener('mousemove', e => mouseMove(e));

function MouseDown(e) {
    isdown = true;
    startx = e.pageX - huffman.offsetLeft;
    starty = e.pageY - huffman.offsetTop;
    scrleft = huffman.scrollLeft;
    scrtop = huffman.scrollTop;
}

function mouseUp(e) {
    isdown = false;
}

function mouseLeave(e) {
    isdown = false;
}

function mouseMove(e) {
    if (isdown) {
        e.preventDefault();

        var y = e.pageY - huffman.offsetTop;
        var goY = y - starty;
        huffman.scrollTop = scrtop - goY;

        var x = e.pageX - huffman.offsetLeft;
        var goX = x - startx;
        huffman.scrollLeft = scrleft - goX;
    }
}


var dig = document.getElementById("binary_digit");
var bin = document.getElementById("binary");



var code_dig = document.getElementById("encoded_digit");
var res = document.getElementById("result");
var cod = document.getElementById("coded");




var fr = document.getElementById("freq");
