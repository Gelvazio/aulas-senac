function loadUsersNotFound(aListaUsuarios) {

    let body = document.querySelector(".containerTable-body");

    aListaUsuariosNaoEncontrados = new Array();

    let token = 'YOUR-TOKEN';
    token = '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';

    aListaUsuarios.forEach(function(value, key) {
        console.log("key: " + key);
        console.log("value: " + value);

        let user = value;

        fetch('https://api.github.com/users/' + user, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    Authorization: `token ${token}`
                }
            })
            // Converting the response to a JSON object
            .then(response => response.json())
            .then(data => {
                let achouUsuario = false;
                if (data.message != 'Not Found') {
                    achouUsuario = true;
                }

                if (!achouUsuario) {
                    aListaUsuariosNaoEncontrados.push(user);
                }
            });
    });

    // Percorre os usuarios nao encontrados e mostra na tela
    aListaUsuariosNaoEncontrados.forEach(function(value, key) {
        console.log("key: " + key);
        console.log("value: " + value);

        let user = value;

        let link = "<a class='link-user' href='https://github.com/" + user + "'>" + user + "</a>";

        // details -> off
        details = '';
        body.innerHTML += `<tr>
                                <td class="containerTable-lblValue">` + user + `</td>
                                <td class="containerTable-lblValue">` + user + `</td>
                                <td class="containerTable-lblValue">` + user + `</td>
                                <td class="containerTable-lblValue">` + link + `</td>
                                <td class="containerTable-lblValue">` + user + `</td>
                                <td class="containerTable-lblValue">` + user + `</td>
                                <td class="containerTable-lblValue">` + user + `</td>
                                <td class="containerTable-lblValue">` + user + `</td>
                                <td class="containerTable-lblValue">` + user + `</td>
                                ` + details + `
                            </tr>`;
    });
}


function loadDataFromGithub(user, codigo, status, data_status) {

    // token expires at 16-10-2022
    let token = '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=====>_OLD_SCHOOL_NDSAYDB43429CDSNFDAS82RMMFMDAAD';

    token = 'YOUR-TOKEN';

    let achouUsuario = false;

    fetch('https://api.github.com/users/' + user, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                Authorization: `token ${token}`
            }
        })
        .then(response => response.json()) //Converting the response to a JSON object
        .then(data => {

            if (data.message != 'Not Found') {

                let link_github = "<a class='link-user' href='https://github.com/" + user + "'>" + user + "</a>";
                let link_avatar = "<img src=" + data.avatar_url + " title=" + user + " alt=" + user + ">";

                // carrega na table os dados do github
                let details = `<td class="containerTable-lblValue">
                                    <button class="tableValue-btnOption">Details</button>
                                    <button class="tableValue-btnOption">Edit</button>
                                    <button class="tableValue-btnOption">Delete</button>
                                </td>`;

                // details -> off
                details = '';
                let body = document.querySelector(".containerTable-body");

                body.innerHTML += `<tr>
                                        <td class="containerTable-lblValue ` + status + `">` + codigo + `</td>
                                        <td class="containerTable-lblValue ` + status + `">` + data.login + `</td>
                                        <td class="containerTable-lblValue ` + status + `">` + data.name + `</td>
                                        <td class="containerTable-lblValue ` + status + `">` + link_avatar + `</td>
                                        <td class="containerTable-lblValue ` + status + `">` + link_github + `</td>
                                        <td class="containerTable-lblValue ` + status + `">` + data.email + `</td>
                                        <td class="containerTable-lblValue ` + status + `">` + data_status + `</td>
                                        <td class="containerTable-lblValue ` + status + `">` + status + `</td>
                                        ` + details + `
                                    </tr>`;
            }
        })
        .catch(error => console.error(error));

    return achouUsuario;
}