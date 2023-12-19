const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const inputElement = document.getElementById("input")
const keyElement = document.getElementById("keyInput")
let encode = document.getElementById("encode")
let checked = true;
const output = document.getElementById("output")


let index = 0;

if (encode.checked) {
checked = true;
} else {
    checked = false;
}





function cipherEncode(){
    innerCirc.style.animation ="spin 1s linear"
    let input = inputElement.value.toLowerCase()
    let key = parseInt(keyElement.value)
    let result = "";

    for (let i = 0; i < input.length; i++){
        console.log("function decode working")
        let char = input[i]
        if (array.includes(char)) {
            let index = (array.indexOf(char) + key + array.length) % array.length;
            result += array[index];
        } else {
            // If character is not in the array, just add it as it is
            result += char;
           
        }
       
    }
    output.innerText = result;
    return result;
   
}
        


function cipherDecode(){
    innerCirc.style.animation ="spin 1s linear"
    let input = inputElement.value.toLowerCase()
    let key = parseInt(keyElement.value)
    console.log(typeof key)
    let result = "";

    for (let i = 0; i < input.length; i++){
        console.log("function decode working")
        let char = input[i]

        if (array.includes(char)) {
            let index = (array.indexOf(char) - key + array.length) % array.length;
            console.log(index)
            result += array[index];
        } else {
            // If character is not in the array, just add it as it is
            result += char;
           
        }
       
    }
    output.innerText = result;
    return result;
   
}

const innerCirc = document.getElementById("innerCirc")

// function spinWheel(){

//     innerCirc.style.animation ="spin 1s linear"
// }



// solveButton.addEventListener("click", spinWheel)

