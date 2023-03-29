function isLocal(){
    return false;
}


function isSupaBase(){
    return false;
}

function getUrlBase(port) {
    if (port == undefined) {
        port = "ping";
    }

    if(isLocal()){
        return "http://localhost/api-rh-senac-clone-php/api.php/" + port;
    }

    return "https://apiphpsenac.herokuapp.com/api.php/" + port;
}

function getHeaders() {
    if(isSupaBase()){
        return getHeadersSupabase();
    }

    return new Headers({
        "Accept": "Application/json",
        "apikey": getToken(),
        "Content-Type":"application/json"
    });
}

function getHeadersSupabase() {
    return new Headers({
        "apikey": getTokenSupabase(),
        "Authorization": "Bearer " + getTokenSupabase(),
    });
}

function getToken() {
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VlbWFpbCI6InJhaXNzYUBnbWFpbC5jb20iLCJ1c3VzZW5oYSI6IiQyeSQxMSRyUmNOWE5cL3VieE9CLlwvMEZkeG03US5xZlNFQjZjeEZtT2ZjeXdJZFJZTjlQaUk4WkhQMGZDIiwiZGF0YSI6IjIwMjItMTEtMzAiLCJ4LWFwaS1rZXkiOiJmS2hWRlp5QjdtLW45MkQzMjJnaE0tSDlKMDlZblRiTS0zM1hlY0tEZ0lILWRzWDV2QXhnclYtWXdQQ25HeFBWeiJ9.NkoNrQuGoHwUAiULODOcybAYJvBIaMKDrF9ZyZQuytc";
}

function getTokenSupabase() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkY3N6cXZ2cndkcWNuanZjb3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAyNTUxNTUsImV4cCI6MTk3NTgzMTE1NX0.U-3HSFgKo9ydTnKrpQsx5ytrBcLSpGwzVn6LqNwn14E";
}

function getMyInitFetchApi(method, body) {
    let usaBody = false;
    if (method == "POST") {
        usaBody = true;
    }

    if (usaBody) {
        return {
            method: method,
            headers: getHeaders(),
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body)
            //body:body
        };
    }

    return {
        method: method,
        headers: getHeaders(),
        mode: 'cors',
        cache: 'default'
    };
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

            console.log(data)

            //var data1 = JSON.stringify(data);

            //const dados = JSON.parse(data);

            if (oCall) {
                // Chama a function por parametor com os dados retornados...
                oCall(data);
            }

        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
}