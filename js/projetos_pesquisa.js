function ProjetoPesquisa(informacoes_preliminares,dados_gerais,dados_projeto,tramitacao){
	this.informacoes_preliminares = informacoes_preliminares;
	this.dados_gerais = dados_gerais;
	this.dados_projeto = dados_projeto;
	this.tramitacao = tramitacao;
}

var projetosPesquisa = [];

var projetoPesquisa1 = new ProjetoPesquisa(
		{
			"informacoes_sigilosas": "sim",
			"hipotese_legal": "",
			"propriedeade_intelectual":"sim",
			"classificacao_pesquisa":"com_inovacao_tecnologica"
		},
		{
			"numero_projeto": "0001",
			"titulo":"Desenvolvimento do novo sistema de projetos acadêmicos",
			"unidade_lotacao": "1135 - Superintendência de Informática",
			"unidade_execucao": "1135 - Superintendência de Informática",
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
		"resumo": "Desenvolvimento de um novo sistema de gestão de projetos acadêmicos",
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
	"situacao":"Homologado pela PROPESQ"
	}	
);

var projetoPesquisa2 = new ProjetoPesquisa(
		{
			"informacoes_sigilosas": "sim",
			"hipotese_legal": "",
			"propriedeade_intelectual":"sim",
			"classificacao_pesquisa":"sem_inovacao_tecnologica"
		},
		{
			"numero_projeto": "0002",
			"titulo":"Integração com Plataforma CNPq",
			"unidade_lotacao": "1135 - Superintendência de Informática",
			"unidade_execucao": "1135 - Superintendência de Informática",
			"palavras_chaves":"sigprojetos",
			"email":["alysson@gmail.com","alysson@hotmail.com"],
			"ano":"2019",
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
	"situacao":"Homologado pela PROPESQ"
	}	
);

projetosPesquisa.push(projetoPesquisa1, projetoPesquisa2);

function popularTabelaProjetosPesquisa(){

	var tabela = document.getElementById('tabela-projetos-pesquisa');

	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}

	projetosPesquisa.forEach(function(projeto) {
		
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
	      	novaCelula.innerHTML = projeto.dados_gerais.numero_projeto;
	      }else if(j===1){
	      	novaCelula.innerHTML = projeto.dados_gerais.titulo;
	      }else if(j===2){
	      	novaCelula.innerHTML = projeto.tramitacao.situacao;
	      }else if(j===3){
	      	novaCelula.innerHTML = projeto.dados_gerais.unidade_execucao;
	      }else if(j===4){
	      	novaCelula.innerHTML = projeto.dados_gerais.ano;
	      }else{
	      	a = document.createElement("a");
	        a.setAttribute("href","formalizar_projeto_pesquisa.html");
	        a.setAttribute("class", "link-normal");
	        i = document.createElement("i");
	        i.setAttribute("class", "fas fa-external-link-alt");
	        a.appendChild(i);
	        novaCelula.appendChild(a);
	    	
	      }
	   }
	});

}