function obtemData(data){
	if(data){
		var set = document.getElementById("set");
		if(set == null)
		{
			alert("Deu merda!!");
		}

		var setor = set.options[set.selectedIndex].value; //problema aqui!!
		var url="reservas.php?data="+data+"&setor="+setor;
		//console.log("url");
//		var url="reservas.php?data="+data;
		requisicaoHTTP("GET",url,true);
	}
}

function trataDados(){
	var date = ajax.responseText;
	document.getElementById("date").innerHTML=date;
}
