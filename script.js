const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const p = document.querySelector('#resultado');

btn.addEventListener('click', btnOnclick);


function btnOnclick(){
    const sumaInp = (Number(input1.value) + Number(input2.value));
    p.innerText = "Resultado: " + sumaInp;
}