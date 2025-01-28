function gameboard() {
    const game = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    const playerX = new player('X', false);
    const playerO = new player('O', true);
    let win = false;
    let tie = false;

    this.sign = function() {
        if (playerX.turn) {
            return "X";
        } else return "O";
    }

    this.checkWin = function() {
        for (let i = 0; i < 3; i++) {
            if (game[i] === game[i + 3] && game[i] === game[i + 6] && game[i] !== ' ') return true;
            if (game[i*3] === game[i*3 + 1] && game[i*3] === game[i*3 + 2] && game[i*3] !== ' ') return true;
        }
        if (game[0] === game[4] && game[0] === game[8] && game[0] !== ' ') return true;
        if (game[2] === game[4] && game[2] === game[6] && game[2] !== ' ') return true;
        
        return false;
    }

    this.checkTie = function() {
        if (game.every(cell => cell !== ' ') && !this.checkWin()) {
            return true;
        }
        return false;
    }

    this.move = function(index) {
        if (!this.win) {
            let sign = ' ';
            if (playerO.turn) sign = playerO.sign;
            else sign = playerX.sign;
            if (game[index] === ' ') {
                game[index] = sign;
                playerX.nextTurn();
                playerO.nextTurn();
                this.win = this.checkWin();
                this.tie = this.checkTie();
                return true;
            }
        }
        return false;
    }

    this.reset = function() {
        for (let i = 0; i < 9; i++) {
            game[i] = ' ';
        }
        this.win = false;
        if (playerX.turn) {
            playerO.nextTurn();
            playerX.nextTurn();
        }
    }
}

function player(sign, turn) {
    this.sign = sign;
    this.turn = turn;
    this.nextTurn = function() {
        this.turn = !this.turn;
    }
}

function display() {
    const play = new gameboard();
    let won = false;
    
    for (let i = 0; i <= 8; i++) {
        const index = document.getElementById(i.toString());
    
        index.addEventListener("click", function() {
            if (play.move(i)) {
                index.textContent = play.sign();
            }
            if (play.win && !won) {
                won = true;
                const reset = document.getElementById("reset");
                const p = document.createElement("p");
                p.setAttribute("class", "play-again");
                p.textContent = "Player " + play.sign() + " wins!";
                reset.appendChild(p);

                const button = document.createElement("button");
                button.setAttribute("class", "play-button");
                button.textContent = "Play Again?";
                reset.appendChild(button);

                button.addEventListener("click", function() {
                    play.reset();
                    p.remove();
                    button.remove();
                    won = false;
                    for (let i = 0; i <= 8; i++) {
                        const removeText = document.getElementById(i.toString());
                        removeText.textContent = " ";
                    }
                })
            }
            if (play.tie) {
                const reset = document.getElementById("reset");
                const p = document.createElement("p");
                p.setAttribute("class", "play-again");
                p.textContent = "It's a Tie!";
                reset.appendChild(p);

                const button = document.createElement("button");
                button.setAttribute("class", "play-button");
                button.textContent = "Play Again?";
                reset.appendChild(button);

                button.addEventListener("click", function() {
                    play.reset();
                    p.remove();
                    button.remove();
                    won = false;
                    for (let i = 0; i <= 8; i++) {
                        let removeText = document.getElementById(i.toString());
                        removeText.textContent = " ";
                    }
                })
            }
        });
    }
}

const check = new display();

