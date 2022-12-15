const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names,e="surprise"){
    let newArray = []
    for(let i = 0; i<names.length; i++){
        newArray.push(console.log(`"Thank you, ${names[i]}, for the wonderful ${e} gift!"`))
    }
    return newArray;
}
writeCards(names,"surprise");



function countDown(num) {
    while (num >= 0) {
    console.log(num);
    num--;
    }
}
countDown(10)