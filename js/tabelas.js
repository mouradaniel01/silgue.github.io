function BotaoAcao(id,classe,type,href,onclick,icone){
	this.id = id;
	this.classe = classe;
	this.type = type;
	this.href = href;
	this.onclick = onclick;
	this.icone = icone;
}

function limpaTabela(tabela){
	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}
}

function criarLinha(idTabela){
	// Captura a quantidade de linhas já existentes na tabela
   	var numLinhas = tabela.rows.length;
   	// Captura a quantidade de colunas da última linha da tabela
   	var numColunas = tabela.rows[numLinhas-1].cells.length;

	var novaLinha = tabela.insertRow(numLinhas);
	
	novaLinha.setAttribute("id",numLinhas+1);

	return novaLinha;
}

function removerLinhaTabela(i,idTabela,array,parametro){
	array.forEach(function(item){	
		if(item[0] === parametro){
			array.splice(array.indexOf(item), 1); 
		}
	});
	
    document.getElementById(idTabela).deleteRow(i);
}


function criarBotaoAcao(acao,array,parametro){ //nomeAcao,link,onclick_,idTabela, parametro
	//botao: id,classe,type,href,onclick,icone
	var nomeAcao = acao[0];
	var href = acao[1];
	var onclickFunction = acao[2];
	var idTabela = acao[3];
	var param = parametro;
	var botao;
	

	if(onclickFunction !='' && onclickFunction.indexOf("()") != -1){
		var onclick = onclickFunction;
	}else{
		var onclick = onclickFunction + "('" + param + "')";
	}

	
	if(nomeAcao === 'remover'){
		botao = document.createElement("button");
	    botao.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"','"+acao[4]+"','"+param+"')");
	    botao.setAttribute("class", "btn btn-link");
	    i = document.createElement("i");
	    i.setAttribute("class", "far fa-trash-alt");
	    botao.appendChild(i);
	}else if(nomeAcao === 'remover_arquivo'){
		botao = document.createElement("button");
	    botao.setAttribute("onclick","removerLinhaTabelaArquivo(this.parentNode.parentNode.rowIndex,'"+idTabela+"','"+acao[4]+"','"+param+"')");
	    botao.setAttribute("class", "btn btn-link");
	    i = document.createElement("i");
	    i.setAttribute("class", "far fa-trash-alt");
	    botao.appendChild(i);

	}
	/*else if(nomeAcao === 'redirecionar'){
		botao = document.createElement("a");
	    botao.setAttribute("href",href);
	    botao.setAttribute("class", "link-normal");
	    if(onclick != ''){
	    botao.setAttribute("onclick",onclick);
	    }
	    i = document.createElement("i");
	    i.setAttribute("class", "fas fa-external-link-alt");
	    botao.appendChild(i);
	}*/
	else if(nomeAcao === 'modal-exibicao' || nomeAcao === 'modal-cadastro'){
		botao = document.createElement("button");
	    botao.setAttribute("type", "button");
	    botao.setAttribute("class", "btn btn-link");
	    botao.setAttribute("data-toggle","modal");
	    botao.setAttribute("data-target", href);
	    botao.setAttribute("onclick",onclick);
	    i = document.createElement("i");
	    if(nomeAcao === 'modal-cadastro'){
	    	i.setAttribute("class", "fas fa-user-plus");
	    }else{
	    	i.setAttribute("class", "fas fa-file-alt");//<i class="fas fa-file-contract"></i><i class="far fa-file"></i> <i class="fas fa-info-circle"></i> -- <i class="fas fa-info"></i>
	    }
	    botao.appendChild(i);
	}
	return botao;
}

function popularTabela(idTabela,array,acoes,limpaTela,linkNoRegistro){

	//acoes: array com as informações de cada ação do botão. Precisa das seguintes informações: nomeAcao,acao,idTabela, parametro 

 	var tabela = document.getElementById(idTabela);

 	var parametroBotao = "";

 	var redirecionar = "";

 	var botao;

 	var visualizarNoPrimeroDadoDaTabela = false;

 	var href = '';

 	if(limpaTela === 'sim'){
		limpaTabela(tabela);
 	}

 	if(Array.isArray(acoes) && acoes != null){
 		acoes.forEach( function (acao){
 		if(acao[0] === 'redirecionar'){
 			redirecionar = acao[1];
 		}else if(acao[0] === 'dados_do_projeto'){
 			visualizarNoPrimeroDadoDaTabela = true;
 			 href = acao[1];
 		}
 	});
 	}

	array.forEach(function(item){

		var resultado = [];

		var numLinhas = tabela.rows.length;
	   	// Captura a quantidade de colunas da última linha da tabela
	   	var numColunas = tabela.rows[numLinhas-1].cells.length;

   		var novaLinha = tabela.insertRow(numLinhas);
   		
   		novaLinha.setAttribute("id",numLinhas+1);
   		

   		for (var i in item) {
		    if (item.hasOwnProperty(i)) {
		        resultado.push(item[i]);
		    }
		}

   		for (var j = 0; j < numColunas; j++) {
	    	var i;
	       // Insere uma coluna na nova linha 
	    	novaCelula = novaLinha.insertCell(j);

	    	i = numColunas-1;

	    	if (resultado.hasOwnProperty(j)) {
	    		if(j===0){
	    			if(linkNoRegistro === 'sim' && !visualizarNoPrimeroDadoDaTabela){
	    				botao = document.createElement("a");
					    botao.setAttribute("href",redirecionar);
					    botao.setAttribute("class", "link-normal");
					    botao.setAttribute("onclick","passarNumeroProjeto("+resultado[0]+")");
					    botao.innerHTML = resultado[j];
					    novaCelula.appendChild(botao);
					}else if(linkNoRegistro === 'sim' && visualizarNoPrimeroDadoDaTabela){
						botao = document.createElement("button");
					    botao.setAttribute("type", "button");
					    botao.setAttribute("class", "btn btn-link");
					    botao.setAttribute("data-toggle","modal");
					    botao.setAttribute("data-target", href);
					    botao.setAttribute("onclick",onclick);
					    botao.innerHTML = resultado[j];
					    novaCelula.appendChild(botao);
				}else{
					novaCelula.innerHTML = resultado[j];
				}
	    			
	    		}else{
					novaCelula.innerHTML = resultado[j];
	    		}
   	
		    }else{
		    	novaCelula.setAttribute("align","right");
      			novaCelula.setAttribute("class","btn-group");
      			
      			if(acoes.length > 0){
      				acoes.forEach( function (acao){
		      			acao.push(array);
		      			botao = criarBotaoAcao(acao,array,resultado[0]);
		      			if(botao === null || botao === undefined){
		      				novaCelula.innerHTML = " ";
		      			}else{
		      				novaCelula.appendChild(botao);
		      			}
		      			
		      	});
      			}else{
      				novaCelula.innerHTML = " ";
      			}
		      	
		    }
	   }
	});

 }

 function popularTabelaComBotaoDropDown(idTabela,array,acoes){

	//acoes: array com as informações de cada ação do botão. Precisa das seguintes informações: nomeAcao,acao,idTabela, parametro 

 	var tabela = document.getElementById(idTabela);

 	var parametroBotao = "";

 	var botao;
	var div;
	var divItens;

	limpaTabela(tabela);

	array.forEach(function(item){

		var resultado = [];

		var numLinhas = tabela.rows.length;
	   	// Captura a quantidade de colunas da última linha da tabela
	   	var numColunas = tabela.rows[numLinhas-1].cells.length;

   		var novaLinha = tabela.insertRow(numLinhas);
   		
   		novaLinha.setAttribute("id",numLinhas+1);

   		for (var i in item) {
		    if (item.hasOwnProperty(i)) {
		        resultado.push(item[i]);
		    }
		}

   		for (var j = 0; j < numColunas; j++) {
	    	var i;
	       // Insere uma coluna na nova linha 
	    	novaCelula = novaLinha.insertCell(j);

	    	i = numColunas-1;

	    	if (resultado.hasOwnProperty(j)) {

				novaCelula.innerHTML = resultado[j];
		      	
		    }else{
		    	//novaCelula.setAttribute("align","right");
      			//novaCelula.setAttribute("class","btn-group");

				div = document.createElement("div");
				div.setAttribute("class","btn-group dropright");
				botao = document.createElement("button");
				botao.setAttribute("type","button");
				botao.setAttribute("id","botoes_"+idTabela);
				botao.setAttribute("class", "btn btn-link dropdown-toggle");
				botao.setAttribute("data-toggle","dropdown");
				botao.setAttribute("aria-haspopup","true");
				botao.setAttribute("aria-expanded","false");
				i = document.createElement("i");
				i.setAttribute("class", "fas fa-toolbox");//<i class="fas fa-toolbox"></i>
				botao.appendChild(i);
				div.appendChild(botao);
				divItens = document.createElement("div");
				divItens.setAttribute("class","dropdown-menu");//aria-labelledby="dropdownMenu2"
				divItens.setAttribute("aria-labelledby","botoes_"+idTabela);
      			
      			if(acoes.length > 0){
      				acoes.forEach( function (acao){
		      			acao.push(array);
		      		divItens.appendChild(criarBotaoDropRight(acao,array,resultado[0]));
		      	});
      			}else{
      				novaCelula.innerHTML = "Vazio";
      			}
      			div.appendChild(divItens);
      			novaCelula.appendChild(div);
		      	
		    }
	   }
	});

 }

 function criarBotaoDropRight(acao,array,parametro){
	//botao: id,classe,type,href,onclick,icone
	var nomeAcao = acao[0];
	var href = acao[1];
	var onclickFunction = acao[2];
	var idTabela = acao[3];
	var param = parametro;

	if(onclickFunction !='' && onclickFunction.indexOf("()") != -1){
		var onclick = onclickFunction;
	}else{
		var onclick = onclickFunction + "('" + param + "')";
	}
	
	if(nomeAcao === 'remover'){
		botao = document.createElement("button");
	    botao.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"','"+acao[4]+"','"+param+"')");
	    otao.setAttribute("type", "button");
	    botao.setAttribute("class", "btn btn-link");
	    botao.setAttribute("data-tt","tooltip");
	    botao.setAttribute("title","Remover da listagem");
	    i = document.createElement("i");
	    i.setAttribute("class", "far fa-trash-alt");
	    botao.appendChild(i);
	}else if(nomeAcao === 'redirecionar'){
		botao = document.createElement("a");
	    botao.setAttribute("class", "btn btn-link");
	    botao.setAttribute("data-tt","tooltip");
	    botao.setAttribute("title","Alterar Projeto");
	    botao.setAttribute("href",href);
	    if(onclick != ''){
	    botao.setAttribute("onclick",onclick);
	    }
	    i = document.createElement("i");
	    i.setAttribute("class", "fas fa-external-link-alt");
	    botao.appendChild(i);
	}else if(nomeAcao === 'modal-exibicao' || nomeAcao === 'modal-cadastro' || 
		nomeAcao === 'modal-gerar-minuta' || nomeAcao === 'modal-solicitar-dotacao' || 
		nomeAcao === 'modal-solicitar-empenho' || nomeAcao === 'modal-parecer-referencial' ||
		nomeAcao === 'modal-parecer-funpec' || nomeAcao === 'modal-dados-bancarios-funpec' || 
		nomeAcao === 'modal-parecer-agir' || nomeAcao === 'modal-analise-tecnica' ||
		nomeAcao === 'modal-instrumento-juridico' || nomeAcao === 'modal-justificativa-retorno'){
		botao = document.createElement("button");
	    botao.setAttribute("type", "button");
	    botao.setAttribute("class", "btn btn-link");
	    botao.setAttribute("data-toggle","modal");
	    botao.setAttribute("data-tt","tooltip");
	    botao.setAttribute("data-target", href);
	    botao.setAttribute("onclick",onclick);
	    i = document.createElement("i");
	    if(nomeAcao === 'modal-cadastro'){
	    	botao.setAttribute("title","Informar Técnico Responsável");
	    	i.setAttribute("class", "fas fa-user-plus");
	    }else if(nomeAcao === 'modal-exibicao'){
	    	botao.setAttribute("title","Visualizar informações do projeto");
	    	i.setAttribute("class", "fas fa-file-alt");//<i class="fas fa-file-contract"></i><i class="far fa-file"></i> <i class="fas fa-info-circle"></i> -- <i class="fas fa-info"></i>
	    }else if(nomeAcao === 'modal-parecer-funpec'){
	    	botao.setAttribute("title","Emitir Parecer Funpec");
	    	i.setAttribute("class", "fas fa-funnel-dollar");
	    }else if(nomeAcao === 'modal-justificativa-retorno'){
	    	botao.setAttribute("title","Informar Justificativa para Retorno do Projeto");
	    	i.setAttribute("class", "fas fa-undo-alt");//<i class="fas fa-undo-alt"></i>
	    }else if(nomeAcao === 'modal-analise-tecnica'){
	    	botao.setAttribute("title","Emitir Análise Técnica");//<i class="fas fa-drafting-compass"></i>
	    	i.setAttribute("class", "fas fa-drafting-compass");
	    }else if(nomeAcao === 'modal-instrumento-juridico'){
	    	botao.setAttribute("title","Emitir Análise Instrumento Jurídico");//<i class="fas fa-drafting-compass"></i>
	    	i.setAttribute("class", "fas fa-drafting-compass");
	    }else if(nomeAcao === 'modal-dados-bancarios-funpec'){
	    	botao.setAttribute("title","Informar dados bancários do projeto");//<i class="fas fa-piggy-bank"></i>
	    	i.setAttribute("class", "fas fa-piggy-bank");
	    }else if(nomeAcao === 'modal-gerar-minuta'){
	    	botao.setAttribute("title","Gerar Minuta");
	    	i.setAttribute("class", "fas fa-file-signature")
	    }else if(nomeAcao === 'modal-solicitar-dotacao'){
	    	botao.setAttribute("title","Solicitar Dotação Orçamentária");
	    	i.setAttribute("class", "fas fa-money-check-alt");
	    }else if(nomeAcao === 'modal-solicitar-empenho'){
	    	botao.setAttribute("title","Solicitar Empenho");
	    	i.setAttribute("class", "far fa-money-bill-alt");
	    }else if(nomeAcao === 'modal-parecer-referencial'){
	    	botao.setAttribute("title","Enviar Despacho Parecer Referêncial para assinatura");
	    	i.setAttribute("class", "fas fa-balance-scale-right");
	    }else if(nomeAcao === 'modal-parecer-agir'){
	    	botao.setAttribute("title","Solicitar Parecer da AGIR");
	    	i.setAttribute("class", "fas fa-asterisk");
	    }
	    botao.appendChild(i);
	}
	return botao;
	//<i class="fas fa-file-signature"></i>
	//<i class="fas fa-balance-scale-right"></i>
	//<i class="fas fa-money-check-alt"></i>
	//<i class="far fa-money-bill-alt"></i>
	//<i class="fas fa-funnel-dollar"></i>
	//<i class="fas fa-asterisk"></i>
}

