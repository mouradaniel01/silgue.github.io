var arquivosProjeto = [];

var tiposDocumentos = ['ATA APROVAÇÃO DEPARTAMENTO', 'AUTORIZAÇÃO PARTICIPAÇÃO EM PESQUISA', 'LIMITE DE CARGA HORÁRIA/REMUNERAÇÃO', 'HOMOLOGAÇÃO PROPESQ', 'HOMOLOGAÇÃO PROPLAN', 'HOMOLOGAÇÃO PPG'];

function ArquivoProjeto(tipo,descricao, arquivo){
	this.tipo = tipo;
	this.descricao = descricao;
	this.arquivo = arquivo;
}

function inserirTipoDocumento(){
	tiposDocumentos.push(document.getElementById('nome-tipo-documento').value);
	limpaSelect(document.getElementById('select-tipos-documentos'));
	populaSelect(document.getElementById('select-tipos-documentos'), tiposDocumentos);
	populaTiposDocumento();
}

function inserirArquivo(){

	var tipo = document.getElementById('select-tipos-documentos').value;
	//var nome = document.getElementById('nome-arquivo').value;
	var descricao = document.getElementById('descricao-arquivo').value;
	var arquivo = document.getElementById('arquivo-projeto').value;

	var arquivoProjeto = new ArquivoProjeto(tipo,descricao,arquivo);

	arquivosProjeto.push(arquivoProjeto);

	populaTabelaArquivos();

}

function populaTiposDocumento(){

	var tabela = document.getElementById('tabela-tipos-documentos');

	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}

	tiposDocumentos.forEach(function (tipo) {
		
		// Captura a quantidade de linhas já existentes na tabela
	   	var numLinhas = tabela.rows.length;
	   	// Captura a quantidade de colunas da última linha da tabela
	   	var numColunas = tabela.rows[numLinhas-1].cells.length;

   		var novaLinha = tabela.insertRow(numLinhas);
   		novaLinha.setAttribute("id",numLinhas+1);

   		for (var j = 0; j < numColunas; j++) {
	      var a, i;
	       // Insere uma coluna na nova linha 
	      novaCelula = novaLinha.insertCell(j);
	      if(j===0){
	      novaCelula.innerHTML = tipo;
	      }else{
	      	if(tipo != 'ATA APROVAÇÃO DEPARTAMENTO' && tipo !=  'AUTORIZAÇÃO PARTICIPAÇÃO EM PESQUISA' && tipo != 'LIMITE DE CARGA HORÁRIA/REMUNERAÇÃO' && tipo != 'HOMOLOGAÇÃO PROPESQ' && tipo != 'HOMOLOGAÇÃO PROPLAN' && tipo != 'HOMOLOGAÇÃO PPG'){
	      		a = document.createElement("button");
	        a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'tabela-tipos-documentos')");
	        a.setAttribute("class", "btn btn-link");
	        i = document.createElement("i");
	        i.setAttribute("class", "far fa-trash-alt");
	        a.appendChild(i);
	        novaCelula.appendChild(a);
	    	}
	      }
	   }
	});

}

function removerLinhaTabelaArquivo(i,idTabela,descricao){
	arquivosProjeto.forEach(function(arquivo){
		if(arquivo.descricao === descricao){
			arquivosProjeto.splice(arquivosProjeto.indexOf(arquivo), 1);
		}
	});
	
    document.getElementById(idTabela).deleteRow(i);
}

function populaTabelaArquivos(){

	var tabela = document.getElementById('tabela-arquivos');

	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}

	arquivosProjeto.forEach(function (arquivo) {
		
		// Captura a quantidade de linhas já existentes na tabela
	   	var numLinhas = tabela.rows.length;
	   	// Captura a quantidade de colunas da última linha da tabela
	   	var numColunas = tabela.rows[numLinhas-1].cells.length;

   		var novaLinha = tabela.insertRow(numLinhas);
   		novaLinha.setAttribute("id",numLinhas+1);

   		for (var j = 0; j < numColunas; j++) {
	      var a, i;
	       // Insere uma coluna na nova linha 
	      novaCelula = novaLinha.insertCell(j);
	      if(j===0){
	      	novaCelula.innerHTML = arquivo.tipo;
	      }else if(j===1){
	      	novaCelula.innerHTML = arquivo.descricao;
	      }else if(j===2){
	      	novaCelula.innerHTML = arquivo.arquivo;
	      }else{
	      	a = document.createElement("button");
	        a.setAttribute("onclick","removerLinhaTabelaArquivo(this.parentNode.parentNode.rowIndex,'tabela-arquivos','"+arquivo.descricao+"')");
	        a.setAttribute("class", "btn btn-link");
	        i = document.createElement("i");
	        i.setAttribute("class", "far fa-trash-alt");
	        a.appendChild(i);
	        novaCelula.appendChild(a);
	      }
	   }
	});
}
