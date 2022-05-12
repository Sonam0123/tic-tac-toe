const squares = document.querySelectorAll('.box')
const reset = document.querySelector('button')
const title = document.querySelector('#title')

let player1 = true
let turns = 0


if (player1) {
    title.innerText = "Player 1's Turn"
} else {
    title.innerText = "Player 2's Turn"
}
let board = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
]

const checkWinner = () => {
    if ((board[0] === board[1] && board[0] === board[2]) ||
        (board[3] === board[4] && board[3] === board[5])||
        (board[6] === board[7] && board[6] === board[8])||
        (board[0] === board[3] && board[0] === board[6])||
        (board[1] === board[4] && board[1] === board[7])||
        (board[2] === board[5] && board[2] === board[8])||
        (board[0] === board[4] && board[0] === board[8])||
        (board[2] === board[4] && board[2] === board[6]))
    {
        if (player1) {
            title.innerText = "Player 1 Wins!"
        } else {
            title.innerText = "Player 2 Wins!"
        }
        squares.forEach(square => {
            square.removeEventListener('click', clickEvent)
        })
    } else if (turns >= 9) {
        title.innerText = "It's a tie!"
    }
}

const clickEvent = (e) => {
        if (player1) {
            e.target.style.backgroundColor = "red"
            title.innerText = "Player 2's Turn"
        } else {
            e.target.style.backgroundColor = "blue"
            title.innerText = "Player 1's Turn"
        }
        board[e.target.id] = player1

        turns++
        console.log("Inside of clickEvent: ", turns);
        checkWinner()
        player1 = !player1
        e.target.removeEventListener('click', clickEvent)
}

squares.forEach(square => {
    square.addEventListener('click', clickEvent)
})

reset.addEventListener('click', () => {
   window.location.reload()
})