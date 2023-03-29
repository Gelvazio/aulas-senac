<!DOCTYPE html>
<html>
    <head>
        <meta charset="windows-1252">
        <title>jQuery</title>        
        <script type="text/javascript" src="jquery.js"></script>
        <script type="text/javascript"> 
            function chamaAjax(){
                var oDados = {'estado':$('#estado').val()};
                $.ajax({  url:'ajax.php',
                         type:'POST',
                        async:true,
                         data:oDados,
                      success:function(res){
                          $('#cidade').empty();
                          var aCidades = JSON.parse(res);
                          $.each(aCidades, function(key, value) {              
                              $('<option>').val(key).text(value).appendTo($('#cidade'));
                          });
                      }
                });
            }
         </script> 
    </head>
    <body>        
        <select id="estado" name="estado" value="0" onchange="chamaAjax()">
            <option value="0">Selecione</option>
            <option value="PR">Paraná</option>
            <option value="SC">Santa Catarina</option>
            <option value="RS">Rio Grande do Sul</option>            
        </select>
        <br/>
        <br/>
        <select id="cidade" name="cidade">
            
        </select>
    </body>
</html>