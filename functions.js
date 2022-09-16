/* La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
para usar con el metodo RegEx
let aCryp = /ai/;
let eCryp = /enter/;
let iCryp = /imes/;
let oCryp = /ober/;
let uCryp = /ufat/; */

let auxForm = [['a', 'ai'],['e', 'enter'],['i', 'imes'],['o', 'ober'],['u', 'ufat']];

const inTxt = document.getElementById('mainInput');
const mensaje = document.getElementById('resultado');

function encript (strCrypt){
    strCrypt = strCrypt.toLowerCase();
    for (let i = 0; i < auxForm.length; i++) {
        if (strCrypt.includes(auxForm[i][0])){
            strCrypt = strCrypt.replaceAll(auxForm[i][0], auxForm[i][1]);
        }
    }
    return strCrypt;
}

function decript (strCrypt){
    strCrypt = strCrypt.toLowerCase();
    for (let i = 0; i < auxForm.length; i++) {
        if (strCrypt.includes(auxForm[i][1])){
            strCrypt = strCrypt.replaceAll(auxForm[i][1], auxForm[i][0]);
        }
    }
    return strCrypt;
}

const funcion = document.getElementById('fnSwitch');
let switchBtn = getElementById('fnSwitch');

$(document).ready(function() {
    $("#fnSwitch").on("change", function () {
        btnProceed(this);
    })
});

function btnProceed(ele) {
    let resultado = '';
    if($(ele).prop("checked") == true){
        resultado = encript(inTxt.value);
        mensaje.value = resultado;
    } 
    if ($(ele).prop("checked") == false){
        resultado = decript(inTxt.value);
        mensaje.value = resultado;
        }
    }