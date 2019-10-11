window.onload = function() {

    var wordsToGuess;
    var select;
    var word;
    var guess;
    var geusses = [];
    var geussesRemaining;
    var counter;
    var space;


    var showgeussesRemaining = document.getElementById("Remaining_Guesses");
    var getHelp = document.getElementById("Need_Help");
    var showHelper = document.getElementById("Help");

    var buttons = function() {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < ABC.length; i++) {
            letters.id = 'ABC';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = ABC[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    result = function() {
        wordHolder = document.getElementById('placeholder');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    comments = function() {
        showgeussesRemaining.innerHTML = "You have " + geussesRemaining + " Remaining Guesses";
        if (geussesRemaining < 1) {
            showgeussesRemaining.innerHTML = "Try Again";
        }
        for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                showgeussesRemaining.innerHTML = "We Have A Winner!";
            }
        }
    }

    check = function() {
        list.onclick = function() {
            var geuss = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    geusses[i].innerHTML = geuss;
                    counter += 1;
                }
            }
            var j = (word.indexOf(geuss));
            if (j === -1) {
                geussesRemaining -= 1;
                comments();
            } else {
                comments();
            }
        }
    }

    var ABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    game = function() {
        wordsToGuess = [
            ["jiren", "goku", "gohan", "piccolo", "vegeta", "krillen", "Hit",
                "android 17", "frieza"
            ]
        ];

        select = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
        word = select[Math.floor(Math.random() * select.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        geusses = [];
        geussesRemaining = 10;
        counter = 0;
        space = 0;
        result();
        comments();
    }

    game();

    Need_Help.onclick = function() {

        dbsClues = [
            ["strongest pride trooper", "first to reach ultra-instinct", "son of goku",
                "namekian z-fighter", "prince of sayians", "goku's best friend", "skill assasin",
                "god of destruction for earth", "twin android (boy)", "capable of golden form"
            ]
        ];

        var wordIndex = wordsToGuess.indexOf(select);
        var clueIndex = select.indexOf(word);
        showHelper.innerHTML = "Your Clue Is: " + dbsClues[wordIndex][clueIndex];
    };
    document.getElementById('restart').onclick = function() {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        showHelper.innerHTML = "";
        game();
    }
}