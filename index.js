const btn = document.getElementById('btn_send');

function validate(e){
    const string = document.getElementById('string').value;
    alert(string)
    console.log(e)
}

btn.addEventListener('click', validate);