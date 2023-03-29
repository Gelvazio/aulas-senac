var TOKEN_SUPABASE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkY3N6cXZ2cndkcWNuanZjb3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAyNTUxNTUsImV4cCI6MTk3NTgzMTE1NX0.U-3HSFgKo9ydTnKrpQsx5ytrBcLSpGwzVn6LqNwn14E';

function isTesteLocal() {
    return false;
}

function loadDadosGoogle() {
    // Load google charts
    google.charts.load('current', {
        'packages': ['corechart']
    });
}

// Carrega Grafico de paises
function gerarGraficoPaises(tipoGrafico) {
    loadDadosGoogle();
    drawChartCountries(tipoGrafico);
}

function getTokenSupabase() {
    return TOKEN_SUPABASE;
}

// Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 8],
        ['Eat', 2],
        ['TV', 4],
        ['Gym', 2],
        ['Sleep', 8]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {
        'title': 'My Average Day',
        'width': 550,
        'height': 400
    };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

function drawChartCountries(tipoGrafico) {

    let quantidadeAsia = 0;
    let quantidadeAmericaNorte = 0;
    let quantidadeAmericaSul = 0;
    let quantidadeOceania = 0;
    let quantidadeAfrica = 0;
    let quantidadeEuropa = 0;
    let quantidadeAntarctica = 0;
    let quantidadeIndefinido = 0;

    let port = "countries";
    if (isTesteLocal()) {
        port = "countriestest";
    }

    callApi("GET", port, undefined, function(data) {
        const paises = data;

        // percorre os paises e conta quantos tem em cada continente
        paises.forEach(function(oPais, key) {
            if (oPais.continent != undefined) {
                if (oPais.continent == "Oceania") {
                    quantidadeOceania++;
                } else if (oPais.continent == "North America") {
                    quantidadeAmericaNorte++;
                } else if (oPais.continent == "Africa") {
                    quantidadeAfrica++;
                } else if (oPais.continent == "Europe") {
                    quantidadeEuropa++;
                } else if (oPais.continent == "Antarctica") {
                    quantidadeAntarctica++;
                } else if (oPais.continent == "South America") {
                    quantidadeAmericaSul++;
                } else if (oPais.continent == "Asia") {
                    quantidadeAsia++;
                }
            } else {
                quantidadeIndefinido++;
            }
        });

        // apos contar os paises, seta os dados no grafico
        // Lista a quantidade de paises por continente
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Paises por continente'],
            ['Asia', quantidadeAsia],
            ['Oceania', quantidadeOceania],
            ['America Norte', quantidadeAmericaNorte],
            ['America Sul', quantidadeAmericaSul],
            ['Africa', quantidadeAfrica],
            ['Europa', quantidadeEuropa],
            ['Antartica', quantidadeAntarctica],
            ['Indefinido', quantidadeIndefinido],
        ]);

        // Optional; add a title and set the width and height of the chart
        var options = {
            'title': 'Lista de paises por continente',
            'width': 550,
            'height': 400
        };

        // default pega piechart
        var chart = ""; //new google.visualization.PieChart(document.getElementById('countrieschart'));
        if (tipoGrafico == "piechart") {
            chart = new google.visualization.PieChart(document.getElementById('countrieschart'));
        } else if (tipoGrafico == "linechart") {
            chart = new google.visualization.LineChart(document.getElementById('countrieschart'));
        } else if (tipoGrafico == "columm") {
            chart = new google.visualization.ColumnChart(document.getElementById('countrieschart'));
        }

        chart.draw(data, options);
    });
}

function getPaginaInicial() {
    callApi("GET", undefined, undefined, function(data) {});
}

function getTutoriais() {
    callApi("GET", "tutoriais", undefined, function(data) {});
}

function getPaises() {
    callApi("GET", "countries", undefined, function(data) {});
}

function getUrlBase(port) {
    return   "https://vdcszqvvrwdqcnjvcoxt.supabase.co/rest/v1/countries?select=*";
    //return "https://vdcszqvvrwdqcnjvcoxt.supabase.co/rest/v1/countries?select=*";
}

function getMyInitFetchApi(method, body) {
    let usaBody = false;
    if (method == "POST") {
        usaBody = true;
    }

    if (usaBody) {
        return {
            method: method,
            //headers: getHeadersSupabase(),
            mode: 'cors',
            cache: 'no-cache',
            body: JSON.stringify(body)
        };
    }

    return {
        method: method,
        headers: getHeadersSupabase(),
        mode: 'cors',
        cache: 'no-cache'
    };
}

function getHeadersSupabase() {
    return new Headers({
        "apikey": getTokenSupabase(),
        "Authorization": "Bearer " + getTokenSupabase(),
    });
}

async function callApi(method, port, body, oCall) {

    if (body == undefined) {
        body = "";
    }

    if (method == undefined) {
        method = "GET";
    }

    if (port == undefined) {
        port = "ping";
    }

    // Define a url
    const url = getUrlBase(port);

    console.log("url gerada:" + url);

    const myInit = getMyInitFetchApi(method, body);

    const promise = await fetch(url, myInit)
        // Converting the response to a JSON object
        .then(response => response.json())
        .then(data => {
            if (oCall) {
                // Chama a function por parametor com os dados retornados...
                oCall(data);
            }
        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
}

// TESTES DA API DO CLONE DA UNIFIQUE
function listaFaturasUnifique() {

    let quantidadeAsia = 0;
    let quantidadeAmericaNorte = 0;
    let quantidadeAmericaSul = 0;
    let quantidadeOceania = 0;
    let quantidadeAfrica = 0;
    let quantidadeEuropa = 0;
    let quantidadeAntarctica = 0;
    let quantidadeIndefinido = 0;

    let port = "countries";

    callApi("GET", port, undefined, function(data) {
        const paises = data;

        // percorre os paises e conta quantos tem em cada continente
        paises.forEach(function(oPais, key) {
            if (oPais.continent != undefined) {
                if (oPais.continent == "Oceania") {
                    quantidadeOceania++;
                } else if (oPais.continent == "North America") {
                    quantidadeAmericaNorte++;
                } else if (oPais.continent == "Africa") {
                    quantidadeAfrica++;
                } else if (oPais.continent == "Europe") {
                    quantidadeEuropa++;
                } else if (oPais.continent == "Antarctica") {
                    quantidadeAntarctica++;
                } else if (oPais.continent == "South America") {
                    quantidadeAmericaSul++;
                } else if (oPais.continent == "Asia") {
                    quantidadeAsia++;
                }
            } else {
                quantidadeIndefinido++;
            }
        });

        // Preenche os dados na tabela de dados

    });
}

function drawChartCountriesTest(tipoGrafico) {

            let quantidadeAsia = 0;
            let quantidadeAmericaNorte = 0;
            let quantidadeAmericaSul = 0;
            let quantidadeOceania = 0;
            let quantidadeAfrica = 0;
            let quantidadeEuropa = 0;
            let quantidadeAntarctica = 0;
            let quantidadeIndefinido = 0;

            let port = "countries";
            if (isTesteLocal()) {
                port = "countriestest";
            }

            callApi("GET", port, undefined, function(data) {
                const paises = data;

                // percorre os paises e conta quantos tem em cada continente
                paises.forEach(function(oPais, key) {
                    if (oPais.continent != undefined) {
                        if (oPais.continent == "Oceania") {
                            quantidadeOceania++;
                        } else if (oPais.continent == "North America") {
                            quantidadeAmericaNorte++;
                        } else if (oPais.continent == "Africa") {
                            quantidadeAfrica++;
                        } else if (oPais.continent == "Europe") {
                            quantidadeEuropa++;
                        } else if (oPais.continent == "Antarctica") {
                            quantidadeAntarctica++;
                        } else if (oPais.continent == "South America") {
                            quantidadeAmericaSul++;
                        } else if (oPais.continent == "Asia") {
                            quantidadeAsia++;
                        }
                    } else {
                        quantidadeIndefinido++;
                    }
                });

                // // apos contar os paises, seta os dados no grafico
                // // Lista a quantidade de paises por continente
                // var data = google.visualization.arrayToDataTable([
                //     ['Task', 'Paises por continente'],
                //     ['Asia', quantidadeAsia],
                //     ['Oceania', quantidadeOceania],
                //     ['America Norte', quantidadeAmericaNorte],
                //     ['America Sul', quantidadeAmericaSul],
                //     ['Africa', quantidadeAfrica],
                //     ['Europa', quantidadeEuropa],
                //     ['Antartica', quantidadeAntarctica],
                //     ['Indefinido', quantidadeIndefinido],
                // ]);

                // // Optional; add a title and set the width and height of the chart
                // var options = {
                //     'title': 'Lista de paises por continente',
                //     'width': 550,
                //     'height': 400
                // };

                // // default pega piechart
                // var chart = ""; //new google.visualization.PieChart(document.getElementById('countrieschart'));
                // if (tipoGrafico == "piechart") {
                //     chart = new google.visualization.PieChart(document.getElementById('countrieschart'));
                // } else if (tipoGrafico == "linechart") {
                //     chart = new google.visualization.LineChart(document.getElementById('countrieschart'));
                // } else if (tipoGrafico == "columm") {
                //     chart = new google.visualization.ColumnChart(document.getElementById('countrieschart'));
                // }

                // chart.draw(data, options);
            });

        }

