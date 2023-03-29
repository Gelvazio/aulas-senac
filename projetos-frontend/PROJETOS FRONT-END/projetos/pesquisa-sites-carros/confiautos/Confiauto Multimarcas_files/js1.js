 var root = "http://" + window.location.host + "/";

 var url = "https://www.confiautosmultimarcas.com.br/";

 var root = "http://" + window.location.host + "/";
 /*var root = "http://" + window.location.host + "/sites/avv/";*/

 function getDescricaoClassificado(codigo, elemento) {
     var _p, _c, d;
     d = $id('descricao_' + codigo);
     if (!d) {
         d = $element('div');
         d.className = 'classificadosmenor';
         d.id = 'descricao_' + codigo;
         d.innerHTML = 'Carregando...';
         elemento.parentNode.appendChild(d, elemento);
         _p = 'cd=' + codigo;
         _c = {
             url: root + 'descricao_classificado.php',
             param: _p,
             type: 'text',
             asc: function(result) {
                 var r = result;
                 d.innerHTML = result;
             }
         };

         new $ajax(_c);
     } else {
         if (d.style.display == 'none') {
             d.style.display = '';
         } else {
             d.style.display = 'none'
         }
     }
 }

 function abrePagina1(img) {
     var carregar;
     carregar = new Image();
     carregar.src = img;
     document.getElementById("primeira").innerHTML = "<img src=\"" + carregar.src + "\" />";
 }

 /**
  * Consulta por ajax Marca / Modelo
  *
  * @param {String} tipo
  */

 function TestaVal() {
     if (document.form.tipo1.value == "") {
         alert("Selecione um Tipo")
         return false
     } else
     if (document.form.marca.value == "") {
         alert("Selecione uma Marca")
         return false
     }

     return true
 }

 function resetSelect(element) {
     while (element.length > 0)
         element.remove(0);
 }

 function menu_consulta(tipo, codigo) {
     var f, t, _p, _c;
     f = $id('menu_consulta');
     _p = 'cd=' + codigo + '&tp=' + tipo;
     _c = {
         url: root + 'consulta_menu.php',
         param: _p,
         type: 'json',
         asc: function(result) {
             var r, rS;
             rS = (r = result).ResultSet;
             if (tipo == 'tipo1') {
                 resetSelect(f.marca);
                 f.marca.options[0] = new Option('Selecione', '0');
                 for (var i = 0, c = 1; i < r.rowCount; i++, c++) {
                     f.marca.options[c] = new Option(rS[i].d, rS[i].c);
                 }
             } else
             if (tipo == 'marca') {
                 resetSelect(f.modelo);
                 f.modelo.options[0] = new Option('Selecione', '0');
                 for (var i = 0, c = 1; i < r.rowCount; i++, c++) {
                     f.modelo.options[c] = new Option(rS[i].d, rS[i].c);
                 }
             } else
             if (tipo == 'ano') {
                 resetSelect(f.ate);
                 f.ate.options[0] = new Option('--', '0');
                 for (var i = 0, c = 1; i < r.rowCount; i++, c++) {
                     f.ate.options[c] = new Option(rS[i].d, rS[i].c);
                 }
             }
         }
     }
     new $ajax(_c);
 }
