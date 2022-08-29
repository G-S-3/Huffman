// Preventing user enter input into new line within textArtea
const para = document.getElementById("paragraph_text");
para.addEventListener('keydown', function (e) {
    // Get the code of pressed key
    const keyCode = e.which || e.keyCode;

    // 13 represents the Enter key
    if (keyCode === 13 && !e.shiftKey) {
        // Don't generate a new line
        e.preventDefault();
    }
});

// Tutle Animations

var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 500,
        delay: (el, i) => 70 * (i + 1)
    }).add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=875',
        delay: (el, i, l) => 0 * (l - i)
    }).add({
        targets: '.ml1',
        opacity: 0,
        duration: 100,
        easing: "easeOutExpo",
        delay: 1000000
    });


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
    output.textContent = "\xa0\Binary:-  " + total;
    var count = document.getElementById("binary_digit");
    count.innerHTML = totalDigit;
}


function frequance(arr) {
    var fr = document.getElementById("freq");
    var new_arr = Object.entries(arr);

    fr.innerHTML = '\xa0\Frequency:- &nbsp';
    for (var q = 0; q < new_arr.length; q++) {
        var a = new_arr[q][0];
        if (a == " ") {
            a = "Space(SC)";
        }
        else if (a == "\n") {
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
    // console.log(text);
    var array = {};

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

function result() {
    var binary_digit = document.getElementById("binary_digit").innerHTML;
    var encoded_digit = document.getElementById("encoded_digit").innerHTML;
    var cmp = document.getElementById("nam_result")
    var result = document.getElementById("result");
    var subt = binary_digit - encoded_digit;
    if (subt == binary_digit) {
        result.style.setProperty("--value", "0");
        result.innerHTML = "0%";
        result.classList.add("percentage")
        cmp.innerHTML = "0%"
    } else {
        let calculated = ((subt * 100) / binary_digit).toFixed(2);
        result.style.setProperty("--value", calculated);
        result.innerHTML = `${calculated}%`;
        result.classList.add("percentage");
        cmp.innerHTML = `${calculated}%`;
    }


}
