// funzione per generare una password, la cui lunghezza è definita dall’utente.
// La password può essere formata da lettere minuscole, maiuscole, numeri e simboli.

const uppercaseLetters = ["A","B","C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
const lowercaseLetters = ["a","b","c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "w", "x", "y", "z"];
const numberArray =      [0,1,2,3,4,5,6,7,8,9];
const specialCharacters =["!","?","-","_","#","*","%","&","+","<",">","^"]

let libraryArr = []

let pwoverlay = document.getElementById("pw-overlay")
let pw = document.getElementById("pw")

const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols")

const submitBtn = document.getElementById("submit")
const copyBtn = document.getElementById("copy")
let choseNumber = document.getElementById("chosenumber")

let randomNumberArray = []

let pwfinale = [] 

choseNumber.value = 6;

copyBtn.addEventListener("click", function(){
    copyBtnFunction()
})

submitBtn.addEventListener("click", function(){
    libraryArr = []
    brainPw()
});

let chosenNumbers = choseNumber.value

function brainPw(){

    pw.innerHTML = " " //reset

    console.log("submit pressed")
    //se non viene scelto nulla
    if(uppercaseInput.checked == false && lowercaseInput.checked == false && numbersInput.checked == false && symbolsInput.checked == false){
        alert("chose at leas one value")
    }


    //quanti caratteri è lunga la pw
    chosenNumbers = choseNumber.value
    console.log("lenght :" + chosenNumbers)    

    pwoverlay.classList.add("typewriter") //effetto su pw
    let pwTypewriterClock = setTimeout(pwTypewriter, 1000)
    function pwTypewriter(){
        pwoverlay.classList.remove("typewriter")
        clearInterval(pwTypewriterClock)
    }

    randomNumberArray = []  //i numeri random che vengono generati
    
    if(uppercaseInput.checked == true){        //push in libreria in  base a quale viene selzionati
        libraryArr.push(uppercaseLetters)
    }
    if(lowercaseInput.checked ==true){
        libraryArr.push(lowercaseLetters)
    }
    if(numbersInput.checked ==true){
        libraryArr.push(numberArray)
    }
    if(symbolsInput.checked == true){
        libraryArr.push(specialCharacters)
    }
    

    for(let i = 0; i < chosenNumbers; i++){  //genera numeri random in base a quanti ne vengono scelti e manda e array
        randomArray()
    }

    for(let i = 0; i < chosenNumbers; i++){
        
        let arrscelto = libraryArr[randomNumberArray[i]];
        pw.innerHTML += arrscelto[Math.floor(Math.random()*arrscelto.length)]
    }

    uppercaseInput.checked = false
    lowercaseInput.checked = false 
    numbersInput.checked = false
    symbolsInput.checked = false


}


function randomArray(){
    randomnNumber = Math.floor(Math.random()*libraryArr.length)  //numero da 0 a 3
    randomNumberArray.push(randomnNumber)
}

function copyBtnFunction(){
    let copyText = pw.innerHTML;
    navigator.clipboard.writeText(copyText)
    alert(copyText + ' copied')
}
