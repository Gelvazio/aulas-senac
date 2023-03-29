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
        //headers: getHeaders(),
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

            console.log(data);

            if (oCall) {
                // Chama a function por parametro com os dados retornados...
                oCall(data);
            }

        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
}