/**
 * Ultima alteração 08/02/2007 - 14:15H
 * 
 * @author Yuri Ruano do Nascimento
 * @copyright IBS Sistemas
 * @version 1.5
 */

/**
 * Pega elemento pelo id
 * @return {Array,Element}
 */
function $id() {
    var e,a,a_l;
    e = [];
    a = arguments;
    a_l = a.length;
    if(a_l == 1){
        if(typeof a[0] == 'string'){
            return document.getElementById(a[0]);
        }else {
            return a[0];
        }
    } else {
        for(var c = 0;c<a_l;c++){
            e.push(document.getElementById(a[c]));
        }	
        return e;
    }
}
/**
 * Pega elemento(s) por pelo nome e/ou pela propriedade
 * @param {Object} elemento
 * @param {Object} conf
 * @return {Array}
 */
function $name(elemento,conf){
    var o = conf||{};
    var a = $id(o.base);
    var b = o.atr||false;
    var v = o.val||false;
    var n = elemento;
    var e = null;
    var r = [];
    var t = RegExp(v);
    e = a ? a.getElementsByTagName(n ): document.getElementsByTagName(n);
    if(b){
        for(var c = 0;c<e.length;c++){
            if(t.test(e[c].getAttribute(b))){
                r.push(e[c]);
            }
        }
        return r;
    }
    return e;	
}

function $element(t,x){
    var e = null;
    if(x){
        e = [];
        for(var c=0;c<x;c++){
            e.push(document.createElement(t));
        }
    }else {
        e = document.createElement(t);
    }
    
    return e;
}

function $text(t){
    return document.createTextNode(t);
}

function $append(){
    var a,aL; 
    aL = (a = arguments).length;
    if(aL == 2){
        a[0].appendChild(a[1]);
    } else {
        for(var c = 1;c<aL;c++){
            a[0].appendChild(a[c]);
        }
    }
    
}

function $remove(){
    var a,aL; 
    aL = (a = arguments).length;
    if(aL == 2){
        a[0].removeChild(a[1]);
    } else {
        for(var c = 1;c<aL;c++){
            a[0].removeChild(a[c]);
        }
    }
}

function $child(base,obj){
    var a,o,b,t,e,l,r;
    a = base;
    o = obj;
    b = o.prop||false;
    t = RegExp(o.val);
    e = a.childNodes;
    l = e.length;
    if(b){
        r = [];
        for(var c = 0;c<l;c++){
            if(t.test(e[c].getAttribute(b))){
                r.push(e[c]);
            }
        }
    }else {
        return	a.childNodes[o.indice];
    }
}

function $v(elemento){
    var e,r;
    e = elemento;
}

/**
 * Seta um atributo para um elemento (subistitui o existente)
 * @param {Element} elemento
 * @param {String} atributo
 * @param {String} valor
 */
function $s(elemento,atributo,valor){
    var e;
    e = elemento;
    e.setAttribute(atributo,valor)
};

/**
 * Pega um atributo de um elemento
 * @param {Element} elemento
 * @param {String} atributo
 * @return {String}
 */
function $g(elemento,atributo){
    var e,r;
    e = elemento;
    r = e.getAttribute(atributo);
    return r||'';
};

/**
 * Remove um atributo de um elemento
 * @param {Element} elemento
 * @param {String} atributo
 */
function $r(elemento,atributo){
    var e;
    e = elemento;
    e.removeAttribute(atributo);
};

function $parent(b,n){
    var o, r, n;
    o = b;
    r = false;
    n = n||1;
    if(n == 1){
        r = o.parentNode;
    } else {
        r = o;
        for(var c = 0;c<n;c++){
            r = r.parentNode;
        }	
    }
    return r;
}

var $class = {
    create: function(){
        return function(){
            this.init.apply(this,arguments);
        }
    },
    extend: function(){
        return function(source){
            var s = source;
            for (property in s) {		
                if(s[property].constructor == Function){
                    if(!this.prototype[property]) this.prototype[property] = s[property];	
                }else {			
                    if(property == 'prototype'){
                        for (a in s[property]){
                            if(!this.prototype[a])
                                this.prototype[a] = s[property][a];
                        }
                    }
                }		
            }
        }
    }
}
Function.prototype.extend = new $class.extend();

function Is(){
    var agt=navigator.userAgent.toLowerCase();
    
    this.major = parseInt(navigator.appVersion);
    this.minor = parseFloat(navigator.appVersion);
    this.nav  = ((agt.indexOf('mozilla')!=-1) && ((agt.indexOf('spoofer')==-1)
    && (agt.indexOf('compatible') == -1)));
    this.nav2 = (this.nav && (this.major == 2));
    this.nav3 = (this.nav && (this.major == 3));
    this.vms   = (agt.indexOf("vax")!=-1) || (agt.indexOf("openvms")!=-1);
}

var is = new Is();
$atr_class = is.nav ? 'class' : 'className';
$atr_style = is.nav ? 'style' : 'cssText';