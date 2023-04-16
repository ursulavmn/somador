function soma() {
    var parcela01 = parseInt(document.form_soma.parcela01.value);
    var parcela02 = parseInt(document.form_soma.parcela02.value);
    var resultado = parcela01 + parcela02;
    return document.querySelector("[name='resultado']").value = resultado
}

//todas as vezes que voce pega o valor do input ele vem em forma de string

function subtrai() {
    var subtraindo = parseInt(document.form_subtrair.subtraindo.value);
    var subtraendo = parseInt(document.form_subtrair.subtraendo.value);
    var diferenca = subtraindo - subtraendo;
    return document.querySelector("[name='diferenca']").value = diferenca
}

function multiplicaca() {
    var parcela001 = parseInt(document.form_multiplicacao.parcela001.value);
    var parcela002 = parseInt(document.form_multiplicacao.parcela002.value);
    var multiplicacao_re = parcela001 * parcela002;
    return document.querySelector("[name='multiplicacao_re']").value = multiplicacao_re
}



function dividi() {
    var parcela0001 = parseInt(document.form_dividir.parcela0001.value);
    var parcela0002 = parseInt(document.form_dividir.parcela0002.value);
    var dividir = parcela0001 / parcela0002;
    return document.querySelector("[name='dividir']").value = dividir
}

