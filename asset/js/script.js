let arr = ["asset/img/boat.jpeg", "asset/img/hat.jpeg","asset/img/short.jpeg"]
let arrWord = ["hat", "boat","shirt"];
let counter = 0;
let i = selectRandomImage()
let score = 0 ;
let highscore = 0 ;
document.body.classList.add("backGroundBody");
let btnPLayAgain = document.querySelector(".playAgain");



const showbtnPlayAgain = function() {
    btnPlayAgain.classList.remove('hidden');
    };
    
const hiddenbtnPlayAgain = function() {
    btnPlayAgain.classList.add('hidden');
    };
function gameOver(){
    if(score > highscore){
        highscore = score;
        document.querySelector(".highscore").textContent = "🍭 high score" + score
    }
    document.body.classList.remove("backGroundBody")
    showbtnPlayAgain();
}


    
function selectRandomImage(){
    let countQuestion = document.querySelector(".countQuestion");
    countQuestion.textContent = "Question number " + counter;
    let index = Math.floor(Math.random()* 3);
    document.getElementById("imgToGuess").src = arr(index);
    return index;
}

function play(){
    counter++;
    if(counter <= 3){
        let word = arrWord[i]
        let letter = document.getElementById("input").value;
        if(!letter){
            document.querySelector(".messsage").textContent = "No Letter 🥵"
            score -= 2;

        }
        else if(letter == word[0]){
            document.querySelector(".message").textContent = "Correct Answer 🤙"
            score += 5;

        }
        else if(letter != word[0]){
            document.querySelector(".message").textContent = "Not Correct Answer 👎 "
            score -= 3;

        }
        document.getElementById("input").value = ""
        document.querySelector(".score").textContent = "score: " + score

    }
    if(counter < 3 ){
        i = selectRandomImage();
        
    }
    if(counter > 2){
        gameOver();
     }
}
document.querySelector(".play").addEventListener("click",play)
