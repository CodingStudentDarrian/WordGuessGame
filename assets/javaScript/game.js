var dcookie = document.cookie;
var cname = name + "=";
var clen = dcookie.length;
var cbegin = 0;
while (cbegin < clen) {
    var vbegin = cbegin + cname.length;
    if (dcookie.substring(cbegin, vbegin) == cname) {
        var vend = dcookie.indexOf(";", vbegin);
        if (vend == -1) vend = clen;
        return unescape(dcookie.substring(vbegin, vend));
    }
    cbegin = dcookie.indexOf("", cbegin) + 1;
    if (cbegin == 0) break;
}
return null;


function setCookie(name, value, expires) {
    if (!expires) expires = new Date();
    document.cookie = name + "=" + escape(value) + "; expires" + expires.toGTMString() + "";
}

function delCookie(name) {
    var expireNow = new Date();
    document.cookie = name + "=" + ";expires = Thu, 01 - Jan - 70 00: 00: 01 GMT" + ";path = /";
}
var Alphabet = new initAlphaArray()
var numOfWords = 11;
var SaveData = "";
var imageNum = "";
var lettersSelected = "";
var randomWord = "";
var displayWord = "";
var position = 0;
var word = newWordList();
var randomNumber = (exdate.getSeconds()) % NumOfWords;

function initAlphaArray() {
    this.length = 26
    this[0] = "A"
    this[1] = "B"
    this[2] = "C"
    this[3] = "D"
    this[4] = "E"
    this[5] = "F"
    this[6] = "G"
    this[7] = "H"
    this[8] = "I"
    this[9] = "J"
    this[10] = "K"
    this[11] = "L"
    this[12] = "M"
    this[13] = "N"
    this[14] = "O"
    this[15] = "P"
    this[16] = "Q"
    this[17] = "R"
    this[18] = "S"
    this[19] = "T"
    this[20] = "U"
    this[21] = "V"
    this[22] = "W"
    this[23] = "X"
    this[24] = "Y"
    this[25] = "Z"
}

function wordsList() {
    this.length
    this[0] = "Krillin";
    this[1] = "Vegeta";
    this[2] = "Goku";
    this[3] = "Tien";
    this[4] = "Jiren";
    this[5] = "Beerus";
    this[6] = "Whis";
    this[7] = "Piccolo";
    this[8] = "Gohan";
    this[9] = "Mr.Satan";
    this[10] = "Broli";
}

function availableLetters(i) {
    if (lettersSelected.charAt(i) == Alphabet[i])
        document.write('<TD ALIGN=CENTER VALIGN=CENTER WIDTH=20 HEIGHT=12>' +
            '<B><A> HREF=javascript:loadNextPage(' + i + ',\'' + Alphabet[i] + '\')">' + Alphabet[i] + '</A></B></TD>');
    else
        document.write('<TD ALIGN=CENTER VALIGN=CENTER WIDTH=20 HEIGHT=12> </TD>');
}

function loadNextPage(selected, _letter) {
    var j = 0;
    var holdLetterSelected = lettersSelected;
    lettersSelected = "";
    if (selected == 0) {
        for (j = 1; j <= 25; j++) {
            lettersSelected += holdLetterSelected.charAt(j);
        }
        lettersSelected = "^" + lettersSelected;
    } else if (selected == 25) {
        for (j = 0; j <= 24; j++) {
            lettersSelected += holdLetterSelected.charAt(j);
        }
        lettersSelected += "^";
    } else {
        for (j = 0; j < selected; j++) {
            lettersSelected += holdLetterSelected.charAt(j);
        }
        lettersSelected += "^";
        for (j = lettersSelected + 1; j < 25; j++) {
            lettersSelected += holdLetterSelected.charAt(j);
        }

    }
    SaveData = imageNum + lettersSelected + randomWord + "*";
    setCookie("_WordGuess", SaveData, expdate);
    history.go(0);
}
expdate.setTime(expdate.getTime() + (1000 * 60 * 60 * 24 * 10));
if (getCookie("_wordGuess") == null) {
    imageNum = "A";
    lettersSelected = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    randomWord = word[randomNumber];
    SaveData = imageNum + lettersSelected + randomWord + "*";
    setCookie("_WordGuess", SaveData, expdate);
} else {
    SaveData = getCookie("_WordGuess");
    imageNum = SaveData.charAt(0);
    for (position = 1; position <= 26; position++) {
        lettersSelected += SaveData.charAt(position);
    }
    for (position = 27; position < SaveData.indexOf("*"); position++) {
        randomWord += SaveData.charAt(position);
    }
}
displayWord = "";
for (i = 0; i < randomWord.length; i++) {
    if (randomWord.charAt(i) == '') {
        displayWord += "";
    } else {
        matchFound = false;
        for (j = 0; j <= 25; j++) {
            if ((lettersSelected.charAt(j) == "^") && (randomWord.charAt(i) == Alphabet[j])) {
                displayWord += randomWord.charAt(i);
                matchFound = true;
            }
        }
        if (!matchFound) displayWord += "-";
    }
}
if (imageNum == "j") {
    document.write('<font color = red size = 4 > You Lost! < br > Answer: "' + randomWord + '" </font> ');
} else if (randomWord == displayWord) {
    document.write('<font color=red size=8>You Win!</font>');

} else {
    document.write('<table>');
    document.write('<tr>');
    for (i = 0; i < 13; i++) availableLetters(i);
    document.write('</tr>');
    document.write('<tr>');
    for (i = 0; i < 26; i++) availableLetters(i);
    document.write('</tr>');
    document.write('</table>');
}
document.write('<br>')
document.write('<br>')
document.write('<font size=9><tt>');
document.write(displayWord);
document.write('</tt></font>');
document.write('<form>');
document.write('<input type="button" VALUE=New Game"' + 'onClick="delCookie(\'WordGuess\');history.go(0);">');
document.write('<form>');
document.write('</center>');