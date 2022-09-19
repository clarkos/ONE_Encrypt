let auxForm = [['e', 'enter'],['i', 'imes'],['a', 'ai'],['o', 'ober'],['u', 'ufat']];

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

let switchBtn = document.getElementById('fnSwitch');
let inTxt = document.getElementById('mainInput');
let mensaje = document.getElementById('resultado');

$(document).ready(function() {
    $("#fnSwitch").on("change", function () {
        let resultado = '';
        if($(switchBtn).prop("checked") == true){
            resultado = encript(inTxt.value);
            mensaje.value = resultado;
            inTxt.value = '';
        } 
        if ($(switchBtn).prop("checked") == false){
            resultado = decript(inTxt.value);
            mensaje.value = resultado;
            inTxt.value = '';
        }
    })
});


function copiar (){
    inTxt.value = mensaje.value;
    mensaje.value = '';
}