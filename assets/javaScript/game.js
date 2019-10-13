window.onload = function() {

    var wordsToGuess;
    var select;
    var word;
    var gues;
    var geusses = [];
    var geussesRemaining;
    var counter;
    var space;


    const showgeussesRemaining = document.getElementById("Remaining_Guesses");
    const getHelp = document.getElementById("Need_Help");
    const showHelper = document.getElementById("Help");

    const buttons = function() {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('dl');

        for (var i = 0; i < ABC.length; i++) {
            letters.id = 'ABC';
            list = document.createElement('dt');
            list.id = 'letter';
            list.innerHTML = ABC[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    const result = function() {
        wordHolder = document.getElementById('placeholder');
        correct = document.createElement('dl');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('dt');
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

    const comments = function() {
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

    const check = function() {
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

    const ABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    const game = function() {
        wordsToGuess = [
            ["jiren", "goku", "gohan", "piccolo", "vegeta", "krillen", "hit",
                "beerus", "frieza", "toppo"
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

        const dbsClues = [
            ["strongest pride trooper", "first to reach ultra-instinct", "son of goku",
                "namekian z-fighter", "prince of sayians", "goku's best friend", "skilled assasin",
                "god of destruction for earth", "capable of golden form", "captain of the pride troopers"
            ]
        ];

        const wordIndex = wordsToGuess.indexOf(select);
        const clueIndex = select.indexOf(word);
        showHelper.innerHTML = "Your Clue Is: " + dbsClues[wordIndex][clueIndex];
    };
    document.getElementById('restart').onclick = function() {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        showHelper.innerHTML = "";
        game();
    }
};