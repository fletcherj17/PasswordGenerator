const allChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const noSym = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const noNum = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const alphaOnly = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];





let pwdTypes = ["any", "letters only", "no symbols", "no numbers"]
let pwdType = "";
let pwdLength = 7;

var slider = document.getElementById("slider");
var sliderValueText = document.getElementById("pwd-length");
sliderValueText.textContent = slider.value + " characters"; // Display the default slider value

slider.oninput = function() {
  sliderValueText.innerHTML = this.value + " characters";
  pwdLength = parseInt(sliderValueText.textContent)
}

let symbolToggle = document.getElementById('symbol-toggle')
let numberToggle = document.getElementById('number-toggle')
symbolToggle.checked = true
numberToggle.checked = true

function symToggle(){
    !symbolToggle.checked
}
function numToggle(){
    !numberToggle.checked
}

let pwd1 = document.getElementById('pwd-1')
let pwd2 = document.getElementById('pwd-2')

function generatePwds() {
    if (symbolToggle.checked && numberToggle.checked){
        pwd1.textContent = pwdGenerator(allChars, pwdLength);
        pwd2.textContent = pwdGenerator(allChars, pwdLength);   
    } else if (symbolToggle.checked && !numberToggle.checked){
        pwd1.textContent = pwdGenerator(noNum, pwdLength);
        pwd2.textContent = pwdGenerator(noNum, pwdLength);   
    } else if (!symbolToggle.checked && numberToggle.checked){
        pwd1.textContent = pwdGenerator(noSym, pwdLength);
        pwd2.textContent = pwdGenerator(noSym, pwdLength);   
    } else if (!symbolToggle.checked && !numberToggle.checked){
        pwd1.textContent = pwdGenerator(alphaOnly, pwdLength);
        pwd2.textContent = pwdGenerator(alphaOnly, pwdLength);   
    }
}

function pwdGenerator(arr, pwdChars) {
    let password = ''
    for(let i=0; i<pwdChars; i++){
        let randomChar = Math.floor(Math.random() * arr.length)
        let char = arr[randomChar]
        password += char
    }
    return password
}

