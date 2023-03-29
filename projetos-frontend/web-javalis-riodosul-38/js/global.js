/**
 * Retorna o valor float formatado em moeda<br><br>
 * @example var sVlr = formataNum(1500.00); // Retorno será 1.500,00
 * @param num  Número em formato float
 * @type string
 */
function formataNum(num) {

    if (isNaN(num))
        num = "0";
    else if (num == null)
        num = "0";

    num = num.toString().replace(/\$|\,/g, '');


    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();

    if (cents < 10)
        cents = "0" + cents;

    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + '.' + num.substring(num.length - (4 * i + 3));

    return (((sign) ? '' : '-') + num + ',' + cents);
}

/**
 * Converte data em formato brasileiro para formato americano ou vice-e-versa
 * @param dtData Data a converter
 * @type string
 */
function converteData(dtData) {
    valor = dtData.indexOf("/");

    // Converte para modo americano
    if (valor > -1) {
        data = dtData.split('/');
        //ano, mes, dia
        dtNovData = data[2] + "-" + data[1] + "-" + data[0];
    } else {
        data = dtData.split('-');
        //dia, mes, ano
        dtNovData = data[2] + "/" + data[1] + "/" + data[0];
    }

    return dtNovData;
}