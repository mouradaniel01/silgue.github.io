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

	if(onclickFunction !='' && onclickFunction.indexOf("()") != -1){
		var onclick = onclickFunction;
	}else{
		var onclick = onclickFunction + "('" + param + "')";
	}

	var botao;
	if(nomeAcao === 'remover'){
		botao = document.createElement("button");
	    botao.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"','"+acao[4]+"','"+param+"')");
	    botao.setAttribute("class", "btn btn-link");
	    i = document.createElement("i");
	    i.setAttribute("class", "far fa-trash-alt");
	    botao.appendChild(i);
	}else if(nomeAcao === 'redirecionar'){
		botao = document.createElement("a");
	    botao.setAttribute("href",href);
	    botao.setAttribute("class", "link-normal");
	    if(onclick != ''){
	    botao.setAttribute("onclick",onclick);
	    }
	    i = document.createElement("i");
	    i.setAttribute("class", "fas fa-external-link-alt");
	    botao.appendChild(i);
	}else if(nomeAcao === 'modal-exibicao' || nomeAcao === 'modal-cadastro'){
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

function popularTabela(idTabela,array,acoes){

	//acoes: array com as informações de cada ação do botão. Precisa das seguintes informações: nomeAcao,acao,idTabela, parametro 

 	var tabela = document.getElementById(idTabela);

 	var parametroBotao = "";

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
		    	novaCelula.setAttribute("align","right");
      			novaCelula.setAttribute("class","btn-group");
      			
      			if(acoes.length > 0){
      				acoes.forEach( function (acao){
		      			acao.push(array);
		      		novaCelula.appendChild(criarBotaoAcao(acao,array,resultado[0]));
		      	});
      			}else{
      				novaCelula.innerHTML = "Vazio";
      			}
		      	
		    }
	   }
	});

 }

