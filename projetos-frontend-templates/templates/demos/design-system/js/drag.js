/******************************

Draggable Window: JS+CSS

JS designed by
Rogerio Alencar Lino Filho
email: rogeriolino@gmail.com
http://rogeriolino.wordpress.com/

******************************/
var x, y, offsetX, offsetY;
var id = "janela";
var drag = false;
var mini = false;
var offset = false;
//
//addStyle
var style = document.createElement("link");
style.setAttribute("rel", "stylesheet");
style.setAttribute("type", "text/css");
style.setAttribute("href", "script/style.css");
document.getElementsByTagName("head").item(0).appendChild(style);
//
function selecao(target, act) {
    if (!act) {
        if (typeof target.onselectstart != "undefined") //IE route
            target.onselectstart = function() { return false; }
        else if (typeof target.style.MozUserSelect != "undefined") //Firefox route
            target.style.MozUserSelect = "none";
        else //All other route (ie: Opera)
            target.onmousedown = function() { return false; }
    } else {
        if (typeof target.onselectstart != "undefined") //IE route
            target.onselectstart = function() { return true; }
        else if (typeof target.style.MozUserSelect != "undefined") //Firefox route
            target.style.MozUserSelect = "none";
        else //All other route (ie: Opera)
            target.onmousedown = function() { return true; }
    }
}
//
function findPos(obj) {
    var left = 0;
    var top = 0;
    if (obj.offsetParent) {
        left = obj.offsetLeft;
        top = obj.offsetTop;
        while (obj = obj.offsetParent) {
            left += obj.offsetLeft;
            top += obj.offsetTop;
        }
    }
    offsetX = left;
    offsetY = top;
}
//
function pos(event) {
    if (document.all) {
        x = window.event.clientX;
        y = window.event.clientY;
    } else {
        x = event.pageX;
        y = event.pageY;
    }
    if (!offset) {
        findPos(document.getElementById(id));
        offsetX = x - offsetX;
        offsetY = y - offsetY;
    }
    if (id) { var alvo = document.getElementById(id); }
    document.getElementById("pos").innerHTML = "x: " + x + "<br />y: " + y + "<br />offsetX: " + offsetX + "<br />offsetY: " + offsetY;
    var body = document.getElementsByTagName("body").item(0);
    if (drag) {
        alvo.style.top = (y - offsetY) + "px";
        alvo.style.left = (x - offsetX) + "px";
        alvo.style.cursor = "move";
        alvo.style.opacity = 0.7;
        alvo.style.filter = "alpha(opacity=70)";
        selecao(body, false);
    } else {
        alvo.style.cursor = "default";
        alvo.style.opacity = 1;
        alvo.style.filter = "alpha(opacity=100)";
        selecao(body, true);
    }
}
//
function startDrag() { drag = true;
    offset = true; }

function stopDrag() { drag = false;
    offset = false; }
//
function fechar() { document.getElementById(id).style.visibility = "hidden"; }

function abrir() { document.getElementById(id).style.visibility = "visible"; }
//
function minimax() {
    var obj = document.getElementById("conteudo");
    var btn = document.getElementById("minimax");
    if (!mini) {
        obj.style.display = "none";
        btn.innerHTML = "+";
        btn.setAttribute("title", "Maximizar");
        mini = true;
    } else {
        obj.style.display = "block";
        btn.innerHTML = "-";
        btn.setAttribute("title", "Minimizar");
        document.getElementById("statusbar").style.display = "block";
        mini = false;
    }
}
//
function esconder() {
    if (!mini) {
        minimax();
    }
    document.getElementById(id).style.top = 0;
    document.getElementById(id).style.left = 0;
    document.getElementById("statusbar").style.display = "none";
}
//
document.onmousemove = function(event) { pos(event); }
    //