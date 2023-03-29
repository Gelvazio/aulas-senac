function loadAjax(params, oDone, oFail, oAlways, oCall){
    if(params.url == undefined){
        params.url = "index.php";
    }

    if(params.oDone == undefined){
        params.oDone = false;    
    }

    if(params.oFail == undefined){
        params.oFail = false;
    }

    if(params.oAlways == undefined){
        params.oAlways = false;
    }
    
    if(params.oCall == undefined){
        params.oCall = false;
    }

    if(params.async == undefined){
        params.async = undefined;
    }

    if(params.cache == undefined){
        params.cache = false;
    }

    if(params.type == undefined){
        params.type = "POST";
    }

    if(params.data == undefined){
        params.data = "data=vazio";
    }

    if(params.param == undefined){
        params.param = "params=vazio";
    } else {
        params.param = loadParamsAjax(params.param);
    }

    if(params.settings == undefined){
        params.settings = ""; 
    }

    if(params.username == undefined){
        params.username = ""; 
    }

    if(params.password == undefined){
        params.password = ""; 
    }

    // api ajax 
    // https://api.jquery.com/jquery.ajax/

    // api xmlhttpRequest 
    // https://xhr.spec.whatwg.org/
    
    $.ajax({
        cache: params.cache,
        async: params.async,
        type : params.type,
        data : params.data,
        url  : params.url,
        username:params.username,
        password:params.password,
    })
    .done(function(ret){
        if(oDone){
            oDone(ret);
        }
    })
    .fail(function(ret){
        if(oFail){
            oFail(ret);
        }
    })
    .always(function(ret){
        if(oAlways){
            oAlways(ret);
        }
    });    
}

function loadParamsAjax(params){
    var retorno = "";
    for (var i = 0; i < params.length; i++){
        retorno = retorno + "&" + params.nome + "=" + params.valor;
    }
    return retorno;
}

function showCarregandoAjax(){
    $("#aguarde").css("display", "flex");
}

function hideCarregandoAjax(){
    $("#aguarde").css("display", "none");
    
    // Remove a mensagem do ajax
    $('#messageAjaxSucess').remove();
    $('#messageAjaxError').remove();
}

$(document).ajaxSuccess(function( event, request, settings ) {
    onCompleteAjaxSuccess(event, request, settings );
});

$(document).ajaxError(function( event, request, settings ) {
    onCompleteAjaxError(event, request, settings );
});

function onCompleteAjaxSuccess(event, request, settings ){
    $("#messageAjaxSucess").css("display", "flex");
}

function onCompleteAjaxError(event, request, settings ){
    $("#messageAjaxError").css("display", "flex");
}

// ABAIXO SOMENTE TESTES
// ABAIXO SOMENTE TESTES
// ABAIXO SOMENTE TESTES
// ABAIXO SOMENTE TESTES
// ABAIXO SOMENTE TESTES
// ABAIXO SOMENTE TESTES
// ABAIXO SOMENTE TESTES
// ABAIXO SOMENTE TESTES
// ABAIXO SOMENTE TESTES
// ABAIXO SOMENTE TESTES
// ABAIXO SOMENTE TESTES
// ABAIXO SOMENTE TESTES


// funcoes para teste dos forms 
// https://api.jquery.com/category/selectors/form-selectors
// https://xhr.spec.whatwg.org/


// lista de parametros ajax 

// ajax 3.0 
// // Assign handlers immediately after making the request,
// // and remember the jqXHR object for this request
// var jqxhr = $.ajax( "example.php" )
//   .done(function() {
//     alert( "success" );
//   })
//   .fail(function() {
//     alert( "error" );
//   })
//   .always(function() {
//     alert( "complete" );
//   });
//  
// // Perform other work here ...
//  
// // Set another completion function for the request above
// jqxhr.always(function() {
//   alert( "second complete" );
// }); 
