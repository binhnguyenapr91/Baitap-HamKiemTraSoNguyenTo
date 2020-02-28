let inputNumber = parseInt(prompt("Enter the number you want to check:"));
let status = checkPrime(inputNumber);
if(status){
    alert(inputNumber + "is Prime");
}else{
    alert(inputNumber + "is not a Prime");
}

function checkPrime(number) {
    let checkNumber = true;
    for(let index =2;index<number-1;index++){
        if (number%index==0){
            checkNumber = false;
            break;
        }
    }
    return checkNumber;
}