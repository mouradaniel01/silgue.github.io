var arquivosProjeto = [];

var tiposDocumentosBase = [];

tiposDocumentosBase.push(['ATA APROVAÇÃO DEPARTAMENTO'],['AUTORIZAÇÃO PARTICIPAÇÃO EM PESQUISA'],['LIMITE DE CARGA HORÁRIA/REMUNERAÇÃO'],['HOMOLOGAÇÃO PROPESQ'],['HOMOLOGAÇÃO PROPLAN'],['HOMOLOGAÇÃO PPG'],['PLANILHA CLT - FUNPEC']);

var tiposDocumentos = [];

tiposDocumentos.push(localStorage.getItem('tiposDocumentos'));

function ArquivoProjeto(tipo,descricao, arquivo){
	this.tipo = tipo;
	this.descricao = descricao;
	this.arquivo = arquivo;
}

function inserirTipoDocumento(idTabela, idNome, idSelect){
	var tipoDocumento = [];
	tipoDocumento.push(document.getElementById(idNome).value);
	tiposDocumentos.push(tipoDocumento);
	limpaSelect(document.getElementById(idSelect));
	populaSelect(document.getElementById(idSelect), tiposDocumentos);

	localStorage.setItem('tiposDocumentos',JSON.stringify(tiposDocumentos));

	popularTiposDocumento(idTabela);
}

function popularTiposDocumento(idTabela){

	var tabela = document.getElementById(idTabela);

	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}

	tiposDocumentos.forEach(function(tipo) {
		
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
	      	if(tipo === 'ATA APROVAÇÃO DEPARTAMENTO' || tipo === 'AUTORIZAÇÃO PARTICIPAÇÃO EM PESQUISA' || tipo === 'LIMITE DE CARGA HORÁRIA/REMUNERAÇÃO'
	      		|| tipo ==='HOMOLOGAÇÃO PROPESQ' || tipo === 'HOMOLOGAÇÃO PROPLAN' || tipo === 'HOMOLOGAÇÃO PPG' || tipo === 'PLANILHA CLT - FUNPEC'){
	      		novaCelula.innerHTML = ' ';
	      	}else{
	      		a = document.createElement("button");
		        a.setAttribute("onclick","removerTipoDocumento(this.parentNode.parentNode.rowIndex,'"+idTabela+"','"+tipo+"')");
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

function removerTipoDocumento(i,idTabela,nome){
	tiposDocumentos.forEach(function(tipo){
		if(tipo[0] === nome){
			tiposDocumentos.splice(tiposDocumentos.indexOf(tipo), 1);
		}
	});
	
    document.getElementById(idTabela).deleteRow(i);
}

function removerLinhaTabelaArquivo(i,idTabela,descricao){
	arquivosProjeto.forEach(function(arquivo){
		if(arquivo.descricao === descricao){
			arquivosProjeto.splice(arquivosProjeto.indexOf(arquivo), 1);
		}
	});
	
    document.getElementById(idTabela).deleteRow(i);
}

function inserirArquivo(idTabela,idSelect,idDescricao,idArquivo){

	var tipo = document.getElementById(idSelect).value;
	//var nome = document.getElementById('nome-arquivo').value;
	var descricao = document.getElementById(idDescricao).value;
	var arquivo = document.getElementById(idArquivo).value;

	var arquivoProjeto = new ArquivoProjeto(tipo,descricao,arquivo);

	arquivosProjeto.push(arquivoProjeto);

	populaTabelaArquivos(idTabela);
	//nomeAcao,link,onclick_,idTabela, parametro

}

function populaTabelaArquivos(idTabela){

	popularTabela(idTabela,arquivosProjeto,[['remover','','',idTabela,'']]);
	
}
