function callApi() {
    const url = 'https://factor-erp-api.herokuapp.com/api.php/sistema';

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'apikey': '7CojClx9l62Mz6SJcEHFWZfK2NtSHXgI',
        'Authorization': `Bearer eyJ0eXAiOi`,
        'Accept': 'application/json'
    };

    /**
     * QUANDO PASSA O HEADERS NAO ESTA LIBERANDO O CORS!!!!
     * 
     */
    fetch(url, {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}