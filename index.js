const btn = document.getElementById('btn_send');
const btn_clean = document.getElementById('btn_clean')

const states = [];
let strings = [];
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const inputElement = document.getElementById('string');

const q9 = document.getElementById('q9F')
const q14 = document.getElementById('q14F');
const q18 = document.getElementById('q18F');

for(let i = 0; i < 19; i++){
    states[i] = document.getElementById('q'+i);
}

function validate(){
    const string = inputElement.value;
    states[0].setAttribute('fill', '#5CB85C');
    
    if(string.length > 9){
        setTimeout(error, 2000);
        return;
    }

    for(const element of string){
        strings.push(element);
    }

    if(strings[0] === "D" || strings[0] === "E"){
        states[1].setAttribute('fill', '#5CB85C');
    }else{
        setTimeout(error, 1000);
        return;
    }

    if(strings[1] === "T"){
        states[2].setAttribute('fill', '#5CB85C');
    }else{
        setTimeout(error, 1000);
        return;
    }

    if(alphabet.includes(strings[2])){
        states[3].setAttribute('fill', '#5CB85C');
    }else{
        setTimeout(error, 1000);
        return;
    }

    if(strings[3] === "-"){
        states[4].setAttribute('fill', '#5CB85C');
    }else{
        setTimeout(error, 1000);
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
        setTimeout(error, 1000);
        return;
    }
}

function firstCase(){
    if(numbers.includes(strings[5])){
        states[6].setAttribute('fill', '#5CB85C');
    }else{
        setTimeout(error, 2000);
        return;
    }

    if(numbers.includes(strings[6])){
        states[7].setAttribute('fill', '#5CB85C');
    }else{
        setTimeout(error, 2000);
        return;
    }

    if(strings[7] === "-"){
        states[8].setAttribute('fill', '#5CB85C');
    }else{
        setTimeout(error, 2000);
        return;
    }

    if(alphabet.includes(strings[8])){
        states[9].setAttribute('fill', '#5CB85C');
        const q9F = document.getElementById('q9F');
        q9F.setAttribute('fill', '#5CB85C');
        setTimeout(correct, 4000);
    }else{
        setTimeout(error, 2000);
        return;
    }
}

function secondCase(){
    if(strings[5] === "0"){
        states[15].setAttribute('fill', '#5CB85C');
        thirdCase();
        return;
    }else if(numbers.includes(strings[5])){
        states[11].setAttribute('fill', '#5CB85C');
    }else{
        setTimeout(error, 2000);
        return;
    }

    if(numbers.includes(strings[6])){
        states[12].setAttribute('fill', '#5CB85C');
    }else{
        setTimeout(error, 2000);
        return;
    }

    if(strings[7] === "-"){
        states[13].setAttribute('fill', '#5CB85C');
    }else{
        setTimeout(error, 2000);
        return;
    }

    if(alphabet.includes(strings[8])){
        states[14].setAttribute('fill', '#5CB85C');
        q14.setAttribute('fill', '#5CB85C');
        setTimeout(correct, 4000);
    }else{
        setTimeout(error, 2000);
        return;
    }
}

function thirdCase(){
    if(numbers.includes(strings[6])){
        states[16].setAttribute('fill', '#5CB85C');
    }else{
        setTimeout(error, 2000);
        return;
    }

    if(strings[7] === "-"){
        states[17].setAttribute('fill', '#5CB85C');
    }else{
        setTimeout(error, 2000);
        return;
    }

    if(alphabet.includes(strings[8])){
        states[18].setAttribute('fill', '#5CB85C');
        q18.setAttribute('fill', '#5CB85C')
        setTimeout(correct, 4000)
    }else{
        setTimeout(error, 2000);
        return;
    }
}

function correct(){
    Swal.fire({
        title: "Sucess!!!",
        text: 'El automata es valido',
        icon: 'success',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
    })

    inputElement.value = '';
    strings = [];
}

function error(){
    Swal.fire({
        title: "Warning!!!",
        text: 'El automata NO es valido',
        icon: 'error',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
    })

    inputElement.value = '';
    strings = [];
}

btn.addEventListener('click', validate);
btn_clean.addEventListener('click', () => {
    for(const element of states){
        element.setAttribute('fill', 'white')
    }
    q14.setAttribute('fill', 'white')
    q18.setAttribute('fill', 'white')
    q9.setAttribute('fill', 'white')
})