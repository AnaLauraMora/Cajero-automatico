let montos ={
    '335588974': 5000,
    '335587459': 2000,
    '335583671': 1000
}

let url = new URL(window.location.href);
console.log(url);
let numCta = url.searchParams.get('numCta');

function actualizarSaldo(){
    const saldoActual =document.getElementById('saldoActual');
    saldoActual.innerHTML ='$' + montos[numCta];

}
function actualizarNumUsuario(){
    const numUsuario =document.getElementById('numUsuario');
    numUsuario.innerHTML = numCta;

}
actualizarSaldo();
actualizarNumUsuario();

const inputMonto = document.getElementById('inputMonto');
const ingresarMonto= document.getElementById('ingresarMonto');
ingresarMonto.addEventListener('click', function(e){
    let monto = inputMonto.value;
    monto= parseInt(monto);
    montos[numCta]= montos[numCta]+monto;
    actualizarSaldo();
    inputMonto.value='';
});