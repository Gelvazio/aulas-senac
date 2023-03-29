function escondeCorretorBarra() {
    $(".corretor_menos").hide(), $(".corretor_mais").show(), $(".corretor_texto").slideToggle()
}

function exibeCorretorBarra() {
    $(".corretor_menos").show(), $(".corretor_mais").hide(), $(".corretor_texto").slideToggle()
}

function escondeSmartBar() {
    $(".boxBarra .boxSeta1").hide(), $(".boxBarra .smartbar").hide(), $(".boxBarra .boxSeta2").show(), ajax({ action: "escondeSmartBar", valor: "1" }, function(e) {})
}

function mostrarSmartBar() {
    $(".boxBarra .boxSeta2").hide(), $(".boxBarra .boxSeta1").show(), $(".boxBarra .smartbar").show(), ajax({ action: "escondeSmartBar", valor: "" }, function(e) {})
}

function fecharFB() {
    $(".facebook").hide(), $(".facebook_frame").show(), $(".facebook_frame").html("<iframe src='https://www.univencrm.com.br/sites_login_facebook/?raiz=" + window.location.href + "&url=" + window.location.href + "' frameborder='0' style='width:150px; height:30px; float:right;' scrolling='no' ></iframe>"), ajax({ action: "fecharFB" }, function(e) {})
}

function trocarOportunidades(e) {
    try {
        1 == e ? pagina_oportunidades++ : pagina_oportunidades--, $(".banner_oportunidades_prontos").each(function() {
            if ($(this).children("div").length > 1) {
                pagina_oportunidades == $(this).children("div").length && (pagina_oportunidades = 0), pagina_oportunidades < 0 && (pagina_oportunidades = $(this).children("div").length - 1);
                var e = 0;
                $(this).children("div").each(function() { e == pagina_oportunidades ? $(this).show() : $(this).hide(), e++ })
            }
        })
    } catch (e) {}
}

function selecionar(e, t) {
    if ("finalidade" == e) {
        mobile || $("#" + t + "tipo").multiselect("destroy"), $("#" + t + "tipo").html("");
        try { $("#tipo").prepend('<option value="" disabled="true" selected="true">Tipos</option>') } catch (e) {}
        try { $("#tipo").append('<option value="">Todos</option>') } catch (e) {}
        if ($.each(tipos(localizacoes, $("#" + t + "finalidade").val()), function(e, a) { $("#" + t + "tipo").append('<option value="' + a + '">' + a + "</option>") }), mobile || $("#" + t + "tipo").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Tipo", allSelectedText: "Tipos" }).multiselect("refresh"), mobile || $("#" + t + "condominios").multiselect("destroy"), $("#" + t + "condominios").html(""), mobile) { try { $("#condominios").prepend('<option value="todos" disabled="true" selected="true">CondomÃ­nios</option>') } catch (e) {} try { $("#" + t + "condominios").append('<option value="todos">Todos</option>') } catch (e) {} } else try { $("#" + t + "condominios").append('<option value="todos">Todos</option>') } catch (e) {}
        $.each(condominios(localizacoes, $("#" + t + "finalidade").val(), $("#" + t + "tipo").val(), $("#" + t + "cidade").val()), function(e, a) { 0 == $("#" + t + "condominios option[value='" + a + "']").length && 0 == $("#" + t + "condominios option[value='" + a.removeDiacritics() + "']").length && $("#" + t + "condominios").append('<option value="' + a + '">' + a + "</option>") }), mobile || $("#" + t + "condominios").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "CondomÃ­nio", allSelectedText: "CondomÃ­nios" }).multiselect("refresh"), mobile || $("#" + t + "cidade").multiselect("destroy"), $("#" + t + "cidade").html("");
        try { $("#cidade").prepend('<option value="" disabled="true" selected="true">Cidades</option>') } catch (e) {}
        try { $("#cidade").append('<option value="">Todos</option>') } catch (e) {}
        if ($.each(cidades(localizacoes, $("#" + t + "finalidade").val(), $("#" + t + "tipo").val(), $("#" + t + "uf").val()), function(e, a) { 0 == $("#" + t + "cidade option[value='" + a + "']").length && $("#" + t + "cidade").append('<option value="' + a + '">' + a + "</option>") }), mobile || $("#" + t + "cidade").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Cidade", allSelectedText: "Cidades" }).multiselect("refresh"), mobile || $("#" + t + "bairro").multiselect("destroy"), $("#" + t + "bairro").html(""), mobile) try { $("#bairro").prepend('<option value="" disabled="true" selected="true">Bairros</option>') } catch (e) {} else try { $("#bairro").prepend('<option value="" disabled="true">Bairros</option>') } catch (e) {}
        try { $("#bairro").append('<option value="">Todos</option>') } catch (e) {}
        $.each(bairros(localizacoes, $("#" + t + "finalidade").val(), $("#" + t + "tipo").val(), $("#" + t + "uf").val(), $("#" + t + "cidade").val()), function(e, a) { 0 == $("#" + t + "bairro option[value='" + a + "']").length && 0 == $("#" + t + "bairro option[value='" + a.removeDiacritics() + "']").length && $("#" + t + "bairro").append('<option value="' + a + '">' + a + "</option>") }), mobile || $("#" + t + "bairro").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, numberDisplayed: 0, buttonWidth: "100%", nSelectedText: "bairro(s)", filterPlaceholder: "Pesquisar", nonSelectedText: "Bairro", allSelectedText: "Bairros" }), "comprar" == $("#" + t + "finalidade").val() && (mobile || $("#" + t + "valor").multiselect("destroy"), $("#" + t + "valor").html(""), $.each(faixa_valor.venda, function(e, a) { $("#" + t + "valor").append('<option value="' + a.valor + '">' + a.label + "</option>") }), mobile || $("#" + t + "valor").multiselect({ maxHeight: 250, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Valor" })), "alugar" == $("#" + t + "finalidade").val() && (mobile || $("#" + t + "valor").multiselect("destroy"), $("#" + t + "valor").html(""), $.each(faixa_valor.locacao, function(e, a) { $("#" + t + "valor").append('<option value="' + a.valor + '">' + a.label + "</option>") }), mobile || $("#" + t + "valor").multiselect({ maxHeight: 250, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Valor" })), "estudante" == $("#" + t + "finalidade").val() && (mobile || $("#" + t + "valor").multiselect("destroy"), $("#" + t + "valor").html(""), $.each(faixa_valor.locacao, function(e, a) { $("#" + t + "valor").append('<option value="' + a.valor + '">' + a.label + "</option>") }), mobile || $("#" + t + "valor").multiselect({ maxHeight: 250, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Valor" })), "temporada" == $("#" + t + "finalidade").val() && (mobile || $("#" + t + "valor").multiselect("destroy"), $("#" + t + "valor").html(""), $.each(faixa_valor.locacao, function(e, a) { $("#" + t + "valor").append('<option value="' + a.valor + '">' + a.label + "</option>") }), mobile || $("#" + t + "valor").multiselect({ maxHeight: 250, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Valor" })), "permuta" == $("#" + t + "finalidade").val() && (mobile || $("#" + t + "valor").multiselect("destroy"), $("#" + t + "valor").html(""), $.each(faixa_valor.locacao, function(e, a) { $("#" + t + "valor").append('<option value="' + a.valor + '">' + a.label + "</option>") }), mobile || $("#" + t + "valor").multiselect({ maxHeight: 250, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Valor" })), "comprar,alugar" == $("#" + t + "finalidade").val() && (mobile || $("#" + t + "valor").multiselect("destroy"), $("#" + t + "valor").html(""), $.each(faixa_valor.venda_locacao, function(e, a) { $("#" + t + "valor").append('<option value="' + a.valor + '">' + a.label + "</option>") }), mobile || $("#" + t + "valor").multiselect({ maxHeight: 250, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Valor" }))
    }
    if ("tipo" == e) {
        mobile || $("#" + t + "subtipo").multiselect("destroy"), $("#" + t + "subtipo").html("");
        try { $("#subtipo").prepend('<option value="">Todos</option>') } catch (e) {}
        $.each(subtipos(localizacoes, $("#" + t + "tipo").val()), function(e, a) { $("#" + t + "subtipo").append('<option value="' + a + '">' + a + "</option>") }), mobile || $("#" + t + "subtipo").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Subtipo", allSelectedText: "Subtipos" }).multiselect("refresh"), mobile || $("#" + t + "uf").multiselect("destroy"), $("#" + t + "uf").html(""), $.each(uf(localizacoes, $("#" + t + "tipo").val()), function(e, a) { $("#" + t + "uf").append('<option value="' + a + '">' + a + "</option>") }), mobile || $("#" + t + "uf").multiselect({ maxHeight: 250, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "UF" }).multiselect("refresh"), mobile || $("#" + t + "cidade").multiselect("destroy"), $("#" + t + "cidade").html("");
        try { $("#cidade").prepend('<option value="" disabled="true" selected="true">Cidades</option>') } catch (e) {}
        try { $("#cidade").append('<option value="">Todos</option>') } catch (e) {}
        if ($.each(cidades(localizacoes, $("#" + t + "finalidade").val(), $("#" + t + "tipo").val(), $("#" + t + "uf").val()), function(e, a) { 0 == $("#" + t + "cidade option[value='" + a + "']").length && $("#" + t + "cidade").append('<option value="' + a + '">' + a + "</option>") }), mobile || $("#" + t + "cidade").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Cidade", allSelectedText: "Cidades" }).multiselect("refresh"), mobile || $("#" + t + "bairro").multiselect("destroy"), $("#" + t + "bairro").html(""), mobile) try { $("#bairro").prepend('<option value="" disabled="true" selected="true">Bairros</option>') } catch (e) {} else try { $("#bairro").prepend('<option value="" disabled="true">Bairros</option>') } catch (e) {}
        try { $("#bairro").append('<option value="">Todos</option>') } catch (e) {}
        if ($.each(bairros(localizacoes, $("#" + t + "finalidade").val(), $("#" + t + "tipo").val(), $("#" + t + "uf").val(), $("#" + t + "cidade").val()), function(e, a) { 0 == $("#" + t + "bairro option[value='" + a + "']").length && 0 == $("#" + t + "bairro option[value='" + a.removeDiacritics() + "']").length && $("#" + t + "bairro").append('<option value="' + a + '">' + a + "</option>") }), mobile || $("#" + t + "bairro").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, numberDisplayed: 0, buttonWidth: "100%", nSelectedText: "bairro(s)", filterPlaceholder: "Pesquisar", nonSelectedText: "Bairro", allSelectedText: "Bairros" }), mobile || $("#" + t + "condominios").multiselect("destroy"), $("#" + t + "condominios").html(""), mobile) { try { $("#condominios").prepend('<option value="todos" disabled="true" selected="true">CondomÃ­nios</option>') } catch (e) {} try { $("#" + t + "condominios").append('<option value="todos">Todos</option>') } catch (e) {} } else try { $("#" + t + "condominios").append('<option value="todos">Todos</option>') } catch (e) {}
        $.each(condominios(localizacoes, $("#" + t + "finalidade").val(), $("#" + t + "tipo").val(), $("#" + t + "cidade").val()), function(e, a) { 0 == $("#" + t + "condominios option[value='" + a + "']").length && 0 == $("#" + t + "condominios option[value='" + a.removeDiacritics() + "']").length && $("#" + t + "condominios").append('<option value="' + a + '">' + a + "</option>") }), mobile || $("#" + t + "condominios").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "CondomÃ­nio", allSelectedText: "CondomÃ­nios" }).multiselect("refresh")
    }
    if ("uf" == e) {
        mobile || $("#" + t + "cidade").multiselect("destroy"), $("#" + t + "cidade").html("");
        try { $("#" + t + "cidade").prepend('<option value="" disabled="true" selected="true">Cidades</option>') } catch (e) {}
        try { $("#" + t + "cidade").append('<option value="">Todos</option>') } catch (e) {}
        if ($.each(cidades(localizacoes, $("#" + t + "finalidade").val(), $("#" + t + "tipo").val(), $("#" + t + "uf").val()), function(e, a) { 0 == $("#" + t + "cidade option[value='" + a + "']").length && $("#" + t + "cidade").append('<option value="' + a + '">' + a + "</option>") }), mobile || $("#" + t + "cidade").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Cidade", allSelectedText: "Cidades" }).multiselect("refresh"), mobile || $("#" + t + "bairro").multiselect("destroy"), $("#" + t + "bairro").html(""), mobile) try { $("#bairro").prepend('<option value="" disabled="true" selected="true">Bairros</option>') } catch (e) {} else try { $("#bairro").prepend('<option value="" disabled="true">Bairros</option>') } catch (e) {}
        try { $("#bairro").append('<option value="">Todos</option>') } catch (e) {}
        if ($.each(bairros(localizacoes, $("#" + t + "finalidade").val(), $("#" + t + "tipo").val(), $("#" + t + "uf").val(), $("#" + t + "cidade").val()), function(e, a) { 0 == $("#" + t + "bairro option[value='" + a + "']").length && 0 == $("#" + t + "bairro option[value='" + a.removeDiacritics() + "']").length && $("#" + t + "bairro").append('<option value="' + a + '">' + a + "</option>") }), mobile || $("#" + t + "bairro").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, numberDisplayed: 0, buttonWidth: "100%", nSelectedText: "bairro(s)", filterPlaceholder: "Pesquisar", nonSelectedText: "Bairro", allSelectedText: "Bairros" }), mobile || $("#" + t + "condominios").multiselect("destroy"), $("#" + t + "condominios").html(""), mobile) { try { $("#condominios").prepend('<option value="todos" disabled="true" selected="true">CondomÃ­nios</option>') } catch (e) {} try { $("#" + t + "condominios").append('<option value="todos">Todos</option>') } catch (e) {} } else try { $("#" + t + "condominios").append('<option value="todos">Todos</option>') } catch (e) {}
        $.each(condominios(localizacoes, $("#" + t + "finalidade").val(), $("#" + t + "tipo").val(), $("#" + t + "cidade").val()), function(e, a) { 0 == $("#" + t + "condominios option[value='" + a + "']").length && 0 == $("#" + t + "condominios option[value='" + a.removeDiacritics() + "']").length && $("#" + t + "condominios").append('<option value="' + a + '">' + a + "</option>") }), mobile || $("#" + t + "condominios").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "CondomÃ­nio", allSelectedText: "CondomÃ­nios" }).multiselect("refresh")
    }
    if ("cidade" == e) {
        if (mobile || $("#" + t + "bairro").multiselect("destroy"), $("#" + t + "bairro").html(""), mobile) try { $("#bairro").prepend('<option value="" disabled="true" selected="true">Bairros</option>') } catch (e) {} else try { $("#bairro").prepend('<option value="" disabled="true">Bairros</option>') } catch (e) {}
        try { $("#bairro").append('<option value="">Todos</option>') } catch (e) {}
        if ($.each(bairros(localizacoes, $("#" + t + "finalidade").val(), $("#" + t + "tipo").val(), $("#" + t + "uf").val(), $("#" + t + "cidade").val()), function(e, a) { 0 == $("#" + t + "bairro option[value='" + a + "']").length && 0 == $("#" + t + "bairro option[value='" + a.removeDiacritics() + "']").length && $("#" + t + "bairro").append('<option value="' + a + '">' + a + "</option>") }), mobile || $("#" + t + "bairro").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, numberDisplayed: 0, buttonWidth: "100%", nSelectedText: "bairro(s)", filterPlaceholder: "Pesquisar", nonSelectedText: "Bairro", allSelectedText: "Bairros" }), mobile || $("#" + t + "condominios").multiselect("destroy"), $("#" + t + "condominios").html(""), mobile) { try { $("#condominios").prepend('<option value="todos" disabled="true" selected="true">CondomÃ­nios</option>') } catch (e) {} try { $("#" + t + "condominios").append('<option value="todos">Todos</option>') } catch (e) {} } else try { $("#" + t + "condominios").append('<option value="todos">Todos</option>') } catch (e) {}
        $.each(condominios(localizacoes, $("#" + t + "finalidade").val(), $("#" + t + "tipo").val(), $("#" + t + "cidade").val()), function(e, a) { 0 == $("#" + t + "condominios option[value='" + a + "']").length && 0 == $("#" + t + "condominios option[value='" + a.removeDiacritics() + "']").length && $("#" + t + "condominios").append('<option value="' + a + '">' + a + "</option>") }), mobile || $("#" + t + "condominios").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "CondomÃ­nio", allSelectedText: "CondomÃ­nios" }).multiselect("refresh")
    }
}

function tipos(e, t) {
    var a = [],
        i = 0;
    return $.each(e, function() { e[i]._id.inf_tipo && -1 === $.inArray(e[i]._id.inf_tipo.toUpperCase().removeDiacritics(), a) && -1 === $.inArray(e[i]._id.inf_tipo.toUpperCase(), a) && ("comprar" == t && 1 == e[i]._id.inf_venda && a.push(e[i]._id.inf_tipo.toUpperCase()), "alugar" == t && 1 == e[i]._id.inf_locacao && a.push(e[i]._id.inf_tipo.toUpperCase()), "estudante" == t && 1 == e[i]._id.inf_locacao_estu && a.push(e[i]._id.inf_tipo.toUpperCase()), "temporada" == t && 1 == e[i]._id.inf_temporada && a.push(e[i]._id.inf_tipo.toUpperCase()), "permuta" == t && 1 == e[i]._id.inf_permuta && a.push(e[i]._id.inf_tipo.toUpperCase()), "" != t && "comprar,alugar" != t && null != t || a.push(e[i]._id.inf_tipo.toUpperCase())), i++ }), a.sort()
}

function subtipos(e, t) {
    var a = [],
        i = 0;
    return $.each(e, function() { e[i]._id.inf_subtipo && -1 === $.inArray(e[i]._id.inf_subtipo.toUpperCase().removeDiacritics(), a) && (e[i]._id.inf_tipo.toUpperCase() != t.toUpperCase() && "" != t || a.push(e[i]._id.inf_subtipo.toUpperCase())), i++ }), a.sort()
}

function uf(e, t) {
    var a = [],
        i = 0;
    return void 0 == t && (t = ""), $.each(e, function() { e[i]._id.inf_uf && -1 === $.inArray(e[i]._id.inf_uf.toUpperCase().removeDiacritics(), a) && (e[i]._id.inf_tipo.toUpperCase() != t.toUpperCase() && "" != t || a.push(e[i]._id.inf_uf.toUpperCase())), i++ }), a.sort()
}

function cidades(e, t, a, i) {
    var o = [],
        r = 0;
    return void 0 == a && (a = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : ""), void 0 == i && (i = void 0 != $("#filtro-uf").val() ? $("#filtro-uf").val() : ""), "" == i ? $.each(e, function() { var i = !1; "comprar" == t && 1 == e[r]._id.inf_venda && (i = !0), "alugar" == t && 1 == e[r]._id.inf_locacao && (i = !0), "estudante" == t && 1 == e[r]._id.inf_locacao_estu && (i = !0), "temporada" == t && 1 == e[r]._id.inf_temporada && (i = !0), "permuta" == t && 1 == e[r]._id.inf_permuta && (i = !0), "" == t && (i = !0), e[r]._id.inf_cidade && -1 === $.inArray(e[r]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics() + " - " + e[r]._id.inf_uf.toUpperCase().replace(/\s+/g, " ").removeDiacritics(), o) && (e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && i || "" == a && i) && o.push(e[r]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics() + " - " + e[r]._id.inf_uf.toUpperCase().replace(/\s+/g, " ")), r++ }) : $.each(e, function() { var l = !1; "comprar" == t && 1 == e[r]._id.inf_venda && (l = !0), "alugar" == t && 1 == e[r]._id.inf_locacao && (l = !0), "estudante" == t && 1 == e[r]._id.inf_locacao_estu && (l = !0), "temporada" == t && 1 == e[r]._id.inf_temporada && (l = !0), "permuta" == t && 1 == e[r]._id.inf_permuta && (l = !0), "" == t && (l = !0), e[r]._id.inf_cidade && -1 === $.inArray(e[r]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics() + " - " + e[r]._id.inf_uf.toUpperCase().replace(/\s+/g, " ").removeDiacritics(), o) && (e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && e[r]._id.inf_uf.toUpperCase() == i.toUpperCase() && l || "" == a && e[r]._id.inf_uf.toUpperCase() == i.toUpperCase() && l) && o.push(e[r]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics() + " - " + e[r]._id.inf_uf.toUpperCase().replace(/\s+/g, " ")), r++ }), o.sort()
}

function cidadesAutocomplete(e) {
    var t = 0,
        a = [];
    return $.each(e, function() {-1 === $.inArray(e[t]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "") + " (" + e[t]._id.inf_uf.toUpperCase().replace(/\s+/g, " ").replace("'", "") + ")", a) && a.push(e[t]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "") + " (" + e[t]._id.inf_uf.toUpperCase().replace(/\s+/g, " ").replace("'", "") + ")"), t++ }), a.sort()
}

function bairros(e, t, a, i, o) {
    void 0 == o && (o = void 0 != $("#filtro-cidade").val() ? $("#filtro-cidade").val() : ""), "" != o && (o = o.split(" - ")), void 0 == a && (a = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : ""), void 0 == i && (i = void 0 != $("#filtro-uf").val() ? $("#filtro-uf").val() : "");
    var r = [],
        l = 0;
    return $.each(e, function() { var n = !1; "comprar" == t && 1 == e[l]._id.inf_venda && (n = !0), "alugar" == t && 1 == e[l]._id.inf_locacao && (n = !0), "estudante" == t && 1 == e[l]._id.inf_locacao_estu && (n = !0), "temporada" == t && 1 == e[l]._id.inf_temporada && (n = !0), "permuta" == t && 1 == e[l]._id.inf_permuta && (n = !0), "" == t && (n = !0), e[l]._id.inf_bairro && -1 === $.inArray(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics(), r) && ("" != i ? "" != o ? "" != a ? e[l]._id.inf_uf.toUpperCase().removeDiacritics() == i.toUpperCase().removeDiacritics() && e[l]._id.inf_cidade.toUpperCase().removeDiacritics() == o[0].toUpperCase().removeDiacritics() && e[l]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[l]._id.inf_uf.toUpperCase().removeDiacritics() == i.toUpperCase().removeDiacritics() && e[l]._id.inf_cidade.toUpperCase().removeDiacritics() == o[0].toUpperCase().removeDiacritics() && n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != a ? e[l]._id.inf_uf.toUpperCase().removeDiacritics() == i.toUpperCase().removeDiacritics() && e[l]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[l]._id.inf_uf.toUpperCase().removeDiacritics() == i.toUpperCase().removeDiacritics() && n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != o ? "" != a ? e[l]._id.inf_cidade.toUpperCase().removeDiacritics() == o[0].toUpperCase().removeDiacritics() && e[l]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[l]._id.inf_cidade.toUpperCase().removeDiacritics() == o[0].toUpperCase().removeDiacritics() && n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != a ? e[l]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : n && r.push(e[l]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", ""))), l++ }), r.sort()
}

function bairrosAutocomplete(e) {
    var t = 0,
        a = [];
    return $.each(e, function() {-1 === $.inArray(e[t]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "") + " (" + e[t]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "") + " - " + e[t]._id.inf_uf.toUpperCase().replace(/\s+/g, " ").replace("'", "") + ")", a) && a.push(e[t]._id.inf_bairro.toUpperCase().replace(/\s+/g, " ").replace("'", "") + " (" + e[t]._id.inf_cidade.toUpperCase().replace(/\s+/g, " ").replace("'", "") + " - " + e[t]._id.inf_uf.toUpperCase().replace(/\s+/g, " ").replace("'", "") + ")"), t++ }), a.sort()
}

function condominios(e, t, a, i) {
    void 0 == i && (i = void 0 != $("#filtro-cidade").val() ? $("#filtro-cidade").val() : ""), "" != i && (i = i.split(" - ")), void 0 == a && (a = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : "");
    var o = [],
        r = 0;
    return $.each(e, function() { var l = !1; "comprar" == t && 1 == e[r]._id.inf_venda && (l = !0), "alugar" == t && 1 == e[r]._id.inf_locacao && (l = !0), "estudante" == t && 1 == e[r]._id.inf_locacao_estu && (l = !0), "temporada" == t && 1 == e[r]._id.inf_temporada && (l = !0), "permuta" == t && 1 == e[r]._id.inf_permuta && (l = !0), "" == t && (l = !0), e[r]._id.inf_condonome && -1 === $.inArray(e[r]._id.inf_condonome.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics(), o) && ("" != i ? "" != a ? e[r]._id.inf_cidade.toUpperCase().removeDiacritics() == i[0].toUpperCase().removeDiacritics() && e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_condonome.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[r]._id.inf_cidade.toUpperCase().removeDiacritics() == i[0].toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_condonome.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != a ? e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_condonome.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : l && o.push(e[r]._id.inf_condonome.toUpperCase().replace(/\s+/g, " ").replace("'", ""))), r++ }), o.sort()
}

function regiao(e, t, a, i) {
    void 0 == i && (i = void 0 != $("#filtro-cidade").val() ? $("#filtro-cidade").val() : ""), "" != i && (i = i.split(" - ")), void 0 == a && (a = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : "");
    var o = [],
        r = 0;
    return $.each(e, function() { var l = !1; "comprar" == t && 1 == e[r]._id.inf_venda && (l = !0), "alugar" == t && 1 == e[r]._id.inf_locacao && (l = !0), "estudante" == t && 1 == e[r]._id.inf_locacao_estu && (l = !0), "temporada" == t && 1 == e[r]._id.inf_temporada && (l = !0), "permuta" == t && 1 == e[r]._id.inf_permuta && (l = !0), "" == t && (l = !0), e[r]._id.inf_regiao && -1 === $.inArray(e[r]._id.inf_regiao.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics(), o) && ("" != i ? "" != a ? e[r]._id.inf_cidade.toUpperCase().removeDiacritics() == i[0].toUpperCase().removeDiacritics() && e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_regiao.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[r]._id.inf_cidade.toUpperCase().removeDiacritics() == i[0].toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_regiao.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != a ? e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_regiao.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : l && o.push(e[r]._id.inf_regiao.toUpperCase().replace(/\s+/g, " ").replace("'", ""))), r++ }), o.sort()
}

function edificio(e, t, a, i) {
    void 0 == i && (i = void 0 != $("#filtro-cidade").val() ? $("#filtro-cidade").val() : ""), "" != i && (i = i.split(" - ")), void 0 == a && (a = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : "");
    var o = [],
        r = 0;
    return $.each(e, function() { var l = !1; "comprar" == t && 1 == e[r]._id.inf_venda && (l = !0), "alugar" == t && 1 == e[r]._id.inf_locacao && (l = !0), "estudante" == t && 1 == e[r]._id.inf_locacao_estu && (l = !0), "temporada" == t && 1 == e[r]._id.inf_temporada && (l = !0), "permuta" == t && 1 == e[r]._id.inf_permuta && (l = !0), "" == t && (l = !0), e[r]._id.inf_edificio && -1 === $.inArray(e[r]._id.inf_edificio.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics(), o) && ("" != i ? "" != a ? e[r]._id.inf_cidade.toUpperCase().removeDiacritics() == i[0].toUpperCase().removeDiacritics() && e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_edificio.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[r]._id.inf_cidade.toUpperCase().removeDiacritics() == i[0].toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_edificio.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != a ? e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_edificio.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : l && o.push(e[r]._id.inf_edificio.toUpperCase().replace(/\s+/g, " ").replace("'", ""))), r++ }), o.sort()
}

function categoria(e, t, a, i) {
    void 0 == i && (i = void 0 != $("#filtro-cidade").val() ? $("#filtro-cidade").val() : ""), "" != i && (i = i.split(" - ")), void 0 == a && (a = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : "");
    var o = [],
        r = 0;
    return $.each(e, function() { var l = !1; "comprar" == t && 1 == e[r]._id.inf_venda && (l = !0), "alugar" == t && 1 == e[r]._id.inf_locacao && (l = !0), "estudante" == t && 1 == e[r]._id.inf_locacao_estu && (l = !0), "temporada" == t && 1 == e[r]._id.inf_temporada && (l = !0), "permuta" == t && 1 == e[r]._id.inf_permuta && (l = !0), "" == t && (l = !0), e[r]._id.inf_categoria && -1 === $.inArray(e[r]._id.inf_categoria.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics(), o) && ("" != i ? "" != a ? e[r]._id.inf_cidade.toUpperCase().removeDiacritics() == i[0].toUpperCase().removeDiacritics() && e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_categoria.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[r]._id.inf_cidade.toUpperCase().removeDiacritics() == i[0].toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_categoria.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != a ? e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_categoria.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : l && o.push(e[r]._id.inf_categoria.toUpperCase().replace(/\s+/g, " ").replace("'", ""))), r++ }), o.sort()
}

function estado_obra(e, t, a) {
    void 0 == a && (a = void 0 != $("#filtro-cidade").val() ? $("#filtro-cidade").val() : ""), "" != a && (a = a.split(" - ")), void 0 == t && (t = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : "");
    var i = [],
        o = 0;
    return $.each(e, function() { e[o]._id.inf_estado && -1 === $.inArray(e[o]._id.inf_estado.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics(), i) && ("" != a ? "" != t ? e[o]._id.inf_cidade.toUpperCase().removeDiacritics() == a[0].toUpperCase().removeDiacritics() && e[o]._id.inf_tipo.toUpperCase().removeDiacritics() == t.toUpperCase().removeDiacritics() && i.push(e[o]._id.inf_estado.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[o]._id.inf_cidade.toUpperCase().removeDiacritics() == a[0].toUpperCase().removeDiacritics() && i.push(e[o]._id.inf_estado.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != t ? e[o]._id.inf_tipo.toUpperCase().removeDiacritics() == t.toUpperCase().removeDiacritics() && i.push(e[o]._id.inf_estado.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : i.push(e[o]._id.inf_estado.toUpperCase().replace(/\s+/g, " ").replace("'", ""))), o++ }), i.sort()
}

function construtora(e, t, a) {
    void 0 == a && (a = void 0 != $("#filtro-cidade").val() ? $("#filtro-cidade").val() : ""), "" != a && (a = a.split(" - ")), void 0 == t && (t = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : "");
    var i = [],
        o = 0;
    return $.each(e, function() { e[o]._id.inf_construtora && -1 === $.inArray(e[o]._id.inf_construtora.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics(), i) && ("" != a ? "" != t ? e[o]._id.inf_cidade.toUpperCase().removeDiacritics() == a[0].toUpperCase().removeDiacritics() && e[o]._id.inf_tipo.toUpperCase().removeDiacritics() == t.toUpperCase().removeDiacritics() && i.push(e[o]._id.inf_construtora.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[o]._id.inf_cidade.toUpperCase().removeDiacritics() == a[0].toUpperCase().removeDiacritics() && i.push(e[o]._id.inf_construtora.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != t ? e[o]._id.inf_tipo.toUpperCase().removeDiacritics() == t.toUpperCase().removeDiacritics() && i.push(e[o]._id.inf_construtora.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : i.push(e[o]._id.inf_construtora.toUpperCase().replace(/\s+/g, " ").replace("'", ""))), o++ }), i.sort()
}

function quadra(e, t, a, i) {
    void 0 == i && (i = void 0 != $("#filtro-cidade").val() ? $("#filtro-cidade").val() : ""), "" != i && (i = i.split(" - ")), void 0 == a && (a = void 0 != $("#filtro-tipo").val() ? $("#filtro-tipo").val() : "");
    var o = [],
        r = 0;
    return $.each(e, function() { var l = !1; "comprar" == t && 1 == e[r]._id.inf_venda && (l = !0), "alugar" == t && 1 == e[r]._id.inf_locacao && (l = !0), "estudante" == t && 1 == e[r]._id.inf_locacao_estu && (l = !0), "temporada" == t && 1 == e[r]._id.inf_temporada && (l = !0), "permuta" == t && 1 == e[r]._id.inf_permuta && (l = !0), "" == t && (l = !0), e[r]._id.inf_quadra && -1 === $.inArray(e[r]._id.inf_quadra.toUpperCase().replace(/\s+/g, " ").replace("'", "").removeDiacritics(), o) && ("" != i ? "" != a ? e[r]._id.inf_cidade.toUpperCase().removeDiacritics() == i[0].toUpperCase().removeDiacritics() && e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_quadra.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : e[r]._id.inf_cidade.toUpperCase().removeDiacritics() == i[0].toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_quadra.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : "" != a ? e[r]._id.inf_tipo.toUpperCase().removeDiacritics() == a.toUpperCase().removeDiacritics() && l && o.push(e[r]._id.inf_quadra.toUpperCase().replace(/\s+/g, " ").replace("'", "")) : l && o.push(e[r]._id.inf_quadra.toUpperCase().replace(/\s+/g, " ").replace("'", ""))), r++ }), o.length > 0 && $("#inf_quadra").css({ display: "block" }), o.sort()
}

function pesquisar(e) {
    var t = "",
        a = "",
        i = "",
        o = "",
        r = "",
        l = "",
        n = "",
        c = "",
        s = "",
        d = "",
        p = "",
        u = "",
        h = "",
        m = "",
        f = "",
        v = "",
        g = "",
        _ = "",
        b = "",
        y = "",
        C = "",
        x = "",
        w = "",
        S = "",
        T = "",
        F = "",
        D = "",
        x = "",
        T = "",
        k = "",
        U = "",
        P = "",
        A = "",
        q = "",
        j = "";
    if (e) { try { t = $("#filtro-finalidade").val() } catch (e) {} try { a = $("#filtro-tipo").val() } catch (e) {} try { i = $("#filtro-subtipo").val() } catch (e) {} try { o = $("#filtro-uf").val() } catch (e) {} try { r = $("#filtro-cidade").val() } catch (e) {} try { n = $("#filtro-bairro").val() } catch (e) {} try { s = $("#filtro-dormitorios").val() } catch (e) {} try { d = $("#filtro-banheiros").val() } catch (e) {} try { p = $("#filtro-suites").val() } catch (e) {} try { vagas = $("#filtro-vagas").val() } catch (e) {} try { u = $("#filtro-salas").val() } catch (e) {} try { h = $("#filtro-condominio").val() } catch (e) {} try { m = $("#filtro-condominios").val() } catch (e) {} try { regiao = $("#filtro-regiao").val() } catch (e) {} try { f = $("#filtro-edificio").val() } catch (e) {} try { v = $("#filtro-categoria").val() } catch (e) {} try { b = $("#filtro-quadra").val() } catch (e) {} try { y = $("#filtro-padrao").val() } catch (e) {} try { C = $("#filtro-lote").val() } catch (e) {} try { x = $("#filtro-valor").val() } catch (e) {} try { T = $("#filtro-area").val() } catch (e) {} try { U = $("#filtro-data-entrada").val() } catch (e) {} try { P = $("#filtro-data-saida").val() } catch (e) {} try { A = $("#ordem-campo").val() } catch (e) {} try { q = $("#ordem-resultado").val() } catch (e) {} try { j = $("#total-imoveis").val() } catch (e) {} try { k = $("#filtro-referencia").val() } catch (e) {} } else {
        try { t = $("#finalidade").val() } catch (e) {}
        try { a = $("#tipo").val() } catch (e) {}
        try { i = $("#subtipo").val() } catch (e) {}
        try { o = $("#uf").val() } catch (e) {}
        try { r = $("#cidade").val() } catch (e) {}
        try { l = $("#cidadeSugestao").val() } catch (e) {}
        try {
            n = $("#bairro").val()
        } catch (e) {}
        try { c = $("#bairroSugestao").val() } catch (e) {}
        try { s = $("#dormitorios").val() } catch (e) {}
        try { d = $("#banheiros").val() } catch (e) {}
        try { p = $("#suites").val() } catch (e) {}
        try { vagas = $("#vagas").val() } catch (e) {}
        try { h = $("#condominio").val() } catch (e) {}
        try { m = $("#condominios").val() } catch (e) {}
        try { regiao = $("#regiao").val() } catch (e) {}
        try { f = $("#edificio").val() } catch (e) {}
        try { v = $("#categoria").val() } catch (e) {}
        try { g = $("#estado_obra").val() } catch (e) {}
        try { _ = $("#construtora").val() } catch (e) {}
        try { b = $("#quadra").val() } catch (e) {}
        try { y = $("#padrao").val() } catch (e) {}
        try { F = $("#financiamento").val() } catch (e) {}
        try { D = $("#frente_mar").val() } catch (e) {}
        try { C = $("#lote").val() } catch (e) {}
        try { x = $("#valor").val() } catch (e) {}
        try { w = $("#valor_minimo").val() } catch (e) {}
        try { S = $("#valor_maximo").val() } catch (e) {}
        try { T = $("#area").val() } catch (e) {}
        try { U = $("#data-entrada").val() } catch (e) {}
        try { P = $("#data-saida").val() } catch (e) {}
        try { k = $("#referencia").val() } catch (e) {}
    }
    null == n && (n = "");
    try { t = t.toString().toLowerCase() } catch (e) {}
    try { a = a.toString().toLowerCase() } catch (e) {}
    try { i = i.toString().toLowerCase() } catch (e) {}
    try { o = o.toString().toLowerCase() } catch (e) {}
    try { r = r.toString().toLowerCase().split(" - ") } catch (e) {}
    try { l = l.toString().toLowerCase().split(" - ") } catch (e) {}
    try { n = n.toString().toLowerCase() } catch (e) {}
    try { c = c.toString().toLowerCase() } catch (e) {}
    try { s = s.toString().toLowerCase() } catch (e) {}
    try { d = d.toString().toLowerCase() } catch (e) {}
    try { p = p.toString().toLowerCase() } catch (e) {}
    try { u = u.toString().toLowerCase() } catch (e) {}
    try { h = h.toString().toLowerCase() } catch (e) {}
    try { m = m.toString().toLowerCase() } catch (e) {}
    try { regiao = regiao.toString().toLowerCase() } catch (e) {}
    try { f = f.toString().toLowerCase() } catch (e) {}
    try { v = v.toString().toLowerCase() } catch (e) {}
    try { g = g.toString().toLowerCase() } catch (e) {}
    try { _ = _.toString().toLowerCase() } catch (e) {}
    try { b = b.toString().toLowerCase() } catch (e) {}
    try { y = y.toString().toLowerCase() } catch (e) {}
    try { F = F.toString().toLowerCase() } catch (e) {}
    try { D = D.toString().toLowerCase() } catch (e) {}
    try { C = C.toString().toLowerCase() } catch (e) {}
    try { x = x.toString().toLowerCase() } catch (e) {}
    try { w = w.toString().toLowerCase() } catch (e) {}
    try { S = S.toString().toLowerCase() } catch (e) {}
    try { T = T.toString().toLowerCase() } catch (e) {}
    try { U = U.toString().toLowerCase() } catch (e) {}
    try { P = P.toString().toLowerCase() } catch (e) {}
    try { k = k.toString() } catch (e) {}
    try { A = A.toString().toLowerCase() } catch (e) {}
    try { q = q.toString().toLowerCase() } catch (e) {}
    try { j = j.toString().toLowerCase() } catch (e) {}
    try { t = t.split(",").join("-ou-") } catch (e) {}
    var I = window.location.toString().split("https://").join("").split("http://").join("").split("?"),
        H = "",
        M = "",
        z = "",
        B = "",
        W = "";
    if ("" != k && void 0 != k) "pagina=facebook" == I[1] ? window.location = "/imoveis/referencia-" + k.trim() + "?pagina=facebook" : window.location = "/imoveis/referencia-" + k.trim();
    else {
        "" != t && void 0 != t || (t = "imoveis", z = t);
        var L = "/" + t;
        z = t, "" != o && void 0 != o && (L += "/" + o.replace(/\s+/g, " ").split("/").join(" ").split(" ").join("-")), void 0 != r && "" != r[0] && void 0 != r[0] && (L += "/" + r[1] + "/" + r[0].replace(/\s+/g, " ").split("/").join(" ").split(" ").join("-").split(",").join("_"), W = r), void 0 != l && "" != l[0] && void 0 != l[0] && (L += "/" + l[1] + "/" + l[0].replace(/\s+/g, " ").split("/").join(" ").split(" ").join("-").split(",").join("_"), W = l[1]), "" != n && void 0 != n && (L += "/" + n.replace(/\s+/g, " ").split("/").join(" ").split(" ").join("-").split(",").join("_")), "" != c && void 0 != c && (L += "/" + c.replace(/\s+/g, " ").split("/").join(" ").split(" ").join("-").split(",").join("_")), "" != a && void 0 != a && (L += "/" + a.replace(/\s+/g, " ").split("/").join(" ").split(" ").join("-"), B = a), "" != i && void 0 != i && (L += "/" + i.replace(/\s+/g, " ").split("/").join(" ").split(" ").join("-")), "" != s && void 0 != s && (L += "/dormitorios-" + s.split("/").join(" ").split(" ").join("-")), "" != d && void 0 != d && (L += "/banheiros-" + d.split("/").join(" ").split(" ").join("-")), "" != p && void 0 != p && (L += "/suites-" + p.split("/").join(" ").split(" ").join("-")), "" != vagas && void 0 != vagas && (L += "/vagas-" + vagas.split("/").join(" ").split(" ").join("-")), "" != u && void 0 != u && (L += "/salas-" + u.split("/").join(" ").split(" ").join("-")), "" != h && void 0 != h && (L += "/condominio-" + h.split("/").join(" ").split(" ").join("-")), "" != m && void 0 != m && (L += "todos" == m ? "/condominio-1" : "/nome-condominio-" + m.split("/").join(" ").split(" ").join("-")), "" != regiao && void 0 != regiao && (L += "/regiao-" + regiao.split("/").join(" ").split(" ").join("-")), "" != f && void 0 != f && (L += "/edificio-" + f.split("/").join(" ").split(" ").join("-")), "" != v && void 0 != v && (L += "/categoria-" + v.split("/").join(" ").split(" ").join("-")), "" != g && void 0 != g && (L += "/estado-obra-" + g.split("/").join(" ").split(" ").join("-")), "" != _ && void 0 != _ && (L += "/construtora-" + _.split("/").join(" ").split(" ").join("-")), "" != b && void 0 != b && (L += "/quadra-" + b.split("/").join(" ").split(" ").join("-")), "" != y && void 0 != y && (L += "/padrao-" + y.split("/").join(" ").split(" ").join("-")), "" != F && void 0 != b && (L += "/financiamento"), "" != D && void 0 != D && (L += "/frente-mar-" + D.split("/").join(" ").split(" ").join("-")), "" != C && void 0 != C && (L += "/lote-" + C.split("/").join(" ").split(" ").join("-")), window.location.toString().split("/comercial").length > 1 && (L += "/comercial"), "" != x && void 0 != x && (L += "/valor-" + x.split(" ").join("-")), "" != w && void 0 != w && "" != S && void 0 != S && (L += "/valor-" + w.split(" ").join("-").split(".").join("").split(",")[0] + "_" + S.split(" ").join("-").split(".").join("").split(",")[0]), "" != T && void 0 != T && (L += "/area-" + T.split(" ").join("-")), "" != U && void 0 != U && "" != P && void 0 != P && (L += "/periodo-" + U.split("/").join("-") + "_" + P.split("/").join("-")), -1 != window.location.toString().split("https://").join("").split("http://").join("").indexOf("corretor-nome-") && (L += "/corretor-nome-" + window.location.toString().split("https://").join("").split("http://").join("").split("corretor-nome-")[1]), -1 != window.location.toString().split("https://").join("").split("http://").join("").indexOf("imobiliaria-") && (L += "/imobiliaria-" + window.location.toString().split("https://").join("").split("http://").join("").split("imobiliaria-")[1]), "" != A && void 0 != A && (L += "/ordem-" + A), "" != q && void 0 != q && (L += "/resultado-" + q), "" == j || void 0 == j || "" != U && void 0 != U || "" != P && void 0 != P || (L += "/quantidade-" + j), L = L.removeDiacritics() + "/", "pagina=facebook" == I[1] && (L += "?pagina=facebook"), "" != z && (H += z), "" != B && (H += " " + B), "" != W && (H += " em " + W.toString().split(",").join("/")), M = L, getCookie("fecharAvisoCookies") && (document.cookie = "lastSearch = " + H + "|" + M + "; path=/"), "home" != e && (window.location = L)
    }
}

function pesquisarLivre() { var e = ""; try { e = $("#pesquisar-livre").val() } catch (e) {} "" != e && void 0 != e && $.post("/pesquisar-livre", { termos: e }, function(e) { window.location.href = e }) }

function sendForm(t, a) {
    var i = Array();
    $(a).prop("disabled", !0), $(a).html("<i class='fa fa-spinner fa-spin'></i> Enviando"), $("*[formulario='" + t + "']").each(function(o) {
        "true" == $(this).attr("obrigatorio") && "" == $(this).val() && (alert("Favor preencher todos os campos obrigatÃ³rios!"), $(a).prop("disabled", !1), $(a).html("Enviar"), $(this).focus(), e.stopImmediatePropagation());
        var r = $(this).attr("valor"),
            l = $(this).val();
        "checkbox" != $(this).attr("type") && "radio" != $(this).attr("type") || "" != l || (l = $(this).is(":checked") ? "Sim" : "NÃ£o"), "" == l && (l = "NÃ£o informado"), r = r.split("-").join(" ").split("_").join(" ").capitalize(), i.push({ formulario: t, campo: r, valor: l }), o == $("*[formulario='" + t + "']").length - 1 && $.post("/enviar-formulario", { data: JSON.stringify(i) }, function(e) { e ? "form-imovel-facebook" == t || "form-indicar-para-um-amigo-facebook" == t ? (alert("Mensagem enviada com sucesso!"), "form-imovel-facebook" == t && $("#fechar_imovel_facebook").click(), "form-indicar-para-um-amigo-facebook" == t && $("#fechar_indicar_facebook").click()) : window.location = "/agradecimento" : alert("Ocorreu algum problema no envio do formulÃ¡rio, tente novamente."), $(a).prop("disabled", !1), $(a).html("Enviar") })
    })
}

function clearForm(e) { $("*[formulario='" + e + "']").each(function() { $(this).val(""), "checkbox" == $(this).attr("type") && $(this).is(":checked") && $(this).prop("checked", !1) }) }

function corretorOnline(e, t, a) { $("#pkimovel").attr("value") && (e = $("#pkimovel").attr("value"), t = $("#inf_referencia").attr("value"), a = $("#fkempresa").attr("value")), e ? window.open("http://www.univenchat.com.br/atendimento.aspx?empresa=" + a + "&fkimovel=" + e + "&referencia=" + t, "popup", "width=425 , height=550, top=5, left=370, scrollbars=no,fullscreen=no") : window.open("/abrir-corretor-online", "popup", "width=425 , height=550, top=5, left=370, scrollbars=no,fullscreen=no") }

function corretorOnline2(e, t, a) { $("#pkimovel").attr("value") && (e = $("#pkimovel").attr("value"), t = $("#inf_referencia").attr("value"), a = $("#fkempresa").attr("value")), mobile ? e ? window.open("http://www.univenchat.com.br/atendimento.aspx?empresa=" + a + "&fkimovel=" + e + "&referencia=" + t, "popup", "width=425 , height=550, top=5, left=370, scrollbars=no,fullscreen=no") : window.open("/abrir-corretor-online", "popup", "width=425 , height=550, top=5, left=370, scrollbars=no,fullscreen=no") : e ? ($(".chat_corretor iframe").attr("src", "http://www.univenchat.com.br/atendimento.aspx?empresa=" + a + "&fkimovel=" + e + "&referencia=" + t), $(".chat_corretor").slideToggle()) : ($(".chat_corretor iframe").attr("src", "/abrir-corretor-online"), $(".chat_corretor").slideToggle()) }

function ligueGratis(e, t) { window.open("http://www.blap.com.br/liguegratis.aspx?id=" + e + "&cid=" + t, "popup", "width=430 , height=380, top=150, left=300, scrollbars=no,fullscreen=no") }

function ligueGratis2(e, t) { mobile ? window.open("http://www.blap.com.br/liguegratis.aspx?id=" + e + "&cid=" + t, "popup", "width=430 , height=380, top=150, left=300, scrollbars=no,fullscreen=no") : ($(".chat_corretor iframe").attr("src", "http://www.blap.com.br/liguegratis.aspx?id=" + e + "&cid=" + t), $(".chat_corretor").slideToggle()) }

function favoritos(e) {
    if (getCookie("fecharAvisoCookies")) {
        var t = "";
        if (getCookie("favoritos").split(e).length > 1) {
            if (getCookie("favoritos").split("#").length > 0)
                for (var a = 0; a < getCookie("favoritos").split("#").length; a++) getCookie("favoritos").split("#")[a] != e && (t += "#" + getCookie("favoritos").split("#")[a]);
            "#" == t.substring(0, 1) && (t = t.substring(1, t.length))
        } else if ("" != getCookie("favoritos")) var t = getCookie("favoritos") + "#" + e;
        else var t = e;
        document.cookie = "favoritos = " + t + "; path=/", "Adicionar aos favoritos" == $("#favoritos").html() ? ($("#favoritos").html("Remover dos favoritos"), $("#btn_favoritos i").toggleClass("fa-heart-o"), $("#btn_favoritos i").toggleClass("fa-heart"), $("#botao_favoritos").show()) : ($("#favoritos").html("Adicionar aos favoritos"), $("#btn_favoritos i").toggleClass("fa-heart-o"), $("#btn_favoritos i").toggleClass("fa-heart"))
    }
}

function validarCampo(e) { return e || "" }

function getCookie(e) {
    for (var t = e + "=", a = document.cookie.split(";"), i = 0; i < a.length; i++) {
        for (var o = a[i];
            " " == o.charAt(0);) o = o.substring(1);
        if (0 == o.indexOf(t)) return o.substring(t.length, o.length)
    }
    return ""
}

function verificarCaptcha(e) { 0 != grecaptcha.getResponse() && getCookie("fecharAvisoCookies") && (window.location.href = e, document.cookie = "verificaCaptcha = true; path=/") }

function novaBusca() {
    var e = $.map(arrayBairros, function(e) { return { value: e, data: { category: "BAIRROS" } } }),
        t = $.map(arrayCidades, function(e) { return { value: e, data: { category: "CIDADES" } } }),
        a = e.concat(t);
    $("#autocomplete").devbridgeAutocomplete({
        lookup: a,
        minChars: 1,
        onSelect: function(e) {
            if ("CIDADES" == e.data.category) {
                var t = e.value.split("(")[0].trim(),
                    a = " - " + e.value.split("(")[1].replace(")", "").trim();
                $("#cidadeSugestao").val(t + a)
            }
            if ("BAIRROS" == e.data.category) {
                var i = e.value.split("(")[0].trim(),
                    t = e.value.split("(")[1].replace(")", "").split("-")[0].trim(),
                    a = " - " + e.value.split("(")[1].replace(")", "").split("-")[1].trim();
                $("#bairroSugestao").val(i), $("#cidadeSugestao").val(t + a)
            }
        },
        showNoSuggestionNotice: !0,
        noSuggestionNotice: "Desculpe, nenhuma sugestÃ£o.",
        groupBy: "category"
    })
}

function escolherDepartamento(e) { $("#nome_departamento_form_contato").val(e) }

function fecharNovidades() {
    if (getCookie("fecharAvisoCookies")) {
        var e = new Date;
        e.setTime(e.getTime() + 36e5), document.cookie = "fecharNovidades = 1; expires=" + e.toUTCString() + "; path=/"
    }
}

function fecharVaiSair() {
    if (getCookie("fecharAvisoCookies")) {
        var e = new Date;
        e.setTime(e.getTime() + 36e5), document.cookie = "fecharVaiSair = 1; expires=" + e.toUTCString() + "; path=/"
    }
}

function fundoSite(e) {
    var t = new Image;
    t.src = "https://cdn2.uso.com.br/sites/logos/" + e + "_fundosite.gif", t.onload = function() { $("#recebe_fundo").css({ "background-image": "url(https://cdn2.uso.com.br/sites/logos/" + e + "_fundosite.gif)" }) }, t.onerror = function() { $("#recebe_fundo").css({ "background-image": "url(https://cdn2.uso.com.br/sites/logos/" + e + "_fundosite.jpg)" }) }
}

function fecharAppDesktop() {
    if (getCookie("fecharAvisoCookies")) {
        var e = new Date;
        e.setTime(e.getTime() + 36e5), document.cookie = "fecharAppDesktop = 1; expires=" + e.toUTCString() + "; path=/"
    }
}

function fecharAppMobile() {
    if (getCookie("fecharAvisoCookies")) {
        var e = new Date;
        e.setTime(e.getTime() + 36e5), document.cookie = "fecharAppMobile = 1; expires=" + e.toUTCString() + "; path=/"
    }
}

function fecharAvisoCookies() {
    var e = new Date;
    e.setTime(e.getTime() + 36e5), document.cookie = "fecharAvisoCookies = 1; expires=" + e.toUTCString() + "; path=/", $(".aviso_cookies_fixo").hide()
}
var localizacoes = "",
    faixa_valor = "",
    pagina_oportunidades = 0,
    arrayBairros = [],
    arrayCidades = [],
    mobile = !1,
    params = window.location.pathname.split("/");
$("#fotorama_banner").on("fotorama:load", function(e, t, a) { $("#fotorama_banner .fotorama__img").removeAttr("style") }), $("#fotorama_opt").on("fotorama:load", function(e, t, a) { $("#fotorama_opt .fotorama__html div, #fotorama_opt .fotorama__html a").css({ height: "auto" }) }), $("#fotorama_ficha").on("fotorama:ready", function() { $("#fotorama_ficha .fotorama__fullscreen-icon").css({ width: "100%", height: "100%", background: "none" }), $("#fotorama_ficha .fotorama__arr").css({ "z-index": "9999" }) }), $("#fotorama_ficha").on("fotorama:fullscreenenter", function() { $("#fotorama_ficha .fotorama__fullscreen-icon").css({ width: "32px", height: "32px", background: "url(/images/fotorama.png) no-repeat", "background-position": "0 -32px" }) }), $("#fotorama_ficha").on("fotorama:fullscreenexit", function() { $("#fotorama_ficha .fotorama__fullscreen-icon").css({ width: "100%", height: "100%", background: "none" }) }), $("#fotorama_ficha_facebook").on("fotorama:ready", function() { $("#fotorama_ficha_facebook .fotorama__fullscreen-icon").css({ width: "100%", height: "100%", background: "none" }), $("#fotorama_ficha_facebook .fotorama__arr").css({ "z-index": "9999" }) }), $("#fotorama_ficha_facebook").on("fotorama:fullscreenenter", function() { $("#fotorama_ficha_facebook .fotorama__fullscreen-icon").css({ width: "180px", height: "32px", background: "url(/images/novo_fotorama.png) no-repeat" }) }), $("#fotorama_ficha_facebook").on("fotorama:fullscreenexit", function() { $("#fotorama_ficha_facebook .fotorama__fullscreen-icon").css({ width: "100%", height: "100%", background: "none" }) }), $("#capa_imovel").click(function() { $("#fotorama_ficha").fotorama({ allowfullscreen: !0 }).data("fotorama").requestFullScreen() }), $("#item_foto").click(function() { $("#fotorama_ficha").fotorama({ allowfullscreen: !0 }).data("fotorama").requestFullScreen() }), $("#item_lazer").click(function() { $("#fotorama_lazer").fotorama({ allowfullscreen: !0 }).data("fotorama").requestFullScreen() }), $("#item_planta").click(function() { $("#fotorama_planta").fotorama({ allowfullscreen: !0 }).data("fotorama").requestFullScreen() }), $("#item_implantaÃ§Ã£o").click(function() { $("#fotorama_implantaÃ§Ã£o").fotorama({ allowfullscreen: !0 }).data("fotorama").requestFullScreen() }), $("#item_projeto").click(function() { $("#fotorama_projeto").fotorama({ allowfullscreen: !0 }).data("fotorama").requestFullScreen() }), $("#item_obras").click(function() { $("#fotorama_obras").fotorama({ allowfullscreen: !0 }).data("fotorama").requestFullScreen() }), $(document).ready(function() {
    function e(e) {
        var a = { dateFormat: "dd/mm/yyyy", dayNames: ["Domingo", "Segunda", "TerÃ§a", "Quarta", "Quinta", "Sexta", "SÃ¡bado"], dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"], dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"], monthNames: ["Janeiro", "Fevereiro", "MarÃ§o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], showAlways: !1, allowMonthSelect: !0, allowYearSelect: !0, specialDates: e, onClick: function(e, t, a, i) { null != i ? alert(i.message) : e.val(a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear()) } };
        try { $("[valor='data_entrada']").glDatePicker(a) } catch (e) {}
        try { $("[valor='data_saida']").glDatePicker(a) } catch (e) {}
        var i = new Date,
            o = new Date(i);
        o.setDate(i.getDate() + 730);
        var r = { dateFormat: "dd/mm/yyyy", dayNames: ["Domingo", "Segunda", "TerÃ§a", "Quarta", "Quinta", "Sexta", "SÃ¡bado"], dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"], dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"], monthNames: ["Janeiro", "Fevereiro", "MarÃ§o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], showAlways: !1, allowMonthSelect: !0, allowYearSelect: !0, selectableDateRange: [{ from: i, to: o }], onClick: function(e, a, i, o) { null != o ? alert(o.message) : (e.val(i.getDate() + "/" + (i.getMonth() + 1) + "/" + i.getFullYear()), t()) } };
        try { $("#data-entrada, #filtro-data-entrada").glDatePicker(r) } catch (e) {}
        var l = "";
        "1" != (l = $("#ctrl_form_imovel").val()) && $(".form_imovel").slideToggle()
    }

    function t() {
        if ($("#data-entrada").length && "" != $("#data-entrada").val()) var e = $("#data-entrada").val();
        else if ($("#filtro-data-entrada").length && "" != $("#filtro-data-entrada").val()) var e = $("#filtro-data-entrada").val();
        var t = new Date(e.split("/")[2], e.split("/")[1] - 1, e.split("/")[0]);
        t.setDate(t.getDate() + 1);
        var a = new Date(t);
        a.setDate(t.getDate() + 730);
        var i = { dateFormat: "dd/mm/yyyy", dayNames: ["Domingo", "Segunda", "TerÃ§a", "Quarta", "Quinta", "Sexta", "SÃ¡bado"], dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"], dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"], monthNames: ["Janeiro", "Fevereiro", "MarÃ§o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], showAlways: !1, allowMonthSelect: !0, allowYearSelect: !0, selectableDateRange: [{ from: t, to: a }], todayDate: t, onClick: function(e, t, a, i) { null != i ? alert(i.message) : e.val(a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear()) } };
        try { $("#data-saida, #filtro-data-saida").glDatePicker(i) } catch (e) {}
    }
    $(".translation-icons a").click(function(e) {
        e.preventDefault();
        var t = $(this).data("placement"),
            a = $(".translation-icons a").length;
        if (!$(".goog-te-menu-frame:first").size()) return alert("Error: Could not find Google translate frame."), !1;
        var i = $(".goog-te-menu-frame:first").contents().find("a span.text");
        return i.length != a && (t += 1), i.eq(t).click(), !1
    }), isMobile.any() && (mobile = !0), $(document).bind("contextmenu", function(e) { return !1 });
    try { var a = window.location.toString().split("https://").join("").split("http://").join("").split("/"); "" != a[1] && $("html, body").animate({ scrollTop: $(".titulo_pagina").offset().top }) } catch (e) {}
    var i = new Date;
    "" != $("#whatsapp_chat_verificador").val() && ("" == $("#whatsapp_dias").val() ? "" != $("#whatsapp_hora_inicio").val() && "" != $("#whatsapp_hora_fim").val() ? i.getHours() >= parseInt($("#whatsapp_hora_inicio").val().split(":")[0]) && i.getHours() <= parseInt($("#whatsapp_hora_fim").val().split(":")[0]) ? ($("#whatsapp_numero").hide(), $("#whatsapp_ficha").show()) : ($("#whatsapp_chat, #whatsapp_ficha").hide(), $("#whatsapp_numero").show()) : ($("#whatsapp_numero").hide(), $("#whatsapp_ficha").show()) : "1" == $("#whatsapp_dias").val() ? i.getDay() >= 1 && i.getDay() <= 5 && i.getHours() >= parseInt($("#whatsapp_hora_inicio").val().split(":")[0]) && i.getHours() <= parseInt($("#whatsapp_hora_fim").val().split(":")[0]) && $("#whatsapp_chat").show() : "2" == $("#whatsapp_dias").val() && (6 != i.getDay() && 0 != i.getDay() || i.getHours() >= parseInt($("#whatsapp_hora_inicio").val().split(":")[0]) && i.getHours() <= parseInt($("#whatsapp_hora_fim").val().split(":")[0]) && $("#whatsapp_chat").show()));
    try {
        var a = window.location.toString().split("https://").join("").split("http://").join("").split("/");
        getCookie("favoritos").split(a[a.length - 1]).length > 1 && ($("#favoritos").html("Remover dos favoritos"), $("#btn_favoritos i").toggleClass("fa-heart-o"), $("#btn_favoritos i").toggleClass("fa-heart"))
    } catch (e) {}
    if (getCookie("favoritos") && $("#botao_favoritos").show(), tempo = setTimeout('$("#verifica_sair").show();', 5e3), $("#verifica_sair").mousemove(function(e) { "1" != getCookie("fecharVaiSair") && $("#verifica_sair").click() }), $("#btn_app_desktop").length && "1" != getCookie("fecharAppDesktop") && $("#btn_app_desktop").click(), isMobile.Android() && $("#btn_app_mobile_android").length && "1" != getCookie("fecharAppMobile") && $("#btn_app_mobile_android").click(), isMobile.iOS() && $("#btn_app_mobile_ios").length && "1" != getCookie("fecharAppMobile") && $("#btn_app_mobile_ios").click(), getCookie("lastSearch").split("|").length > 1) { $("#ultima_busca").html("<b>Sua Ãºltima busca: </b><a href='" + getCookie("lastSearch").split("|")[1] + "'>" + getCookie("lastSearch").split("|")[0] + "</a>"); "" == window.location.toString().split("https://").join("").split("http://").join("").split("/")[1] && "1" != getCookie("fecharNovidades") && (tempo2 = setTimeout('$("#notificacao_novidades").show(); $("#notificacao_novidades").addClass("animated zoomInRight");', 5e3), $("#notificacao_novidades a").prop("href", getCookie("lastSearch").split("|")[1].split("ordem-")[0] + "ordem-recentes/resultado-decrescente/quantidade-12/")) }
    var o = 0;
    if (o = "" != $("#tempo_chatbot").val() ? 1e3 * parseInt($("#tempo_chatbot").val()) : 5e3, $(".chat_corretor").length && (tempo3 = setTimeout('$(".chat_corretor").css({ "bottom": "0" });', o)), $("#filtro_periodo").length) {
        var r = $("#filtro_periodo").html().split("PerÃ­odo ").join("").split(" Ã  ").join("_");
        $("#filtro-data-entrada").val(r.split("_")[0]), $("#filtro-data-saida").val(r.split("_")[1]), $("#campo-qtd").hide()
    }
    $("#semMapa").length && $("#resultados").addClass("resultados2");
    try {
        var l = $("#valor_empre_txt").val();
        void 0 != l && "R$ 0,00" != l && $("#valor_empre").html("<h2>Vendas a partir de</h2><h3>" + l + "</h3>");
        var n = $("#valor_locacao_empre_txt").val();
        void 0 != n && "R$ 0,00" != n && $("#valor_locacao_empre").html("<h2>LocaÃ§Ãµes a partir de</h2><h3>" + n + "</h3>")
    } catch (e) {}
    "1" == getCookie("view") && $("#btn_galeria").click();
    try {
        var c = 10;
        ! function(e) {
            var t = 0;
            $(".destaques_prontos").each(function() {
                var a = ($(this).children("div").length, parseInt($(this).attr("total")) / 2);
                c = void 0 === $(this).attr("tempodes") ? 1e4 : 1e3 * parseInt($(this).attr("tempodes"));
                var i = 0;
                t++, $(this).children("div").each(function() {++i > a && $(this).hide() }), $(".destaques_prontos").length == t && e(c)
            })
        }(function(e) {
            setInterval(function() {
                var e = 0;
                $(".destaques_prontos").each(function() { $(this).children("div").length == parseInt($(this).attr("total")) / 2 * 2 && $(this).children("div").each(function() { 0 == e && (e = window.pageYOffset), $(this).is(":visible") ? $(this).hide() : $(this).show(), window.scrollTo(0, e) }) })
            }, e)
        })
    } catch (e) {}
    try {
        $(".destaques_prontos2").each(function() { c = void 0 === $(this).attr("tempodes") ? 1e4 : 1e3 * parseInt($(this).attr("tempodes")) });
        var s = 1;
        $(".novoDest").hide(), $(".novoDest_1").show(), setInterval(function() {
            $(".destaques_prontos2").each(function() {
                var e = parseInt($("#quantidade_troca").val());
                s++, $(".novoDest").hide(), $(".novoDest_" + s).show(), s == e && (s = 0)
            })
        }, c)
    } catch (e) {}
    try {
        $(".banner_oportunidades_prontos").each(function() {
            var e = 0;
            $(this).children("div").each(function() { e == pagina_oportunidades ? $(this).show() : $(this).hide(), e++ })
        })
    } catch (e) {}
    $("#div_lazer").height() > 0 && $("#btn_lazer").css({ display: "block" }), $("#div_projeto").height() > 0 && $("#btn_projeto").css({ display: "block" }), $("#div_plantas").height() > 0 && $("#btn_plantas").css({ display: "block" }), $("#div_implantacao").height() > 0 && $("#btn_implantacao").css({ display: "block" }), $("#div_acompanhe").height() > 0 && $("#btn_acompanhe").css({ display: "block" }), $.post("/corretor-online", {}, function(e) { e.online && $(".corretor_online").show(), "true" == e.status ? $(".status_corretor").html("Online") : $(".status_corretor").html("Offline") }), $("#pkimovel_ficha").length && $.post("/logs/imovel", { pkimovel: $("#pkimovel_ficha").val(), fkempresa_imovel: $("#fkempresa_imovel_ficha").val() }, function(e) {}), $("#recebe_blog").length && $.post("/feed-blog", { url_blog: $("#url_blog").val(), flag_blog: $("#flag_blog").val() }, function(e) { $("#recebe_blog").html(e.conteudo) });
    var d = null;
    try {
        var p = $("#datas_ocupadas").val(),
            u = $("#flag_pernoite").val();
        if ("" != p && void 0 != p) {
            d = [], p = p.split(",");
            for (var s = 0; s < p.length; s++) {
                var h = p[s].split("#")[0].split("-"),
                    m = p[s].split("#")[1].split("-"),
                    f = parseInt(h[0]),
                    v = parseInt(h[1]),
                    g = parseInt(h[2]),
                    _ = parseInt(m[0]),
                    b = parseInt(m[1]),
                    y = parseInt(m[2]);
                h = new Date(f + "\t" + v + "/" + g), m = new Date(_ + "/" + b + "/" + y), g != y && "1" == u && m.setDate(m.getDate() - 1);
                try { d.push({ date: h, data: { message: "PerÃ­odo reservado" }, repeatMonth: !1 }) } catch (e) {}
                try { d.push({ date: m, data: { message: "PerÃ­odo reservado" }, repeatMonth: !1 }) } catch (e) {}
                var r = function(e, t) { for (var a = new Array, i = e; i <= t;) a.push(new Date(i)), i = i.addDays(1); return a }(h, m);
                if (r.length > 0)
                    for (var C = 0; C < r.length; C++) {
                        try { d.push({ date: r[C], data: { message: "PerÃ­odo reservado" }, repeatMonth: !1 }) } catch (e) {}
                        s == p.length - 1 && C == r.length - 1 && e(d)
                    } else s == p.length - 1 && e(d)
            }
        } else e(d)
    } catch (e) {}
    var x = function(e) { return 11 === e.replace(/\D/g, "").length ? "(00) 00000-0000" : "(00) 0000-00009" },
        w = { onKeyPress: function(e, t, a, i) { a.mask(x.apply({}, arguments), i) } };
    try { $("[valor='data']").mask("00/00/0000") } catch (e) {}
    try { $("[valor='data-nascimento']").mask("00/00/0000") } catch (e) {}
    try { $("[valor^='telefone']").mask(x, w) } catch (e) {}
    try { $("[valor^='celular']").mask(x, w) } catch (e) {}
    try { $("[valor='cpf']").mask("000.000.000-00") } catch (e) {}
    try { $("[valor='area']").mask("#.##0,00", { reverse: !0 }) } catch (e) {}
    try { $("[valor='valor']").mask("###.###.##0,00", { reverse: !0 }) } catch (e) {}
    $.getJSON("/data/localizacoes.json", function(e) {
        localizacoes = e, arrayBairros = bairrosAutocomplete(e), arrayCidades = cidadesAutocomplete(e), $("#flag_busca_sugestao").length && "" != $("#flag_busca_sugestao").val() && novaBusca();
        try { $("#referencia").keypress(function(e) { 13 == e.which && pesquisar() }) } catch (e) {}
        var t = 0,
            a = "",
            i = "",
            o = "";
        try {
            if (tipos(e, "comprar").length > 0) { var r = !0; try { $(".submenu_tipos").append('<li><a class="efeitoHover" href="/comprar">COMPRAR</a></li>'), t++ } catch (e) {} }
            if (tipos(e, "alugar").length > 0) { var l = !0; try { $(".submenu_tipos").append('<li><a class="efeitoHover" href="/alugar">ALUGAR</a></li>'), t++ } catch (e) {} }
            if (tipos(e, "temporada").length > 0) { var n = !0; try { $(".submenu_tipos").append('<li><a class="efeitoHover" href="/temporada">TEMPORADA</a></li>'), t++ } catch (e) {} }
            if (tipos(e, "estudante").length > 0) { var c = !0; try { $(".submenu_tipos").append('<li><a class="efeitoHover" href="/estudante">ESTUDANTE</a></li>'), t++ } catch (e) {} }
            if (tipos(e, "permuta").length > 0) { var s = !0; try { $(".submenu_tipos").append('<li><a class="efeitoHover" href="/permuta">PERMUTA</a></li>'), t++ } catch (e) {} }
            var d = !1,
                p = !1,
                u = !1,
                h = !1,
                m = !1,
                f = !1;
            $.each(tipos(e, ""), function(e, o) { try { $(".submenu_tipos").append('<li><a class="efeitoHover" href="/imoveis/' + o.toLowerCase().removeDiacritics().split(" ").join("-") + '">' + o + "</a></li>"), t++ } catch (e) {}(r && "APARTAMENTO" == o || r && "CASA" == o || r && "TERRENO" == o) && (a += '<h3><a href="/comprar/' + o.toLowerCase().removeDiacritics() + '">COMPRAR ' + o + "</a></h3>"), (l && "APARTAMENTO" == o || l && "CASA" == o || l && "TERRENO" == o) && (a += '<h3><a href="/alugar/' + o.toLowerCase().removeDiacritics() + '">ALUGAR ' + o + "</a></h3>"), i += '<h3><a href="/imoveis/' + o.toLowerCase().removeDiacritics().split(" ").join("-") + '">' + o + "</a></h3>", "APARTAMENTO" != o || d || ($("#content__container__list__item1").html("apartamento"), d = !0), "CASA" == o && (d ? p || ($("#content__container__list__item2").html("casa"), p = !0) : ($("#content__container__list__item1").html("casa"), d = !0)), "TERRENO" == o && (d ? p ? u || ($("#content__container__list__item3").html("terreno"), u = !0) : ($("#content__container__list__item2").html("terreno"), p = !0) : ($("#content__container__list__item1").html("terreno"), d = !0)), o.toLowerCase() != h && o.toLowerCase() != m && o.toLowerCase() != f && "" == h && "APARTAMENTO" != o.toUpperCase() && "CASA" != o.toUpperCase() && "TERRENO" != o.toUpperCase() && (h = o.toLowerCase()), o.toLowerCase() != h && o.toLowerCase() != m && o.toLowerCase() != f && "" == m && "APARTAMENTO" != o.toUpperCase() && "CASA" != o.toUpperCase() && "TERRENO" != o.toUpperCase() && (m = o.toLowerCase()), o.toLowerCase() != h && o.toLowerCase() != m && o.toLowerCase() != f && "" == f && "APARTAMENTO" != o.toUpperCase() && "CASA" != o.toUpperCase() && "TERRENO" != o.toUpperCase() && (f = o.toLowerCase()) }), d || ($("#content__container__list__item1").html(h), d = !0), p || ($("#content__container__list__item2").html(m), p = !0), u || ($("#content__container__list__item3").html(f), u = !0), n && (o += '<h3><a href="/temporada">TEMPORADA</a></h3>'), c && (o += '<h3><a href="/estudante">ESTUDANTE</a></h3>'), s && (o += '<h3><a href="/permuta">PERMUTA</a></h3>'), a += i + o, $("#links_seo").html(a), t > 15 && $(".submenu_tipos").css({ "overflow-y": "scroll" })
        } catch (e) {}
        try { $("#uf").attr("size", "2") } catch (e) {}
        try { $("#cidade").attr("size", "2") } catch (e) {}
        try { $("#tipo").attr("size", "2") } catch (e) {}
        try { $("#subtipo").attr("size", "2") } catch (e) {}
        try { $("#vagas").attr("size", "2") } catch (e) {}
        try { $("#dormitorios").attr("size", "2") } catch (e) {}
        try { $("#banheiros").attr("size", "2") } catch (e) {}
        try { $("#condominio").attr("size", "2") } catch (e) {}
        try { $("#condominios").attr("size", "2") } catch (e) {}
        try { $("#regiao").attr("size", "2") } catch (e) {}
        try { $("#edificio").attr("size", "2") } catch (e) {}
        try { $("#categoria").attr("size", "2") } catch (e) {}
        try { $("#estado_obra").attr("size", "2") } catch (e) {}
        try { $("#construtora").attr("size", "2") } catch (e) {}
        try { $("#quadra").attr("size", "2") } catch (e) {}
        try { $("#padrao").attr("size", "2") } catch (e) {}
        try { $("#frente_mar").attr("size", "2") } catch (e) {}
        try { $("#tipo").prepend('<option value="">Todos</option>') } catch (e) {}
        try { $("#subtipo").prepend('<option value="">Todos</option>') } catch (e) {}
        try { $("#uf").prepend('<option value="">Todos</option>') } catch (e) {}
        try { $("#cidade").prepend('<option value="">Todos</option>') } catch (e) {}
        try { $("#condominios").prepend('<option value="todos">Todos</option>') } catch (e) {}
        try { $("#regiao").prepend('<option value="todos">Todos</option>') } catch (e) {}
        try { $("#edificio").prepend('<option value="todos">Todos</option>') } catch (e) {}
        try { $("#categoria").prepend('<option value="todos">Todos</option>') } catch (e) {}
        try { $("#estado_obra").prepend('<option value="todos">Todos</option>') } catch (e) {}
        try { $("#construtora").prepend('<option value="todos">Todos</option>') } catch (e) {}
        try { $("#quadra").prepend('<option value="todos">Todos</option>') } catch (e) {}
        if ("" == $("#cidade").val() && $("#cidade option:selected").removeAttr("selected"), "" == $("#tipo").val() && $("#tipo option:selected").removeAttr("selected"), "" == $("#subtipo").val() && $("#subtipo option:selected").removeAttr("selected"), "" == $("#vagas").val() && $("#vagas option:selected").removeAttr("selected"), "" == $("#dormitorios").val() && $("#dormitorios option:selected").removeAttr("selected"), "" == $("#suites").val() && $("#suites option:selected").removeAttr("selected"), "" == $("#banheiros").val() && $("#banheiros option:selected").removeAttr("selected"), "" == $("#condominio").val() && $("#condominio option:selected").removeAttr("selected"), "" == $("#condominios").val() && $("#condominios option:selected").removeAttr("selected"), "" == $("#regiao").val() && $("#regiao option:selected").removeAttr("selected"), "" == $("#edificio").val() && $("#edificio option:selected").removeAttr("selected"), "" == $("#categoria").val() && $("#categoria option:selected").removeAttr("selected"), "" == $("#estado_obra").val() && $("#estado_obra option:selected").removeAttr("selected"), "" == $("#construtora").val() && $("#construtora option:selected").removeAttr("selected"), "" == $("#quadra").val() && $("#quadra option:selected").removeAttr("selected"), "" == $("#padrao").val() && $("#padrao option:selected").removeAttr("selected"), "" == $("#frente_mar").val() && $("#frente_mar option:selected").removeAttr("selected"), tipos(e, "comprar").length > 0) {
            try { 0 == $("#finalidade option[value='comprar']").length && $("#finalidade").append('<option value="comprar">Comprar</option>'), 0 == $("#finalidade-mapa option[value='comprar']").length && $("#finalidade-mapa").append('<option value="comprar" selected="selected">Comprar</option>') } catch (e) {}
            try {
                0 == $("#filtro-finalidade option[value='comprar']").length && $("#filtro-finalidade").append('<option value="comprar">Comprar</option>')
            } catch (e) {}
        }
        if (tipos(e, "alugar").length > 0) { try { 0 == $("#finalidade option[value='alugar']").length && $("#finalidade").append('<option value="alugar">Alugar</option>'), 0 == $("#finalidade-mapa option[value='alugar']").length && $("#finalidade-mapa").append('<option value="alugar">Alugar</option>') } catch (e) {} try { 0 == $("#filtro-finalidade option[value='alugar']").length && $("#filtro-finalidade").append('<option value="alugar">Alugar</option>') } catch (e) {} }
        if (tipos(e, "temporada").length > 0) { try { 0 == $("#finalidade option[value='temporada']").length && $("#finalidade").append('<option value="temporada">Temporada</option>'), 0 == $("#finalidade-mapa option[value='temporada']").length && $("#finalidade-mapa").append('<option value="temporada">Temporada</option>') } catch (e) {} try { 0 == $("#filtro-finalidade option[value='temporada']").length && $("#filtro-finalidade").append('<option value="temporada">Temporada</option>') } catch (e) {} }
        if (tipos(e, "estudante").length > 0) { try { 0 == $("#finalidade option[value='estudante']").length && $("#finalidade").append('<option value="estudante">Estudante</option>'), 0 == $("#finalidade-mapa option[value='estudante']").length && $("#finalidade-mapa").append('<option value="estudante">Estudante</option>') } catch (e) {} try { 0 == $("#filtro-finalidade option[value='estudante']").length && $("#filtro-finalidade").append('<option value="estudante">Estudante</option>') } catch (e) {} }
        if (tipos(e, "permuta").length > 0) { try { 0 == $("#finalidade option[value='permuta']").length && $("#finalidade").append('<option value="permuta">Permuta</option>'), 0 == $("#finalidade-mapa option[value='permuta']").length && $("#finalidade-mapa").append('<option value="permuta">Permuta</option>') } catch (e) {} try { 0 == $("#filtro-finalidade option[value='permuta']").length && $("#filtro-finalidade").append('<option value="permuta">Permuta</option>') } catch (e) {} }
        if (mobile) {
            try { $("#tipo").prepend('<option value="" disabled="true" selected="true">Tipos</option>') } catch (e) {}
            try { $("#cidade").prepend('<option value="" disabled="true" selected="true">Cidades</option>') } catch (e) {}
            try { $("#dormitorios").prepend('<option value="" disabled="true" selected="true">DormitÃ³rios</option>') } catch (e) {}
            try { $("#suites").prepend('<option value="" disabled="true" selected="true">SuÃ­tes</option>') } catch (e) {}
            try { $("#vagas").prepend('<option value="" disabled="true" selected="true">Vagas</option>') } catch (e) {}
            try { $("#bairro").prepend('<option value="" disabled="true" selected="true">Bairros</option>') } catch (e) {}
            try { $("#condominio").prepend('<option value="" disabled="true" selected="true">CondomÃ­nio</option>') } catch (e) {}
            try { $("#condominios").prepend('<option value="" disabled="true" selected="true">CondomÃ­nios</option>') } catch (e) {}
            try { $("#regiao").prepend('<option value="" disabled="true" selected="true">RegiÃ£o</option>') } catch (e) {}
            try { $("#edificio").prepend('<option value="" disabled="true" selected="true">EdifÃ­cio</option>') } catch (e) {}
            try { $("#categoria").prepend('<option value="" disabled="true" selected="true">Categoria</option>') } catch (e) {}
            try { $("#estado_obra").prepend('<option value="" disabled="true" selected="true">EstÃ¡gio da Obra</option>') } catch (e) {}
            try { $("#construtora").prepend('<option value="" disabled="true" selected="true">Construtora</option>') } catch (e) {}
            try { $("#quadra").prepend('<option value="" disabled="true" selected="true">Quadra</option>') } catch (e) {}
            try { $("#padrao").prepend('<option value="" disabled="true" selected="true">PadrÃ£o</option>') } catch (e) {}
            try { $("#frente_mar").prepend('<option value="" disabled="true" selected="true">Frente Mar</option>') } catch (e) {}
            $("#finalidade").show(), $("#tipo").show(), $("#cidade").show(), $("#bairro").show(), $("#valor").show(), $("#area").show(), $("#suites").show(), $("#dormitorios").show(), $("#suites").show(), $("#vagas").show(), $("#condominio").show(), $("#condominios").show(), $("#regiao").show(), $("#edificio").show(), $("#categoria").show(), $("#estado_obra").show(), $("#construtora").show(), $("#quadra").show(), $("#padrao").show(), $("#frente_mar").show(), $(".filtros select").show(), $("#finalidade").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#tipo").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#cidade").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#bairro").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#valor").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#area").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#suites").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#vagas").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#dormitorios").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#condominio").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#condominios").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#regiao").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#edificio").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#categoria").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#estado_obra").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#construtora").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#quadra").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#padrao").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#frente_mar").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $(".filtros select").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#referencia").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#autocomplete").css({ width: "100%", height: "35px", padding: "0 2%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "border-radius": "4px" }), $("#ordem-campo").css({ width: "90%", "margin-left": "5%", "margin-right": "5%", height: "35px", padding: "5px 0 5px 5%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "-webkit-border-radius": "3px", "-moz-border-radius": "3px", "border-radius": "3px" }), $("#ordem-resultado").css({ width: "90%", "margin-left": "5%", "margin-right": "5%", height: "35px", padding: "5px 0 5px 5%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "-webkit-border-radius": "3px", "-moz-border-radius": "3px", "border-radius": "3px" }), $("#total-imoveis").css({ width: "90%", "margin-left": "5%", "margin-right": "5%", height: "35px", padding: "5px 0 5px 5%", color: "#555", "-webkit-appearance": "none", "margin-bottom": "10px", background: "#FFF", "-webkit-border-radius": "3px", "-moz-border-radius": "3px", "border-radius": "3px" })
        } else { try { $("#filtro-finalidade").multiselect({ maxHeight: 250, enableFiltering: !1, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Finalidade", allSelectedText: "Finalidades" }) } catch (e) {} try { $("#filtro-dormitorios").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "DormitÃ³rio", allSelectedText: "DormitÃ³rios" }) } catch (e) {} try { $("#filtro-banheiros").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Banheiro", allSelectedText: "Banheiros" }) } catch (e) {} try { $("#filtro-suites").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "SuÃ­te", allSelectedText: "SuÃ­tes" }) } catch (e) {} try { $("#filtro-vagas").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Vaga", allSelectedText: "Vagas" }) } catch (e) {} try { $("#filtro-salas").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "DormitÃ³rio", allSelectedText: "DormitÃ³rios" }) } catch (e) {} try { $("#filtro-condominio").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "CondomÃ­nio", allSelectedText: "CondomÃ­nio" }) } catch (e) {} try { $("#filtro-padrao").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "PadrÃ£o", allSelectedText: "PadrÃ£o" }) } catch (e) {} try { $("#finalidade").multiselect({ maxHeight: 250, enableFiltering: !1, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Finalidade", allSelectedText: "Finalidades" }) } catch (e) {} try { $("#dormitorios").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "DormitÃ³rio", allSelectedText: "DormitÃ³rios" }) } catch (e) {} try { $("#banheiros").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Banheiro", allSelectedText: "Banheiros" }) } catch (e) {} try { $("#suites").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "SuÃ­te", allSelectedText: "SuÃ­tes" }) } catch (e) {} try { $("#vagas").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Vaga", allSelectedText: "Vagas" }) } catch (e) {} try { $("#condominio").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "CondomÃ­nio", allSelectedText: "CondomÃ­nio" }) } catch (e) {} try { $("#padrao").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "PadrÃ£o", allSelectedText: "PadrÃ£o" }) } catch (e) {} try { $("#frente_mar").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Frente Mar", allSelectedText: "Frente Mar" }) } catch (e) {} try { $("#ordem-campo").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Valor" }) } catch (e) {} try { $("#ordem-resultado").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Valor" }) } catch (e) {} try { $("#total-imoveis").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Valor" }) } catch (e) {} }
        var v = "";
        $("#filtro-finalidade").length && (v = "filtro-");
        try {
            $.each(tipos(e, $("#" + v + "finalidade").val()), function(e, t) {
                if (0 == $("#tipo option[value='" + t + "']").length) try { $("#tipo").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
                if (0 == $("#filtro-tipo option[value='" + t + "']").length) try { $("#filtro-tipo").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
            })
        } catch (e) {}
        if (!mobile) { try { $("#tipo").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, filterPlaceholder: "Pesquisar", nonSelectedText: "Tipo", allSelectedText: "Tipos" }) } catch (e) {} try { $("#filtro-tipo").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Tipo", allSelectedText: "Tipos" }) } catch (e) {} }
        try { $.each(subtipos(e, $("#" + v + "tipo").val()), function(e, t) { try { $("#subtipo").append('<option value="' + t + '">' + t + "</option>") } catch (e) {} try { $("#filtro-subtipo").append('<option value="' + t + '">' + t + "</option>") } catch (e) {} }) } catch (e) {}
        if (!mobile) { try { $("#subtipo").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, filterPlaceholder: "Pesquisar", nonSelectedText: "Subtipo", allSelectedText: "Subtipos" }) } catch (e) {} try { $("#filtro-subtipo").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Subtipo", allSelectedText: "Subtipos" }) } catch (e) {} }
        try {
            $.each(uf(e, $("#" + v + "tipo").val()), function(e, t) {
                if (0 == $("#uf option[value='" + t + "']").length) try { $("#uf").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
                if (0 == $("#filtro-uf option[value='" + t + "']").length) try { $("#filtro-uf").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
            })
        } catch (e) {}
        if (!mobile) { try { $("#uf").multiselect({ maxHeight: 250, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "UF" }) } catch (e) {} try { $("#filtro-uf").multiselect({ maxHeight: 250, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "UF" }) } catch (e) {} }
        try {
            $.each(cidades(e, $("#" + v + "finalidade").val(), $("#" + v + "tipo").val(), $("#" + v + "uf").val()), function(e, t) {
                if (0 == $("#cidade option[value='" + t + "']").length) try { $("#cidade").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
                if (0 == $("#filtro-cidade option[value='" + t + "']").length) try { $("#filtro-cidade").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
            })
        } catch (e) {}
        if (!mobile) { try { $("#cidade").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, filterPlaceholder: "Pesquisar", nonSelectedText: "Cidade", allSelectedText: "Cidades" }) } catch (e) {} try { $("#filtro-cidade").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Cidade", allSelectedText: "Cidades" }) } catch (e) {} }
        try {
            $.each(bairros(e, $("#" + v + "finalidade").val(), $("#" + v + "tipo").val(), $("#" + v + "uf").val(), $("#" + v + "cidade").val()), function(e, t) {
                if (0 == $("#bairro option[value='" + t + "']").length && 0 == $("#bairro option[value='" + t.removeDiacritics() + "']").length) try { $("#bairro").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
                if (0 == $("#filtro-bairro option[value='" + t + "']").length && 0 == $("#filtro-bairro option[value='" + t.removeDiacritics() + "']").length) try { $("#filtro-bairro").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
            })
        } catch (e) {}
        if (!mobile) { try { $("#bairro").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, numberDisplayed: 0, nSelectedText: "bairro(s)", filterPlaceholder: "Pesquisar", nonSelectedText: "Bairro", allSelectedText: "Bairros" }) } catch (e) {} try { $("#filtro-bairro").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", numberDisplayed: 0, nSelectedText: "bairro(s)", filterPlaceholder: "Pesquisar", nonSelectedText: "Bairro", allSelectedText: "Bairros" }) } catch (e) {} }
        try {
            $.each(condominios(e, $("#" + v + "finalidade").val(), $("#" + v + "tipo").val(), $("#" + v + "cidade").val()), function(e, t) {
                if (0 == $("#condominios option[value='" + t + "']").length) try { $("#condominios").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
                if (0 == $("#filtro-condominios option[value='" + t + "']").length) try { $("#filtro-condominios").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
            })
        } catch (e) {}
        if (!mobile) { try { $("#condominios").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, filterPlaceholder: "Pesquisar", nonSelectedText: "CondomÃ­nio", allSelectedText: "CondomÃ­nios" }) } catch (e) {} try { $("#filtro-condominios").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "CondomÃ­nio", allSelectedText: "CondomÃ­nios" }) } catch (e) {} }
        try {
            $.each(regiao(e, $("#" + v + "finalidade").val(), $("#" + v + "tipo").val(), $("#" + v + "cidade").val()), function(e, t) {
                if (0 == $("#regiao option[value='" + t + "']").length) try { $("#regiao").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
                if (0 == $("#filtro-regiao option[value='" + t + "']").length) try { $("#filtro-regiao").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
            })
        } catch (e) {}
        if (!mobile) { try { $("#regiao").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, filterPlaceholder: "Pesquisar", nonSelectedText: "RegiÃ£o", allSelectedText: "RegiÃµes" }) } catch (e) {} try { $("#filtro-regiao").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "RegiÃ£o", allSelectedText: "RegiÃµes" }) } catch (e) {} }
        try {
            $.each(edificio(e, $("#" + v + "finalidade").val(), $("#" + v + "tipo").val(), $("#" + v + "cidade").val()), function(e, t) {
                if (0 == $("#edificio option[value='" + t + "']").length) try { $("#edificio").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
                if (0 == $("#filtro-edificio option[value='" + t + "']").length) try { $("#filtro-edificio").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
            })
        } catch (e) {}
        if (!mobile) { try { $("#edificio").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, filterPlaceholder: "Pesquisar", nonSelectedText: "EdifÃ­cio", allSelectedText: "EdifÃ­cios" }) } catch (e) {} try { $("#filtro-edificio").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "EdifÃ­cio", allSelectedText: "EdifÃ­cios" }) } catch (e) {} }
        try {
            $.each(categoria(e, $("#" + v + "finalidade").val(), $("#" + v + "tipo").val(), $("#" + v + "cidade").val()), function(e, t) {
                if (0 == $("#categoria option[value='" + t + "']").length) try { $("#categoria").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
                if (0 == $("#filtro-categoria option[value='" + t + "']").length) try { $("#filtro-categoria").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
            })
        } catch (e) {}
        if (!mobile) { try { $("#categoria").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, filterPlaceholder: "Pesquisar", nonSelectedText: "Categoria", allSelectedText: "Categorias" }) } catch (e) {} try { $("#filtro-categoria").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Categoria", allSelectedText: "Categorias" }) } catch (e) {} }
        try { $.each(estado_obra(e, $("#" + v + "tipo").val(), $("#" + v + "cidade").val()), function(e, t) { if (0 == $("#estado_obra option[value='" + t + "']").length) try { $("#estado_obra").append('<option value="' + t + '">' + t + "</option>") } catch (e) {} }) } catch (e) {}
        if (!mobile) try { $("#estado_obra").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, filterPlaceholder: "Pesquisar", nonSelectedText: "EstÃ¡gio da Obra", allSelectedText: "EstÃ¡gio da Obra" }) } catch (e) {}
        try { $.each(construtora(e, $("#" + v + "tipo").val(), $("#" + v + "cidade").val()), function(e, t) { if (0 == $("#construtora option[value='" + t + "']").length) try { $("#construtora").append('<option value="' + t + '">' + t + "</option>") } catch (e) {} }) } catch (e) {}
        if (!mobile) try { $("#construtora").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, filterPlaceholder: "Pesquisar", nonSelectedText: "Construtora", allSelectedText: "Construtora" }) } catch (e) {}
        try {
            $.each(quadra(e, $("#" + v + "finalidade").val(), $("#" + v + "tipo").val(), $("#" + v + "cidade").val()), function(e, t) {
                if (0 == $("#quadra option[value='" + t + "']").length) try { $("#quadra").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
                if (0 == $("#filtro-quadra option[value='" + t + "']").length) try { $("#filtro-quadra").append('<option value="' + t + '">' + t + "</option>") } catch (e) {}
            })
        } catch (e) {}
        if (!mobile) { try { $("#quadra").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, filterPlaceholder: "Pesquisar", nonSelectedText: "Quadra", allSelectedText: "Quadra" }) } catch (e) {} try { $("#filtro-quadra").multiselect({ maxHeight: 250, enableFiltering: !0, enableCaseInsensitiveFiltering: !0, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Quadra", allSelectedText: "Quadra" }) } catch (e) {} }
        faixa_area = { areas: [{ valor: "", label: "Qualquer Ã¡rea" }, { valor: "max_100", label: "atÃ© 100mÂ²" }, { valor: "100_150", label: "de 100mÂ² atÃ© 150mÂ²" }, { valor: "150_200", label: "de 150mÂ² atÃ© 200mÂ²" }, { valor: "200_250", label: "de 200mÂ² atÃ© 250mÂ²" }, { valor: "250_300", label: "de 250mÂ² atÃ© 300mÂ²" }, { valor: "350_400", label: "de 350mÂ² atÃ© 400mÂ²" }, { valor: "400_450", label: "de 400mÂ² atÃ© 450mÂ²" }, { valor: "450_500", label: "de 450mÂ² atÃ© 500mÂ²" }, { valor: "500_750", label: "de 500mÂ² atÃ© 750mÂ²" }, { valor: "750_1000", label: "de 750mÂ² atÃ© 1.000mÂ²" }, { valor: "1000_1250", label: "de 1.000mÂ² atÃ© 1.250mÂ²" }, { valor: "1250_1500", label: "de 1.250mÂ² atÃ© 1.500mÂ²" }, { valor: "1500_3000", label: "de 1.500mÂ² atÃ© 3.000mÂ²" }, { valor: "3000_5000", label: "de 3.000mÂ² atÃ© 5.000mÂ²" }, { valor: "min_5000", label: "acima de 5.000mÂ²" }] }, $.each(faixa_area.areas, function(e, t) { $("#area").append('<option value="' + t.valor + '"">' + t.label + "</option>"), $("#filtro-area").append('<option value="' + t.valor + '"">' + t.label + "</option>") }), mobile || ($("#area").multiselect({ maxHeight: 250, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Ãrea" }), $("#filtro-area").multiselect({ maxHeight: 250, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Valor" })), faixa_valor = { locacao: [{ valor: "", label: "Valor indiferente" }, { valor: "max_300", label: "atÃ© 300" }, { valor: "300_400", label: "de 300 atÃ© 400" }, { valor: "400_500", label: "de 400 atÃ© 500" }, { valor: "500_750", label: "de 500 atÃ© 750" }, { valor: "750_1000", label: "de 750 atÃ© 1.000 mil" }, { valor: "1000_1250", label: "de 1.000 atÃ© 1.250 mil" }, { valor: "1250_1500", label: "de 1.250 atÃ© 1.500 mil" }, { valor: "1500_2000", label: "de 1.500 atÃ© 2.000 mil" }, { valor: "2000_3000", label: "de 2.000 atÃ© 3.000 mil" }, { valor: "3000_5000", label: "de 3.000 atÃ© 5.000 mil" }, { valor: "5000_7500", label: "de 5.000 atÃ© 7.500 mil" }, { valor: "7500_10000", label: "de 7.500 atÃ© 10.000 mil" }, { valor: "10000_12500", label: "de 10.000 atÃ© 12.500 mil" }, { valor: "12500_15000", label: "de 12.500 atÃ© 15.000 mil" }, { valor: "15000_30000", label: "de 15.000 atÃ© 30.000 mil" }, { valor: "min_30000", label: "acima de 30.000 mil" }], venda: [{ valor: "", label: "Valor indiferente" }, { valor: "max_100000", label: "atÃ© 100 mil" }, { valor: "100000_150000", label: "de 100 atÃ© 150 mil" }, { valor: "150000_200000", label: "de 150 atÃ© 200 mil" }, { valor: "200000_300000", label: "de 200 atÃ© 300 mil" }, { valor: "300000_400000", label: "de 300 atÃ© 400 mil" }, { valor: "400000_500000", label: "de 400 atÃ© 500 mil" }, { valor: "500000_750000", label: "de 500 atÃ© 750 mil" }, { valor: "750000_1000000", label: "de 750 atÃ© 1 milhÃ£o" }, { valor: "1000000_1250000", label: "de 1 atÃ© 1.250 milhÃµes" }, { valor: "1250000_1500000", label: "de 1.250 atÃ© 1.500 milhÃµes" }, { valor: "1500000_1750000", label: "de 1.500 atÃ© 1.750 milhÃµes" }, { valor: "1750000_2000000", label: "de 1.750 atÃ© 2 milhÃµes" }, { valor: "2000000_2250000", label: "de 2 atÃ© 2.225 milhÃµes" }, { valor: "2250000_2500000", label: "de 2.250 atÃ© 2.500 milhÃµes" }, { valor: "2500000_2750000", label: "de 2.500 atÃ© 2.750 milhÃµes" }, { valor: "2750000_3000000", label: "de 2.750 atÃ© 3 milhÃµes" }, { valor: "min_3000000", label: "acima de 3 milhÃµes" }], venda_locacao: [{ valor: "", label: "Valor indiferente" }] }, "comprar" == $("#finalidade").val() || "comprar" == $("#filtro-finalidade").val() || "" == $("#finalidade").val() || "" == $("#filtro-finalidade").val() || "permuta" == $("#finalidade").val() || "permuta" == $("#filtro-finalidade").val() ? $.each(faixa_valor.venda, function(e, t) { 0 == $("#valor option[value='" + t.valor + "']").length && $("#valor").append('<option value="' + t.valor + '"">' + t.label + "</option>"), 0 == $("#filtro-valor option[value='" + t.valor + "']").length && $("#filtro-valor").append('<option value="' + t.valor + '"">' + t.label + "</option>") }) : $.each(faixa_valor.locacao, function(e, t) { 0 == $("#valor option[value='" + t.valor + "']").length && $("#valor").append('<option value="' + t.valor + '"">' + t.label + "</option>"), 0 == $("#filtro-valor option[value='" + t.valor + "']").length && $("#filtro-valor").append('<option value="' + t.valor + '"">' + t.label + "</option>") }), mobile || ($("#valor").multiselect({ maxHeight: 250, filterPlaceholder: "Pesquisar", nonSelectedText: "Valor" }), $("#filtro-valor").multiselect({ maxHeight: 250, buttonWidth: "100%", filterPlaceholder: "Pesquisar", nonSelectedText: "Valor" }))
    }), $("img.lazy").show().lazyload({ effect: "fadeIn", skip_invisible: !1 }), $("#voltar").click(function() { history.back() }), $(".corretor_fixo_lateral, .ligue_fixo_lateral, .whatsapp_fixo_lateral, .messenger_lateral, .skype_lateral").css({ "-webkit-transition": "width 0.5s", transition: "width 0.5s", display: "block !important" }), $(".corretor_fixo_lateral").hover(function(e) { $(".corretor_fixo_lateral").css("width", "mouseenter" === e.type ? "128px" : "56px") }), $(".ligue_fixo_lateral").hover(function(e) { $(".ligue_fixo_lateral").css("width", "mouseenter" === e.type ? "128px" : "56px") }), $(".whatsapp_fixo_lateral").hover(function(e) { $(".whatsapp_fixo_lateral").css("width", "mouseenter" === e.type ? "200px" : "56px") }), $(".previsao_total").hover(function() { $(".previsao_fixo_lateral").animate({ width: "293px" }, "500"), $(".frame_previsao").animate({ width: "150px" }, "500") }), $(".previsao_total").mouseleave(function() { $(".frame_previsao").animate({ width: "0" }, "500"), $(".previsao_fixo_lateral").animate({ width: "56px" }, "500") }), $(".conversor_total").hover(function() { $(".conversor_fixo_lateral").animate({ width: "342px" }, "500"), $(".frame_conversor").animate({ width: "197px" }, "500") }), $(".conversor_total").mouseleave(function() { $(".frame_conversor").animate({ width: "0" }, "500"), $(".conversor_fixo_lateral").animate({ width: "56px" }, "500") });
    var S = new Date,
        T = new Array("Janeiro", "Fevereiro", "MarÃ§o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"),
        F = "";
    F = S.getHours() >= 19 ? "Boa noite" : S.getHours() >= 12 ? "Boa tarde" : "Bom dia", $(".data").html("<span>" + S.getDate() + "</span> de " + T[S.getMonth()] + " de " + S.getFullYear()), $(".facebook_frame").html("<iframe src='https://www.univencrm.com.br/sites_login_facebook/?raiz=" + window.location.href + "&url=" + window.location.href + "' frameborder='0' style='width:150px; height:30px; float:right;' scrolling='no' ></iframe>"), $(".saudacao").html(F), olaCorretor = setTimeout(function() { $(".corretor_mais").click() }, 5e3), getCookie("fecharAvisoCookies") || $(".aviso_cookies_fixo").show()
});
var isMobile = { Android: function() { return navigator.userAgent.match(/Android/i) }, BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i) }, iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) }, Opera: function() { return navigator.userAgent.match(/Opera Mini/i) }, Windows: function() { return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i) }, any: function() { return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() } };
String.prototype.removeDiacritics = function() {
    for (var e = [
            [/[\300-\306]/g, "A"],
            [/[\340-\346]/g, "a"],
            [/[\310-\313]/g, "E"],
            [/[\350-\353]/g, "e"],
            [/[\314-\317]/g, "I"],
            [/[\354-\357]/g, "i"],
            [/[\322-\330]/g, "O"],
            [/[\362-\370]/g, "o"],
            [/[\331-\334]/g, "U"],
            [/[\371-\374]/g, "u"],
            [/[\321]/g, "N"],
            [/[\361]/g, "n"],
            [/[\307]/g, "C"],
            [/[\347]/g, "c"]
        ], t = this, a = 0; a < e.length; a++) t = t.replace(e[a][0], e[a][1]);
    return t
}, String.prototype.capitalize = function(e) { return this.toLowerCase().replace(/^.|\s\S/g, function(e) { return e.toUpperCase() }) }, Date.prototype.addDays = function(e) { var t = new Date(this.valueOf()); return t.setDate(t.getDate() + e), t };