/*var responsavelFunpec = JSON.parse(sessionStorage.getItem('responsavel-funpec'));

var responsavelAnaliseTecnica = JSON.parse(sessionStorage.getItem('responsavel-analise-tecnica'));

var responsavelFiscalizacao = JSON.parse(sessionStorage.getItem('responsavel-fiscalizacao'));

var responsavelInstrumentoJuridico = JSON.parse(sessionStorage.getItem('responsavel-instrumento-juridico'));*/


var numListaComponente = 0;
var mapaComponente = new Map();
var docentesCurso = [];
var docentesCursoSelect = [];
var chTotal = 0;
var mapaDocenteComponente = new Map();
var componentes = [];
var docentesComponente = [];
var listaEntidades = [];
var entidadesSelecionadas = [];
var entidadesParticipes = [];
var tiposDocumentos = ['ATA APROVAÇÃO DEPARTAMENTO', 'AUTORIZAÇÃO PARTICIPAÇÃO EM PESQUISA', 'LIMITE DE CARGA HORÁRIA/REMUNERAÇÃO', 'HOMOLOGAÇÃO PROPESQ', 'HOMOLOGAÇÃO PROPLAN', 'HOMOLOGAÇÃO PPG'];
var arquivosProjeto = [];
var recursos = [];
var responsavelFunpec;
var responsavelAnaliseTecnica;
var responsavelFiscalizacao;
var responsavelInstrumentoJuridico;
var projetosPesquisa = [];
var responsaveis = [];
var analises = [];
var solicitacoes = [];

var numero_projeto = JSON.parse(sessionStorage.getItem('num_projeto'));

var ufrn = new EntidadeParticipe('Contratante','UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE','24.823.767/0001-89','Avenida Salgado Filho,3000','Natal', 'RN');
var funpec = new EntidadeParticipe('Contratada','Fundação Norte-Rio-Grandense de Pesquisa e Cultura','76.824.797/0001-03','Avenida Salgado Filho,3000','Natal', 'RN');

entidadesParticipes.push(ufrn,funpec);

var projetoPesquisa1 = new ProjetoPesquisa(
		{
			"informacoes_sigilosas": "sim",
			"hipotese_legal": "",
			"propriedeade_intelectual":"sim",
			"classificacao_pesquisa":"Com Inovacao Tecnologica"
		},
		{
			"numero_projeto": "0001",
			"titulo":"Desenvolvimento de tecnologia para mensuração de custo de entrega utilizando aprendizado de máquina.",
			"coordenador":"Alysson Rodrigues",
			"unidade_lotacao": "Superintendência de Informática",
			"unidade_execucao": "Superintendência de Informática",
			"palavras_chaves":"sigprojetos",
			"email":["alysson@gmail.com","alysson@hotmail.com"],
			"ano":"2020",
			"vigencia_inicio":"01/08/2020",
			"vigencia_fim": "01/08/2021"
		},
		{
		"grande_area": "Ciências Exatas e da Terra",
		"area":"Ciências da Computação",
		"subarea":"",
		"especialidade":"",
		"grupo_de_pesquisa":"",
		"resumo": "Desenvolvimento de uma tecnologia para mensurar o custo de entrega de um determinado artefato utilizando padrões identificados a partir de série histórica.",
		"Introducao": "Introdução do projeto",
		"Objetivos": "Os objetivos são: 1 - isso, 2 - aquilo",
		"objetivos_especificos":{
			"nome":"Objetivo específico 1",
			"metas":[{
				"numero":"1",
				"descricao": "descrição meta 1",
				"indicador":"funcionalidades",
				"qtd":"5"
			}],
			"resultados":[{
				"numero":"1",
				"descricao": "descrição resultado 1",
				"indicador":"funcionalidades",
				"qtd":"10"
			}],
		}
	},
	{
		"valor_plano_aplicacao":"360.000,00",
		"doap":"18.000,00",
		"tempo_execucao":"24",
		"valor_projeto":"378.000,00",
		"fonte_recurso":"B"
	},
	{
	"situacao":"Submetido - Doc. Ok",
	"responsavel_funpec":" ",
	"parecer_funpec": " ",
	"responsavel_analise_tecnica":" ",
	"parecer_analise_tecnica": " ",
	"responsavel_fiscalizacao":" ",
	"parecer_fiscalizacao": " ",
	"responsavel_instrumento_juridico":" ",
	"parecer_instrumento_juridico": " "
	},
	{
		"banco":" ",
		"agencia": " ",
		"conta": " "
	}	
);

var projetoPesquisa2 = new ProjetoPesquisa(
		{
			"informacoes_sigilosas": "sim",
			"hipotese_legal": "",
			"propriedeade_intelectual":"sim",
			"classificacao_pesquisa":"Com Inovacao Tecnologica"
		},
		{
			"numero_projeto": "0002",
			"titulo":"Integração com Plataforma CNPq",
			"coordenador":"Alysson Rodrigues",
			"unidade_lotacao": "Superintendência de Informática",
			"unidade_execucao": "Superintendência de Informática",
			"palavras_chaves":"sigprojetos",
			"email":["alysson@gmail.com","alysson@hotmail.com"],
			"ano":"2020",
			"vigencia_inicio":"01/08/2020",
			"vigencia_fim": "01/08/2021"
		},
		{
		"grande_area": "Ciências Exatas e da Terra",
		"area":"Ciências da Computação",
		"subarea":"",
		"especialidade":"",
		"grupo_de_pesquisa":"",
		"resumo": "Desenvolvimento de uma plataforma de integração com o CNPq",
		"Introducao": "Introdução do projeto",
		"Objetivos": "Os objetivos são: 1 - isso, 2 - aquilo",
		"objetivos_especificos":{
			"nome":"Objetivo específico 1",
			"metas":[{
				"numero":"1",
				"descricao": "descrição meta 1",
				"indicador":"funcionalidades",
				"qtd":"5"
			}],
			"resultados":[{
				"numero":"1",
				"descricao": "descrição resultado 1",
				"indicador":"funcionalidades",
				"qtd":"10"
			}],
		}
	},
	{
		"valor_plano_aplicacao":"200.000,00",
		"doap":"10.000,00",
		"tempo_execucao":"24",
		"valor_projeto":"210.000,00",
		"fonte_recurso":"B"
	},
	{
	"situacao":"Submetido - Doc. Pendentes",
	"responsavel_funpec":" ",
	"parecer_funpec": " ",
	"responsavel_analise_tecnica":" ",
	"parecer_analise_tecnica": " ",
	"responsavel_fiscalizacao":" ",
	"parecer_fiscalizacao": " ",
	"responsavel_instrumento_juridico":" ",
	"parecer_instrumento_juridico": " "
	},
	{
		"banco":" ",
		"agencia": " ",
		"conta": " "
	}	
);

var projetoPesquisa3 = new ProjetoPesquisa(
		{
			"informacoes_sigilosas": "sim",
			"hipotese_legal": "",
			"propriedeade_intelectual":"sim",
			"classificacao_pesquisa":"Com Inovacao Tecnologica"
		},
		{
			"numero_projeto": "0003",
			"titulo":"Desenvolvimento de novo sistema para gestão de projetos acadêmicos",
			"coordenador":"Josué Victor",
			"unidade_lotacao": "DEPARTAMENTO DE ADMINISTRAÇÃO",
			"unidade_execucao": "Superintendência de Informática",
			"palavras_chaves":"sigprojetos",
			"email":["josue@gmail.com","josue@hotmail.com"],
			"ano":"2019",
			"vigencia_inicio":"01/09/2019",
			"vigencia_fim": "31/12/2021"
		},
		{
		"grande_area": "Ciências Exatas e da Terra",
		"area":"Ciências da Computação",
		"subarea":"",
		"especialidade":"",
		"grupo_de_pesquisa":"",
		"resumo": "Desenvolvimento de uma plataforma que permita a submissão, execução e monitoramentos dos projetos acadêmicos",
		"Introducao": "Introdução do projeto",
		"Objetivos": "Os objetivos são: 1 - isso, 2 - aquilo",
		"objetivos_especificos":{
			"nome":"Objetivo específico 1",
			"metas":[{
				"numero":"1",
				"descricao": "descrição meta 1",
				"indicador":"funcionalidades",
				"qtd":"5"
			}],
			"resultados":[{
				"numero":"1",
				"descricao": "descrição resultado 1",
				"indicador":"funcionalidades",
				"qtd":"10"
			}],
		}
	},
	{
		"valor_plano_aplicacao":"200.000,00",
		"doap":"10.000,00",
		"tempo_execucao":"24",
		"valor_projeto":"210.000,00",
		"fonte_recurso":"B"
	},
	{
	"situacao":"Aguardando Parecer DCF",
	"responsavel_funpec":" ",
	"parecer_funpec": " ",
	"responsavel_analise_tecnica":" ",
	"parecer_analise_tecnica": " ",
	"responsavel_fiscalizacao":" ",
	"parecer_fiscalizacao": " ",
	"responsavel_instrumento_juridico":" ",
	"parecer_instrumento_juridico": " "
	},
	{
		"banco":" ",
		"agencia": " ",
		"conta": " "
	}	
);

projetosPesquisa.push(projetoPesquisa1, projetoPesquisa2, projetoPesquisa3);

function Analise(numero_projeto,tipo,responsavel,parecer,dados_bancarios,documentos){
	this.numero_projeto = numero_projeto;
	this.tipo = tipo;
	this.responsavel = responsavel;
	this.parecer = parecer;
	this.documentos = documentos;
}

function ProjetoPesquisa(informacoes_preliminares,dados_gerais,dados_projeto,plano_aplicacao,tramitacao,dados_bancarios){
	this.informacoes_preliminares = informacoes_preliminares;
	this.dados_gerais = dados_gerais;
	this.dados_projeto = dados_projeto;
	this.plano_aplicacao = plano_aplicacao;
	this.tramitacao = tramitacao;
	this.dados_bancarios = dados_bancarios;
}

function Recurso(entidade,valor_financiado,responsavel){
	this.entidade = entidade;
	this.valor_financiado = valor_financiado;
	this.responsavel = responsavel;
}

function EntidadeParticipe(tipo,nome,cnpj, endereco, cidade, uf){
	this.tipo = tipo;
	this.nome = nome;
	this.cnpj = cnpj;
	this.endereco = endereco;
	this.cidade = cidade;
	this.uf = uf;
}

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

function passarNumeroProjeto(numero){

	var numero_projeto = JSON.stringify(numero);

    sessionStorage.setItem('num_projeto', numero_projeto );
}

function passarResponsavelTecnico(campo,resp){

	var responsavel = JSON.stringify(resp);

    sessionStorage.setItem(campo, responsavel );
}

function inicioModuloPROPLAN(){

	projetosPesquisa.forEach( function (projeto){
		localStorage.setItem(projeto.dados_gerais.numero_projeto,JSON.stringify(projeto));
	});

	localStorage.setItem('projetosPesquisa',JSON.stringify(projetosPesquisa));

	localStorage.setItem('tiposDocumentos',JSON.stringify(tiposDocumentosBase));

	var analiseDefault = new Analise('0000','nenhum','ninguem','',''); 

	analises.push(analiseDefault);

	localStorage.setItem('analises',JSON.stringify(analises));
	
}

function retornarDadosConsultaProjetadaProplanByIdentificador(identificador){

	var projetoPesquisa = JSON.parse(localStorage.getItem(identificador));

	var responsavelFunpec = " ";
	var responsavelAnalise = " ";
	var responsavelFiscalizacao = " ";
	var responsavelInstrumento = " ";

	if(localStorage.getItem('analises') != null){
		JSON.parse(localStorage.getItem('analises')).forEach( function (item){
		analises.push(item);
	});

	analises.forEach( function (analise){
		if(analise.numero_projeto === identificador && analise.tipo === 'FUNPEC'){
			responsavelFunpec = analise.responsavel;
		}
		if(analise.numero_projeto === identificador && analise.tipo === 'ANALISE'){
			responsavelAnalise = analise.responsavel;
		}
		if(analise.numero_projeto === identificador && analise.tipo === 'FISCALIZACAO'){
			responsavelFiscalizacao = analise.responsavel;
		}
		if(analise.numero_projeto === identificador && analise.tipo === 'INSTRUMENTO'){
			responsavelInstrumento = analise.responsavel;
		}
	});
	}

	var dadosProjeto = [projetoPesquisa.dados_gerais.numero_projeto,projetoPesquisa.dados_gerais.titulo,
						projetoPesquisa.dados_gerais.coordenador, projetoPesquisa.plano_aplicacao.fonte_recurso, 
						projetoPesquisa.plano_aplicacao.valor_projeto, projetoPesquisa.tramitacao.situacao, 
		"Funpec: " + responsavelFunpec + " Analise técnica: " + responsavelAnalise +
		" Fiscalização: " + responsavelFiscalizacao + " Instrumento Jurídico: " + responsavelInstrumento
		,projetoPesquisa.dados_gerais.ano];

	return dadosProjeto;
}

function retornaDadosConsultaProjetadaProplan(param){

	var dadosProjetos = [];

	if(Array.isArray(param)){
		param.forEach( function (item){
			dadosProjetos.push(retornarDadosConsultaProjetadaProplanByIdentificador(item));
		});

	}else if(param != null){
		dadosProjetos.push(retornarDadosConsultaProjetadaProplanByIdentificador(param));

	}else{
		var projetosPesquisaLocalStorage = JSON.parse(localStorage.getItem('projetosPesquisa'));

		projetosPesquisaLocalStorage.forEach(function (projeto){
		
			dadosProjetos.push(retornarDadosConsultaProjetadaProplanByIdentificador(projeto.dados_gerais.numero_projeto));

		});
	}

	return dadosProjetos;
}

function retornaDadosAnaliseProjetadaProplan(param){

	var projetoPesquisa = param;

	var arrayDadosProjeto = [];

	var dadosProjeto = [projetoPesquisa.dados_gerais.numero_projeto,projetoPesquisa.dados_gerais.titulo,projetoPesquisa.dados_gerais.coordenador,
 			projetoPesquisa.dados_gerais.ano, projetoPesquisa.plano_aplicacao.tempo_execucao, projetoPesquisa.plano_aplicacao.fonte_recurso, 
 			projetoPesquisa.plano_aplicacao.valor_projeto, projetoPesquisa.plano_aplicacao.valor_plano_aplicacao,projetoPesquisa.plano_aplicacao.doap];

	arrayDadosProjeto.push(dadosProjeto)

	return arrayDadosProjeto;
}

function retornarDadosConsultaGeralProjetadaProplanByIdentificador(identificador){

	var projetoPesquisa = JSON.parse(localStorage.getItem(identificador));

	var dadosProjeto = [projetoPesquisa.dados_gerais.numero_projeto,projetoPesquisa.dados_gerais.titulo,
						projetoPesquisa.plano_aplicacao.fonte_recurso,projetoPesquisa.tramitacao.situacao,projetoPesquisa.dados_gerais.ano];

	return dadosProjeto;

}

function retornaDadosConsultaGeralProjetadaProplan(param){
	var dadosProjetos = [];

	if(Array.isArray(param)){
		param.forEach( function (item){
			dadosProjetos.push(retornarDadosConsultaGeralProjetadaProplanByIdentificador(item));
		});

	}else if(param != null){
		dadosProjetos.push(retornarDadosConsultaGeralProjetadaProplanByIdentificador(param));

	}else{
		var projetosPesquisaLocalStorage = JSON.parse(localStorage.getItem('projetosPesquisa'));

		projetosPesquisaLocalStorage.forEach(function (projeto){
		
			dadosProjetos.push(retornarDadosConsultaGeralProjetadaProplanByIdentificador(projeto.dados_gerais.numero_projeto));

		});
	}

	return dadosProjetos;
}

function popularTabelaConsultaGeralProplan(idTabela){

 	var dadosProjetos = retornaDadosConsultaGeralProjetadaProplan(JSON.parse(sessionStorage.getItem('projetosPesquisa')));

 	popularTabela(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela]]);

 }

function popularTabelaConsultaProplan(idTabela,redirect){

 	var dadosProjetos = retornaDadosConsultaProjetadaProplan(JSON.parse(sessionStorage.getItem('projetosPesquisa')));

 	popularTabela(idTabela,dadosProjetos,[['redirecionar',redirect,'passarNumeroProjeto',idTabela]]);

 }

 function popularTabelaAnaliseProplan(idTabela){
 	var dadosProjetos = retornaDadosAnaliseProjetadaProplan(JSON.parse(localStorage.getItem(numero_projeto)));

 	popularTabela(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela]]);
 	//popularTabelaComBotaoDropDown(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela]]);

 }

 function popularTabelaAnaliseIJU(idTabela){
 	var dadosProjetos = retornaDadosAnaliseProjetadaProplan(JSON.parse(localStorage.getItem(numero_projeto)));
 	
 	popularTabelaComBotaoDropDown(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela],
 		['modal-parecer-dcf','#modal-parecer-dcf','',idTabela],['modal-gerar-minuta','#modal-gerar-minuta','',idTabela],['modal-parecer-referencial','#modal-parecer-referencial','',idTabela],
 		['modal-solicitar-dotacao','#modal-solicitar-dotacao','',idTabela],['modal-solicitar-empenho','#modal-solicitar-empenho','',idTabela],['modal-parecer-agir','#modal-parecer-agir','',idTabela]]);

 }

 function popularTabelaPROPLANSemResponsavel(idTabela){
 	var dadosProjetos = retornaDadosAnaliseProjetadaProplan(JSON.parse(localStorage.getItem(numero_projeto)));

 	popularTabela(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela]]);

 }


function popularTabelaProjetosPesquisa(idTabela){

 	var dadosProjetos = retornaDadosConsultaProjetadaProplan(JSON.parse(sessionStorage.getItem('projetosPesquisa')));

 	popularTabela(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela]]);
 
}


 function carregaResponsavel(tipo){

 	var idCampoDestino;

 	if(tipo === 'FUNPEC'){
 		idCampoDestino = 'responsavel-funpec';
 	}else if(tipo === 'ANALISE'){
 		idCampoDestino = 'responsavel-analise-tecnica';
 	}else if(tipo === 'FISCALIZACAO'){
 		idCampoDestino = 'responsavel-fiscalizacao';
 	}else if(tipo === 'INSTRUMENTO'){
 		idCampoDestino = 'responsavel-instrumento-juridico';
 	}

 	var analises = JSON.parse(localStorage.getItem('analises'));

 	if(analises != null && Array.isArray(analises)){
 		analises.forEach( function (analise){
	 		if(analise.numero_projeto === numero_projeto && analise.tipo === tipo){
	 			document.getElementById(idCampoDestino).innerHTML = analise.responsavel;
	 		}
		});
 	}
}

 function inserirResponsavel(tipo){
 	
 	var idCampoOrigem, idCampoDestino;

 	if(tipo === 'FUNPEC'){
 		idCampoOrigem = 'nome-responsavel-funpec';
 	}else if(tipo === 'ANALISE'){
 		idCampoOrigem = 'nome-responsavel-analise-tecnica';
 	}else if(tipo === 'FISCALIZACAO'){
 		idCampoOrigem = 'nome-responsavel-fiscalizacao';
 	}else if(tipo === 'INSTRUMENTO'){
 		idCampoOrigem = 'nome-responsavel-instrumento-juridico';
 	}

 	var responsavel = document.getElementById(idCampoOrigem).value; 

 	analises = JSON.parse(localStorage.getItem('analises'));

 	if(analises == null || !Array.isArray(analises)){
 		var analise = new Analise(numero_projeto,tipo,'','','');
 		analises = [];
 		analises.push(analise);
 	}else{
 		if(analises.indexOf(numero_projeto) != -1){
	 		analises.forEach( function (analise){
	 			if(analise.numero_projeto === numero_projeto){
	 			analise.responsavel = responsavel;
	 			}
	 		});
	 	}else{
	 		var analise = new Analise(numero_projeto,tipo,responsavel,'','');
	 		analises.push(analise);
	 	}
 	}

 	localStorage.setItem('analises', JSON.stringify(analises));

 	carregaResponsavel(tipo);

 }

 function inserirSolicitacao(tipo, idTabela,idCampo,idDestino,modal){

 	var textoSolicitacao;

 	var idTabela = idTabela;

 	if(idCampo === '' && idDestino === ''){

 	}else{
 		textoSolicitacao = document.getElementById(idCampo).value;

 		document.getElementById(idDestino).innerHTML = textoSolicitacao;
 	}

 	var solicitacao = [];

 	var data = new Date();

 	/*if(localStorage.getItem('solicitacoes') != null){
 		solicitacoes = JSON.parse(localStorage.getItem('solicitacoes'));
 	}*/

 	solicitacao.push([tipo, data.getDate() + "/"+ (data.getMonth()+1) + "/" + data.getYear() + " " + data.getHours() + ":" + data.getMinutes(),'login']);

 	//localStorage.setItem('solicitacoes',JSON.stringify(solicitacoes));


 	popularTabela(idTabela,solicitacao,[['modal-exibicao','#'+modal,'',idTabela]]);

 }

 function inserirSolicitacaoDotacao(idCampo){

 }

 function inserirSolicitacaoEmpenho(idCampo){

 }

 function inserirParecerAGIR(idCampo){

 }


function inserirRecurso(){

	var entidade = document.getElementById('entidade-recurso').value;
	var valor = document.getElementById('valor-recurso').value;
	var responsavel = document.getElementById('responsavel-execucao-recurso').value;
	var recurso = new Recurso(entidade, valor, responsavel);

	recursos.push(recurso);

	popularTabelaRecurso();

}

function removerLinhaTabelaRecurso(i,idTabela,nomeEntidade){
	recursos.forEach(function(recurso){
		console.log(nomeEntidade);
		console.log(recurso.entidade)
		if(recurso.entidade === nomeEntidade){
			console.log("achou a entidade");
			recursos.splice(recursos.indexOf(recurso), 1);
		}
	});
	
    document.getElementById(idTabela).deleteRow(i);
}

function popularTabelaRecurso(){

	var tabela = document.getElementById('tabela-recursos');

	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}

	recursos.forEach(function(recurso) {
		
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
	      	novaCelula.innerHTML = recurso.entidade;
	      }else if(j===1){
	      	novaCelula.innerHTML = recurso.valor_financiado;
	      }else if(j===2){
	      	novaCelula.innerHTML = recurso.responsavel;
	      }else{
	      	a = document.createElement("button");
	        a.setAttribute("onclick","removerLinhaTabelaRecurso(this.parentNode.parentNode.rowIndex,'tabela-recursos','"+recurso.entidade+"')");
	        a.setAttribute("class", "btn btn-link");
	        i = document.createElement("i");
	        i.setAttribute("class", "far fa-trash-alt");
	        a.appendChild(i);
	        novaCelula.appendChild(a);
	    	
	      }
	   }
	});

}

function inserirArquivoFunpec(idSelect,idDescricao,idArquivo){

	inserirArquivo(idSelect,idDescricao,idArquivo);
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

function buscarEntidade(nome){
    var instituicoes = [];
    instituicoesEnsino.forEach(function (instituicao) {
        if (instituicao.toLowerCase().indexOf(nome.toLowerCase()) != -1) {
         	instituicoes.push(instituicao);
         }
    });
    populaTabelaOrgaoEntidade(instituicoes);
} 

function selecionarEntidade(entidadeSelecionada){

	console.log("selecionando entidade");

	entidadesSelecionadas = [];

   var nomeEntidade = entidadeSelecionada;

   console.log(nomeEntidade);

   if($('input[id="'+nomeEntidade+'"]').is(':checked')){
       listaEntidades.forEach(function (entidade) {
         if(nomeEntidade === entidade.nome){
            entidade.tipo = 'Contratante';
            entidadesSelecionadas.push(entidade);
         }
      });
   } else {
   	console.log("desmarcado");
      entidadesSelecionadas.splice(list.indexOf(entidadeSelecionada), 1);
   }
}

function populaTabelaOrgaoEntidade(instituicoes){

	listaEntidades = [];

	var tabela = document.getElementById('tabela-entidades');

	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}

	instituicoes.forEach(function (instituicao) {
		
		var nome = instituicao;	
		var cnpj = gerarCnpj();
		var endereco = "Avenida Salgado Filho, 3000";
		var cidade = "Natal";
		var uf = "RN";
		// Captura a quantidade de linhas já existentes na tabela
	   	var numLinhas = tabela.rows.length;
	   	// Captura a quantidade de colunas da última linha da tabela
	   	var numColunas = tabela.rows[numLinhas-1].cells.length;

   		var novaLinha = tabela.insertRow(numLinhas);
   		novaLinha.setAttribute("id",numLinhas+1);

   		var entidade = new EntidadeParticipe('',nome,cnpj, endereco, cidade, uf);

   		listaEntidades.push(entidade);

   		for (var j = 0; j < numColunas; j++) {
      	var a, b, i;
       	// Insere uma coluna na nova linha 
      	novaCelula = novaLinha.insertCell(j);
	    if(j===0){
	    	novaCelula.setAttribute("align","right");
  			novaCelula.setAttribute("class","form-check");
      		a = document.createElement("input");
         	a.setAttribute("class", "form-check-input");
         	a.setAttribute("id", entidade.nome);
         	a.setAttribute("type","checkbox");
         	a.setAttribute("onclick","selecionarEntidade('"+entidade.nome+"')");
         	i = document.createElement("label");
         	i.setAttribute("class", "form-check-label");
         	i.setAttribute("for",entidade.nome);
         	novaCelula.appendChild(a);
         	novaCelula.appendChild(i);
	      	}else if(j===1){
	      	novaCelula.innerHTML = entidade.nome;
	      	}else if(j===2){
	       		novaCelula.innerHTML = entidade.cnpj;
	     	}else if(j===3){
	       		novaCelula.innerHTML = entidade.endereco;
	     	}else if(j===4){
	       		novaCelula.innerHTML = entidade.cidade;
	     	}else{
	       		novaCelula.innerHTML = entidade.uf;
	     	}
	    }
	});
}


function inserirEntidadeParticipe(){
	console.log("inserindo entidade");
	console.log(entidadesSelecionadas);
	entidadesSelecionadas.forEach(function (entidade) {
		entidadesParticipes.push(entidade);
	});
	console.log("inserido com sucesso");
	console.log(entidadesParticipes);
	inserirUFRNFunpec('D');
	populaTabelaParticipe();
}

function inserirUFRNFunpec(tipoProjeto){

	
	if(tipoProjeto === 'D'){
		entidadesParticipes.forEach(function (entidade) {
			if(entidade.nome === ufrn.nome ){
				entidade.tipo = 'Interveniente/Executora';
			}
			if(entidade.nome === funpec.nome){
				entidade.tipo = 'Contratada';
			}
		});
	}else if(tipoProjeto === 'A'){
		entidadesParticipes.forEach(function (entidade) {
			if(entidade.nome === ufrn.nome ){
				entidade.tipo = 'Contratante';
			}
			if(entidade.nome === funpec.nome){
				entidade.tipo = 'Contratada';
			}
		});
	}else if(tipoProjeto === 'B'){
		entidadesParticipes.forEach(function (entidade) {
			if(entidade.nome === ufrn.nome ){
				entidade.tipo = 'Contratante';
			}
			if(entidade.nome === funpec.nome){
				entidade.tipo = 'Contratada';
			}
		});
	}else if(tipoProjeto === 'C'){
		entidadesParticipes.forEach(function (entidade) {
			if(entidade.nome === ufrn.nome ){
				entidade.tipo = 'Contratada';
			}
			if(entidade.nome === funpec.nome){
				entidade.tipo = 'Contratante';
			}
		});
	}
	populaTabelaParticipe();
}

function populaTabelaParticipe(){

	var tabela = document.getElementById('tabela-participes');

	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}

	entidadesParticipes.forEach(function (entidade) {
		
		// Captura a quantidade de linhas já existentes na tabela
	   	var numLinhas = tabela.rows.length;
	   	// Captura a quantidade de colunas da última linha da tabela
	   	var numColunas = tabela.rows[numLinhas-1].cells.length;

   		var novaLinha = tabela.insertRow(numLinhas);
   		novaLinha.setAttribute("id",numLinhas+1);

   		for (var j = 0; j < numColunas; j++) {
      	var a, b, i;
       	// Insere uma coluna na nova linha 
      	novaCelula = novaLinha.insertCell(j);
	    if(j===0){
	      	novaCelula.innerHTML = entidade.tipo;
	      	}else if(j===1){
	       		novaCelula.innerHTML = entidade.nome;
	     	}else if(j===2){
	       		novaCelula.innerHTML = entidade.cnpj;
	     	}else if(j===3){
	       		novaCelula.innerHTML = entidade.endereco;
	     	}else if(j===4){
	       		novaCelula.innerHTML = entidade.cidade;
	     	}else if(j===5){
	       		novaCelula.innerHTML = entidade.uf;
	     	}else{ 
	     		if(entidade.nome != ufrn.nome && entidade.nome != funpec.nome){
	      		novaCelula.setAttribute("align","right");
      			novaCelula.setAttribute("class","btn-group");
	      		a = document.createElement("button");
	         	a.setAttribute("onclick","removerLinhaTabelaParticipes(this.parentNode.parentNode.rowIndex,'tabela-participes','"+entidade.nome+"')");
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

function removerLinhaTabelaParticipes(i,idTabela,nomeEntidade){
	entidadesParticipes.forEach(function(entidade){
		console.log("buscando o partícipe na listagem");
		if(entidade.nome === nomeEntidade){
			console.log("encontrado");
			entidadesParticipes.splice(entidadesParticipes.indexOf(entidade), 1);
		}
	});
	
    document.getElementById(idTabela).deleteRow(i);
}


