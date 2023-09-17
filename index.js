const btn = document.getElementById('btn_send');

const states = [];
let strings = [];
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

for(let i = 0; i < 19; i++){
    states[i] = document.getElementById('q'+i);
}

function validate(){
    const inputElement = document.getElementById('string');
    const string = inputElement.value;

    states[0].setAttribute('fill', '#5CB85C');

    for(const element of string){
        strings.push(element);
    }

    console.log(strings);

    if(strings[0] === "D" || strings[0] === "E"){
        states[1].setAttribute('fill', '#5CB85C');
    }else{
        states[1].setAttribute('fill', "red")
        return;
    }

    if(strings[1] === "T"){
        states[2].setAttribute('fill', '#5CB85C');
    }else{
        states[2].setAttribute('fill', 'red');
        return;
    }

    if(alphabet.includes(strings[2])){
        states[3].setAttribute('fill', '#5CB85C');
    }else{
        states[3].setAttribute('fill', 'red');
        return;
    }

    if(strings[3] === "-"){
        states[4].setAttribute('fill', '#5CB85C');
    }else{
        states[4].setAttribute('fill', 'red');
        return;
    }

    // Verificar aquí
    if(strings[4] === "0"){
        states[10].setAttribute('fill', '#5CB85C');
        secondCase();
    }else if(numbers.includes(strings[4])){
        states[5].setAttribute('fill', '#5CB85C');
        firstCase();
    }else{
        states[5].setAttribute('fill', 'red');
        states[10].setAttribute('fill', 'red');
        return;
    }

    inputElement.value = '';
    strings = [];
}

function firstCase(){
    if(numbers.includes(strings[5])){
        states[6].setAttribute('fill', '#5CB85C');
    }else{
        states[6].setAttribute('fill', 'red');
        return;
    }

    if(numbers.includes(strings[6])){
        states[7].setAttribute('fill', '#5CB85C');
    }else{
        states[7].setAttribute('fill', 'red');
        return;
    }

    if(strings[7] === "-"){
        states[8].setAttribute('fill', '#5CB85C');
    }else{
        states[8].setAttribute('fill', 'red');
        return;
    }

    if(alphabet.includes(strings[8])){
        states[9].setAttribute('fill', '#5CB85C');
        document.getElementById('q9F').setAttribute('fill', '#5CB85C')

    }else{
        states[9].setAttribute('fill', 'red');
        return;
    }
}

function secondCase(){
    if(strings[5] === "0"){
        states[15].setAttribute('fill', '#5CB85C');
        thirdCase();
    }else if(numbers.includes(strings[5])){
        states[11].setAttribute('fill', '#5CB85C');
    }else{
        states[11].setAttribute('fill', 'red');
        return;
    }

    if(numbers.includes(strings[6])){
        states[12].setAttribute('fill', '#5CB85C');
    }else{
        states[12].setAttribute('fill', 'red');
        return;
    }

    if(strings[7] === "-"){
        states[13].setAttribute('fill', '#5CB85C');
    }else{
        states[13].setAttribute('fill', 'red');
        return;
    }

    if(alphabet.includes(strings[8])){
        states[14].setAttribute('fill', '#5CB85C');
        document.getElementById('q14F').setAttribute('fill', '#5CB85C')

    }else{
        states[9].setAttribute('fill', 'red');
        return;
    }
}

function thirdCase(){
    if(numbers.includes(strings[6])){
        states[16].setAttribute('fill', '#5CB85C');
    }else{
        states[16].setAttribute('fill', 'red');
    }

    if(strings[7] === "-"){
        states[17].setAttribute('fill', '#5CB85C');
    }else{
        states[17].setAttribute('fill', 'red');
    }

    if(alphabet.includes(strings[8])){
        states[18].setAttribute('fill', '#5CB85C');
        document.getElementById('q18F').setAttribute('fill', '#5CB85C')

    }else{
        states[18].setAttribute('fill', 'red');
        return;
    }
}

btn.addEventListener('click', validate);