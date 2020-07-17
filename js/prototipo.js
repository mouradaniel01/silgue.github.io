var numListaComponente = 0;
var mapaComponente = new Map();
var docentesCurso = [];
var docentesCursoSelect = [];
var chTotal = 0;
var mapaDocenteComponente = new Map();
var componentes = [];
var docentesComponente = [];

function Componente(codigo, nome, tipo, chAula, chEstagio, chOrientacao, chLaboratorio, chTotal, ementa, bibliografia, docentes){
	this.codigo = codigo;
	this.nome = nome;
	this.tipo = tipo;
	this.chAula = chAula;
	this.chEstagio = chEstagio;
	this.chOrientacao = chOrientacao;
	this.chLaboratorio = chLaboratorio;
	this.chTotal = chTotal;
	this.ementa = ementa;
	this.bibliografia = bibliografia;
	this.docentes = docentes; 
}

function Docente(nome, tipo, nacionalidade, cpf_passaporte, matricula, formacao, vinculo, instituicao, ch){
	this.nome = nome;
	this.tipo = tipo;
	this.nacionalidade = nacionalidade;
	this.cpf_passaporte = cpf_passaporte;
	this.matricula = matricula;
	this.formacao = formacao;
	this.vinculo = vinculo;
	this.instituicao = instituicao;
	this.ch = ch;
}



function limpaSelect(elemento){
	while (elemento.length > 0) {
	    elemento.remove(elemento.length-1);
	  }
  }

function populaSelect(elemento, array){
	array.forEach((opt) => {
      option = new Option(opt, opt.toLowerCase());
      elemento.options[elemento.options.length] = option;
    });
}

function exibirDetalhes(flag,div){
	 $('input[name=flag]').change(function () {
             if ($('input[name=flag]:checked').val() === "Sim") {
                 $('.div').show();
             } else {
                 $('.div').hide();
             }
         });
}

function calcular(vlr1,vlr2,resultado) {
              var n1 = parseInt(document.getElementById('vlr1').value, 10);
              var n2 = parseInt(document.getElementById('vlr2').value, 10);
              document.getElementById('resultado').innerHTML = n1 + n2;
}

function inserirLinhaTabela(idTabela) {
   // Captura a referência da tabela com id “minhaTabela”
   var tabela = document.getElementById(idTabela);
   // Captura a quantidade de linhas já existentes na tabela
   var numLinhas = tabela.rows.length;
   // Captura a quantidade de colunas da última linha da tabela
   var numColunas = tabela.rows[numLinhas-1].cells.length;
   // Insere uma linha no fim da tabela.
   var novaLinha = tabela.insertRow(numLinhas);

   novaLinha.setAttribute("id",numLinhas+1);
}

function inserirLinhaTabelaByInput(idTabela,idInput) {
   // Captura a referência da tabela com id “minhaTabela”
   var tabela = document.getElementById(idTabela);
   //Captura o select
   var input = document.getElementById(idInput);
   //Captura o valor do select
   var valor = input.value;
   // Captura a quantidade de linhas já existentes na tabela
   var numLinhas = tabela.rows.length;
   // Captura a quantidade de colunas da última linha da tabela
   var numColunas = tabela.rows[numLinhas-1].cells.length;
   // Insere uma linha no fim da tabela.
   var novaLinha = tabela.insertRow(numLinhas);

   novaLinha.setAttribute("id",numLinhas+1);
   
   // Faz um loop para criar as colunas
   for (var j = 0; j < numColunas; j++) {
      var a, i;
       // Insere uma coluna na nova linha 
      novaCelula = novaLinha.insertCell(j);
      if(j===0){
      novaCelula.innerHTML = valor.toUpperCase();
      }else{
         a = document.createElement("button");
         a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"')");
         a.setAttribute("class", "btn btn-link");
         i = document.createElement("i");
         i.setAttribute("class", "far fa-trash-alt");
         a.appendChild(i);
         novaCelula.appendChild(a);
      }
   }
}

function populaTabelaDocentesComponente(nomeComponente, idTabela){

	var docentes = [];

	var tabela = document.getElementById(idTabela);

	document.getElementById('nome-componente-oculto').value = nomeComponente;

	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}

	componentes.forEach(function (componente) {
		if(componente.nome === nomeComponente){
			
			// Captura a quantidade de linhas já existentes na tabela
		   	var numLinhas = tabela.rows.length;
		   	// Captura a quantidade de colunas da última linha da tabela
		   	var numColunas = tabela.rows[numLinhas-1].cells.length;

		   	console.log("ação de popular tabela ");
		   	console.log(componente);

	   		componente.docentes.forEach(function (docente) {
		   		var novaLinha = tabela.insertRow(numLinhas);
		   		novaLinha.setAttribute("id",numLinhas+1);

		   		for (var j = 0; j < numColunas; j++) {
		      	var a, b, i;
		       	// Insere uma coluna na nova linha 
		      	novaCelula = novaLinha.insertCell(j);
			    if(j===0){
			      	novaCelula.innerHTML = docente.nome;
			      	}else if(j===1){
			       		novaCelula.innerHTML = docente.ch;
			     	}else{ 
			      		novaCelula.setAttribute("align","right");
		      			novaCelula.setAttribute("class","btn-group");
			      		a = document.createElement("button");
			         	a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"')");
			         	a.setAttribute("class", "btn btn-link");
			         	i = document.createElement("i");
			         	i.setAttribute("class", "far fa-trash-alt");
			         	a.appendChild(i);
			         	novaCelula.appendChild(a);
			        }
			    }
			});
		}
	});
}

function popularTabelaDocenteComponente(nomeComponente, idTabela){

	var nome = nomeComponente.toUpperCase();

	var docentesComponente = new Map();

	document.getElementById('nome-componente-oculto').value = nomeComponente;

	if(mapaDocenteComponente.has(nome)){
		console.log("o mapa tem esse componente");
   		docentesComponente = mapaDocenteComponente.get(nome);
   	}else{
   		console.log("o mapa não tem esse componente");
   		mapaDocenteComponente.set(nome,docentesComponente);
   	}
   	console.log(nome);
   	
   	console.log(docentesComponente);

	var tabela = document.getElementById(idTabela);

	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}

	// Captura a quantidade de linhas já existentes na tabela
   	var numLinhas = tabela.rows.length;
   	// Captura a quantidade de colunas da última linha da tabela
   	var numColunas = tabela.rows[numLinhas-1].cells.length;

   	for (var [key, value] of docentesComponente) {
   		console.log(key,value);
	    // Insere uma linha no fim da tabela.
   		var novaLinha = tabela.insertRow(numLinhas);
   		novaLinha.setAttribute("id",numLinhas+1);
   		// Faz um loop para criar as colunas
   		for (var j = 0; j < numColunas; j++) {
      	var a, b, i;
       	// Insere uma coluna na nova linha 
      	novaCelula = novaLinha.insertCell(j);
	    if(j===0){
	    	console.log("inserindo nome");
	      	novaCelula.innerHTML = Key;
	      	}else if(j===1){
	      		console.log("inserindo ch");
	       		novaCelula.innerHTML = value;
	     	}else{ 
	      		novaCelula.setAttribute("align","right");
      			novaCelula.setAttribute("class","btn-group");
	      		a = document.createElement("button");
	         	a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"')");
	         	a.setAttribute("class", "btn btn-link");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "far fa-trash-alt");
	         	a.appendChild(i);
	         	novaCelula.appendChild(a);
	        }
	    }
	}
}

function inserirLinhaTabelaDocenteComponente(idTabela,nomeDocente, chDocenteComponente){

	var tabela = document.getElementById(idTabela);

	var docentes = [];

	var chDocente = document.getElementById(chDocenteComponente).value;
   
   	var nome = document.getElementById(nomeDocente).value.toUpperCase();

   	var nomeComponente = document.getElementById('nome-componente-oculto').value;

   	console.log("Inserindo docente no componente:" + nomeComponente);

   	componentes.forEach(function (componente) {
   		console.log(componente);
		if(componente.nome === nomeComponente){
			console.log("achou o componente");
			docentes = componente.docentes;
			var docenteComponente = new Docente();
			console.log("docentes do curso");
			docentesCurso.forEach(function (docente) {
				console.log("procurando o docente:" + nome);
				console.log(docente);
				if(docente.nome === nome){
					console.log("Achou o docente:" + nome);
					console.log(docente);
					docenteComponente = docente;
					docenteComponente.ch = chDocente;
					console.log("inseriu as informações do docente");
					console.log(docenteComponente);
					docentes.push(docenteComponente);
					console.log(docentes);
				}
			});

			componente.docentes = docentes;
			console.log("inseriu o docente no componente");
			console.log(componente);
		}
	});

	populaTabelaDocentesComponente(nomeComponente,idTabela);

}

function inserirComponente(idTabela, nomeComponente, tipoComponente, chAulaComponente, chEstagioComponente, 
	chOrientacaoComponente, chLaboratorioComponente, ementaComponente, bibliografiaComponente){

	var codigo = "LAT" + (componentes.length + 1);
	chTotal = 0;

	var nome = document.getElementById(nomeComponente).value;
	var tipo = document.getElementById(tipoComponente).value;
	var chAula = document.getElementById(chAulaComponente).value;
	var chEstagio = document.getElementById(chEstagioComponente).value;
	var chOrientacao = document.getElementById(chOrientacaoComponente).value;
	var chLaboratorio = document.getElementById(chLaboratorioComponente).value;
	var ementa = document.getElementById(ementaComponente).value;
	var bibliografia = document.getElementById(bibliografiaComponente).value;


   	if(document.getElementById("carga-horaria-aula").value.length > 0){
      chTotal += parseInt(document.getElementById("carga-horaria-aula").value,10);
   	}
   	if(document.getElementById("carga-horaria-laboratorio").value.length > 0){
      chTotal += parseInt(document.getElementById("carga-horaria-laboratorio").value,10);
   	}
   	if(document.getElementById("carga-horaria-estagio").value.length > 0){
      chTotal += parseInt(document.getElementById("carga-horaria-estagio").value,10);
   	}
   	if(document.getElementById("carga-horaria-orientacao").value.length > 0){
      chTotal += parseInt(document.getElementById("carga-horaria-orientacao").value,10);
   	}

	var componente = new Componente(codigo, nome, tipo, chAula, chEstagio, chOrientacao, chLaboratorio, chTotal, ementa, bibliografia,[]);

	componentes.push(componente);

	populaTabelaComponentes(idTabela, componente);
}

function populaTabelaComponentes(idTabela, componente){

	var tabela = document.getElementById(idTabela);
		// Captura a quantidade de linhas já existentes na tabela

	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}
	
	componentes.forEach(function (componente) {
		
	   	var numLinhas = tabela.rows.length;
	   	// Captura a quantidade de colunas da última linha da tabela
	   	var numColunas = tabela.rows[numLinhas-1].cells.length;
	   	// Insere uma linha no fim da tabela.
	   	var novaLinha = tabela.insertRow(numLinhas);

	   	novaLinha.setAttribute("id",numLinhas+1);

	   	// Faz um loop para criar as colunas
	   	for (var j = 0; j < numColunas; j++) {
	      	var a, b, i;
	       	// Insere uma coluna na nova linha 
	      	novaCelula = novaLinha.insertCell(j);
		    if(j===0){
		    	numListaComponente++;
		      	novaCelula.innerHTML = componente.codigo;
		    }else if(j===1){
		       	novaCelula.innerHTML = componente.nome;
		    }else if(j===2){
		      	novaCelula.innerHTML = componente.chTotal;
		    }else{ 
	      		novaCelula.setAttribute("align","right");
      			novaCelula.setAttribute("class","btn-group");
	      		a = document.createElement("button");
	         	a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"')");
	         	a.setAttribute("class", "btn btn-link");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "far fa-trash-alt");
	         	a.appendChild(i);
	         	novaCelula.appendChild(a);

	         	b = document.createElement("button");
	         	b.setAttribute("type", "button");
	         	b.setAttribute("class", "btn btn-link");
	         	b.setAttribute("data-toggle","modal");
	         	b.setAttribute("data-target", "#modalEmenta");
	         	b.setAttribute("onclick","exibirEmenta('"+componente.nome+"')");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "fas fa-search");
	         	b.appendChild(i);
	         	novaCelula.appendChild(b);

	         	c = document.createElement("button");
	         	c.setAttribute("type", "button");
	         	c.setAttribute("class", "btn btn-link");
	         	c.setAttribute("data-toggle","modal");
	         	c.setAttribute("data-target", "#modalDocentesComponente");
	         	c.setAttribute("onclick","populaTabelaDocentesComponente('"+componente.nome+"','tabela-docentes-componente')");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "fas fa-external-link-alt");
	         	c.appendChild(i);
	         	novaCelula.appendChild(c);
	        }
		}
	});
}


function inserirLinhaTabelaComponente(idTabela, nomeComponente, ementa, bibliografia){
	chTotal = 0;
	var array = [];
	
   	if(document.getElementById("carga-horaria-aula").value.length > 0){
      chTotal += parseInt(document.getElementById("carga-horaria-aula").value,10);
   	}
   	if(document.getElementById("carga-horaria-laboratorio").value.length > 0){
      chTotal += parseInt(document.getElementById("carga-horaria-laboratorio").value,10);
   	}
   	if(document.getElementById("carga-horaria-estagio").value.length > 0){
      chTotal += parseInt(document.getElementById("carga-horaria-estagio").value,10);
   	}
   	if(document.getElementById("carga-horaria-orientacao").value.length > 0){
      chTotal += parseInt(document.getElementById("carga-horaria-orientacao").value,10);
   	}
   	
	var ementa = document.getElementById(ementa).value;

	var bibliografia = document.getElementById(bibliografia).value;
	
	var tabela = document.getElementById(idTabela);

   	var nome = document.getElementById(nomeComponente).value;

   	array.push(ementa);
   	array.push(bibliografia);

   	mapaComponente.set(nome,array);

   	// Captura a quantidade de linhas já existentes na tabela
   	var numLinhas = tabela.rows.length;
   	// Captura a quantidade de colunas da última linha da tabela
   	var numColunas = tabela.rows[numLinhas-1].cells.length;
   	// Insere uma linha no fim da tabela.
   	var novaLinha = tabela.insertRow(numLinhas);

   	novaLinha.setAttribute("id",numLinhas+1);

   	// Faz um loop para criar as colunas
   	for (var j = 0; j < numColunas; j++) {
      	var a, b, i;
       	// Insere uma coluna na nova linha 
      	novaCelula = novaLinha.insertCell(j);
	    if(j===0){
	    	numListaComponente++;
	      	novaCelula.innerHTML = "LAT"+ numListaComponente;
	      	}else if(j===1){
	       		novaCelula.innerHTML = nome.toUpperCase();
	     	}else if(j===2){
	      		novaCelula.innerHTML = chTotal;
	      	}else{ 
	      		novaCelula.setAttribute("align","right");
      			novaCelula.setAttribute("class","btn-group");
	      		a = document.createElement("button");
	         	a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"')");
	         	a.setAttribute("class", "btn btn-link");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "far fa-trash-alt");
	         	a.appendChild(i);
	         	novaCelula.appendChild(a);

	         	b = document.createElement("button");
	         	b.setAttribute("type", "button");
	         	b.setAttribute("class", "btn btn-link");
	         	b.setAttribute("data-toggle","modal");
	         	b.setAttribute("data-target", "#modalEmenta");
	         	b.setAttribute("onclick","exibirEmenta('"+nome+"')");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "fas fa-search");
	         	b.appendChild(i);
	         	novaCelula.appendChild(b);

	         	c = document.createElement("button");
	         	c.setAttribute("type", "button");
	         	c.setAttribute("class", "btn btn-link");
	         	c.setAttribute("data-toggle","modal");
	         	c.setAttribute("data-target", "#modalDocentesComponente");
	         	c.setAttribute("onclick","popularTabelaDocenteComponente('"+nome+"','tabela-docentes-componente')");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "fas fa-external-link-alt");
	         	c.appendChild(i);
	         	novaCelula.appendChild(c);
	        }
	    }
  	
}

function inserirLinhaTabelaMembroExterno(idTabela, cpfParticipante, 
	nomeParticipante, formacaoParticipante, instituicaoParticipante){
	var tabela = document.getElementById(idTabela);

	var cpf_passaporte = document.getElementById(cpfParticipante).value;
   
   	var nome = document.getElementById(nomeParticipante).value.toUpperCase();

   	var select = document.getElementById(formacaoParticipante);

   	var formacao = select.options[select.selectedIndex].value;

   	var instituicao = document.getElementById(instituicaoParticipante).value;
   	// Captura a quantidade de linhas já existentes na tabela
   	var numLinhas = tabela.rows.length;
   	// Captura a quantidade de colunas da última linha da tabela
   	var numColunas = tabela.rows[numLinhas-1].cells.length;
   	// Insere uma linha no fim da tabela.
   	var novaLinha = tabela.insertRow(numLinhas);

   	novaLinha.setAttribute("id",numLinhas+1);

   	//inserir no mapa de docentes
   	docentesCursoSelect.push(nome);

   	docente = new Docente(nome,'Docente Externo','Brasileira',cpf_passaporte,'',formacao,'Participante Externo',instituicao,'');

   	// Faz um loop para criar as colunas
   	for (var j = 0; j < numColunas; j++) {
      	var a, b, i;
       	// Insere uma coluna na nova linha 
      	novaCelula = novaLinha.insertCell(j);
	    if(j===0){
	      		novaCelula.innerHTML = "";
	      	}else if(j===1){
	       		novaCelula.innerHTML = nome.toUpperCase();
	     	}else if(j===2){
	      		novaCelula.innerHTML = formacao.toUpperCase();
	      	}else if(j===3){
	      		novaCelula.innerHTML = "DOCENTE EXTERNO LATO SENSU";
	      	}else if(j===4){
	      		novaCelula.innerHTML = instituicao;
	      	}else{ 
	      		novaCelula.setAttribute("align","right");
      			novaCelula.setAttribute("class","btn-group");
	      		a = document.createElement("button");
	         	a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"')");
	         	a.setAttribute("class", "btn btn-link");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "far fa-trash-alt");
	         	a.appendChild(i);
	         	novaCelula.appendChild(a);

	         	b = document.createElement("a");
	         	b.setAttribute("href","http://buscatextual.cnpq.br/buscatextual/busca.do?metodo=forwardPaginaResultados&registros=0;10&query=idx_cpf:"+cpf_passaporte);
	         	b.setAttribute("class", "link-normal m-2");
	         	b.setAttribute("rel","noopener noreferrer");
	         	b.setAttribute("target", "_blank");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "fas fa-search");
	         	b.appendChild(i);
	         	novaCelula.appendChild(b);
	        }
	    }

	docentesCurso.push(docente);
}

function inserirLinhaTabelaMembroInterno(idTabela,idNome, ) {

	var docente = new Docente();

   // Captura a referência da tabela com id “minhaTabela”
   var tabela = document.getElementById(idTabela);
   //Captura o select
   var input = document.getElementById(idNome);
   //Captura o valor do select
   var nome = input.value;
   // Captura a quantidade de linhas já existentes na tabela
   var numLinhas = tabela.rows.length;
   // Captura a quantidade de colunas da última linha da tabela
   var numColunas = tabela.rows[numLinhas-1].cells.length;
   // Insere uma linha no fim da tabela.
   var novaLinha = tabela.insertRow(numLinhas);

   novaLinha.setAttribute("id",numLinhas+1);

   docentesCursoSelect.push(nome);

   //inserir no mapa de docentes
   //docentesCurso.push(nome);
   
   // Faz um loop para criar as colunas
    for (var j = 0; j < numColunas; j++) {
      	var a, b, i;
       	// Insere uma coluna na nova linha 
      	novaCelula = novaLinha.insertCell(j);
    	if(nome === "RUBENS MARIBONDO DO NASCIMENTO"){
	      	docente = new Docente(nome,'Docente Interno','Brasileira','8671649752936793','1234567','DOUTORADO','PROFESSOR DE MAGISTÉRIO SUPERIOR','UFRN','');
	      	if(j===0){
	      		novaCelula.innerHTML = "1234567";
	      	}else if(j===1){
	       		novaCelula.innerHTML = nome.toUpperCase();
	     	}else if(j===2){
	      		novaCelula.innerHTML = "DOUTORADO";
	      	}else if(j===3){
	      		novaCelula.innerHTML = "PROFESSOR DE MAGISTÉRIO SUPERIOR";
	      	}else if(j===4){
	      		novaCelula.innerHTML = "UFRN"
	      	}else{//rel="noopener noreferrer" target="_blank
		      	novaCelula.setAttribute("align","right");
		      	novaCelula.setAttribute("class","btn-group");
	      		a = document.createElement("button");
	         	a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"')");
	         	a.setAttribute("class", "btn btn-link");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "far fa-trash-alt");
	         	a.appendChild(i);
	         	novaCelula.appendChild(a);

	         	b = document.createElement("a");
	         	b.setAttribute("href","http://lattes.cnpq.br/8671649752936793");
	         	b.setAttribute("class", "link-normal m-2");
	         	b.setAttribute("rel","noopener noreferrer");
	         	b.setAttribute("target", "_blank");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "fas fa-search");
	         	b.appendChild(i);
	         	novaCelula.appendChild(b);
	        }
    	}else if(nome === "APUENA VIEIRA GOMES"){
      		docente = new Docente(nome,'Docente Interno','Brasileira','0601161335088804','1234568','DOUTORADO','PROFESSOR DE MAGISTÉRIO SUPERIOR','UFRN','');
	      	if(j===0){
	      		novaCelula.innerHTML = "1234568";
	      	}else if(j===1){
	       		novaCelula.innerHTML = nome.toUpperCase();
	     	}else if(j===2){
	      		novaCelula.innerHTML = "DOUTORADO";
	      	}else if(j===3){
	      		novaCelula.innerHTML = "PROFESSOR DE MAGISTÉRIO SUPERIOR";
	      	}else if(j===4){
	      		novaCelula.innerHTML = "UFRN"
	      	}else{
	      		novaCelula.setAttribute("align","right");
	      		novaCelula.setAttribute("class","btn-group");
	      		a = document.createElement("button");
	         	a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"')");
	         	a.setAttribute("class", "btn btn-link");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "far fa-trash-alt");
	         	a.appendChild(i);
	         	novaCelula.appendChild(a);

	         	b = document.createElement("a");
	         	b.setAttribute("href","http://lattes.cnpq.br/0601161335088804");
	         	b.setAttribute("class", "link-normal m-2");
	         	b.setAttribute("rel","noopener noreferrer");
	         	b.setAttribute("target", "_blank");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "fas fa-search");
	         	b.appendChild(i);
	         	novaCelula.appendChild(b);
        	}
    	}else{
      		docente = new Docente(nome,'Docente Interno','Brasileira','1093675040121205','1234568','DOUTORADO','PROFESSOR DE ENSINO BASICO TECNICO E TECNOLOGICO','IMD','');
	      	if(j===0){
	      		novaCelula.innerHTML = "1234569";
	      	}else if(j===1){
	       		novaCelula.innerHTML = nome.toUpperCase();
	     	}else if(j===2){
	      		novaCelula.innerHTML = "DOUTORADO";
	      	}else if(j===3){
	      		novaCelula.innerHTML = "PROFESSOR DE ENSINO BASICO TECNICO E TECNOLOGICO";
	      	}else if(j===4){
	      		novaCelula.innerHTML = "IMD";
	      	}else{
	      		novaCelula.setAttribute("align","right");
	      		novaCelula.setAttribute("class","btn-group");
	      		a = document.createElement("button");
	         	a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"')");
	         	a.setAttribute("class", "btn btn-link");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "far fa-trash-alt");
	         	a.appendChild(i);
	         	novaCelula.appendChild(a);

	         	b = document.createElement("a");
	         	b.setAttribute("href","http://lattes.cnpq.br/1093675040121205");
	         	b.setAttribute("class", "link-normal m-2");
	         	b.setAttribute("rel","noopener noreferrer");
	         	b.setAttribute("target", "_blank");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "fas fa-search");
	         	b.appendChild(i);
	         	novaCelula.appendChild(b);
	        }
    	}
    }
    docentesCurso.push(docente);
}


function removerLinhaTabela(i,idTabela){
   document.getElementById(idTabela).deleteRow(i);
}

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});

}
