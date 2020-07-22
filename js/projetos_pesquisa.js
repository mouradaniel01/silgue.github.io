function ProjetoPesquisa(informacoes_preliminares,dados_gerais,dados_projeto,plano_aplicacao,tramitacao){
	this.informacoes_preliminares = informacoes_preliminares;
	this.dados_gerais = dados_gerais;
	this.dados_projeto = dados_projeto;
	this.plano_aplicacao = plano_aplicacao;
	this.tramitacao = tramitacao;
}

function ArquivoProjeto(tipo,nome,descricao, arquivo){
	this.tipo = tipo;
	this.nome = nome;
	this.descricao = descricao;
	this.arquivo = arquivo;
}

var arquivosProjeto = [];

var numero_projeto = "0001";

var tiposDocumentos = ['ATA APROVAÇÃO DEPARTAMENTO', 'AUTORIZAÇÃO PARTICIPAÇÃO EM PESQUISA', 'LIMITE DE CARGA HORÁRIA/REMUNERAÇÃO', 'HOMOLOGAÇÃO PROPESQ', 'HOMOLOGAÇÃO PROPLAN', 'HOMOLOGAÇÃO PPG'];

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
		"valor_plano_aplicacao":"360.000,00",
		"doap":"18.000,00",
		"tempo_execucao":"24",
		"valor_projeto":"378.000,00",
		"fonte_recurso":"B"
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
			"coordenador":"Alysson Rodrigues",
			"unidade_lotacao": "Superintendência de Informática",
			"unidade_execucao": "Superintendência de Informática",
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
		"valor_plano_aplicacao":"200.000,00",
		"doap":"10.000,00",
		"tempo_execucao":"24",
		"valor_projeto":"210.000,00",
		"fonte_recurso":"B"
	},
	{
	"situacao":"Homologado pela PROPESQ"
	}	
);

projetosPesquisa.push(projetoPesquisa1, projetoPesquisa2);

function passarNumeroProjeto(numero){
	var numero_projeto = JSON.stringify(numero);
     sessionStorage.setItem('num_projeto', numero_projeto );
}

function limpaSelect(elemento){
	while (elemento.length > 0) {
	    elemento.remove(elemento.length-1);
	  }
  }

function popularTabelaAnaliseFunpec(){

	var numero_projeto = JSON.parse(sessionStorage.getItem('num_projeto'));

	var tabela = document.getElementById('tabela-formalizacao-projeto-funpec');

	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}

	projetosPesquisa.forEach(function(projeto) {
		console.log(projeto);

			if(projeto.dados_gerais.numero_projeto === numero_projeto){
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
		      	novaCelula.innerHTML = projeto.dados_gerais.coordenador;
		      }else if(j===3){
		      	novaCelula.innerHTML = projeto.dados_gerais.ano;
		      }else if(j===4){
		      	novaCelula.innerHTML = projeto.plano_aplicacao.tempo_execucao;
		      }else if(j===5){
		      	novaCelula.innerHTML = projeto.plano_aplicacao.fonte_recurso;
		      }else if(j===6){
		      	novaCelula.innerHTML = projeto.plano_aplicacao.valor_projeto;
		      }else if(j===7){
		      	novaCelula.innerHTML = projeto.plano_aplicacao.valor_plano_aplicacao;
		      }else if(j===8){
		      	novaCelula.innerHTML = projeto.plano_aplicacao.doap;
		      }else{

		        b = document.createElement("button");
	         	b.setAttribute("type", "button");
	         	b.setAttribute("class", "btn btn-link");
	         	b.setAttribute("data-toggle","modal");
	         	b.setAttribute("data-target", "#modal-visualizar-projeto");
	         	b.setAttribute("onclick","carregarProjeto('"+projeto.dados_gerais.numero_projeto+"')");
	         	i = document.createElement("i");
	         	i.setAttribute("class", "fas fa-search");
	         	b.appendChild(i);
	         	novaCelula.appendChild(b);
		    	
		      }
		   }
		}
		
	});

}

function popularTabelaProjetosPesquisaFunpec(){
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
	      	novaCelula.innerHTML = projeto.dados_gerais.coordenador;
	      }else if(j===3){
	      	novaCelula.innerHTML = projeto.plano_aplicacao.fonte_recurso;
	      }else if(j===4){
	      	novaCelula.innerHTML = projeto.plano_aplicacao.valor_projeto;
	      }else if(j===5){
	      	novaCelula.innerHTML = projeto.tramitacao.situacao;
	      }else if(j===6){
	      	novaCelula.innerHTML = projeto.dados_gerais.unidade_execucao;
	      }else if(j===7){
	      	novaCelula.innerHTML = projeto.dados_gerais.ano;
	      }else{
	      	a = document.createElement("a");
	        a.setAttribute("href","analise_funpec.html");
	        a.setAttribute("class", "link-normal");
	        a.setAttribute("onclick","passarNumeroProjeto('"+projeto.dados_gerais.numero_projeto+"')");
	        i = document.createElement("i");
	        i.setAttribute("class", "fas fa-external-link-alt");
	        a.appendChild(i);
	        novaCelula.appendChild(a);
	    	
	      }
	   }
	});
}

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

function populaSelect(elemento, array){
	array.forEach((opt) => {
      option = new Option(opt, opt);
      elemento.options[elemento.options.length] = option;
    });
}

function inserirTipoDocumento(){
	tiposDocumentos.push(document.getElementById('nome-tipo-documento').value);
	limpaSelect(document.getElementById('select-tipos-documentos'));
	populaSelect(document.getElementById('select-tipos-documentos'), tiposDocumentos);
	populaTiposDocumento();
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

function inserirArquivo(){

	var tipo = document.getElementById('select-tipos-documentos').value;
	var nome = document.getElementById('nome-arquivo').value;
	var descricao = document.getElementById('descricao-arquivo').value;
	var arquivo = document.getElementById('arquivo-projeto').value;

	var arquivoProjeto = new ArquivoProjeto(tipo,nome,descricao,arquivo);

	arquivosProjeto.push(arquivoProjeto);

	populaTabelaArquivos();

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
	      	novaCelula.innerHTML = arquivo.nome;
	      }else if(j===2){
	      	novaCelula.innerHTML = arquivo.descricao;
	      }else if(j===3){
	      	novaCelula.innerHTML = arquivo.arquivo;
	      }else{
	      	a = document.createElement("button");
	        a.setAttribute("onclick","removerLinhaTabelaArquivo(this.parentNode.parentNode.rowIndex,'tabela-arquivos','"+arquivo.nome+"')");
	        a.setAttribute("class", "btn btn-link");
	        i = document.createElement("i");
	        i.setAttribute("class", "far fa-trash-alt");
	        a.appendChild(i);
	        novaCelula.appendChild(a);
	      }
	   }
	});
}

/* Adicione
 * <script src="https://static.info.ufrn.br/1.0.6/js/scripts.js"></script>
 * ao final do seu body, ou copie o código abaixo.
 */

(function() {
  const bootstrapTables = document.querySelectorAll(
    'table[data-toggle="table"]'
  );

  bootstrapTables.forEach((bootstrapTable, tableIndex) => {
    const removePaginationClass = bsTable => {
      const [bootstrapTableContainer] = $(bsTable).parents('.bootstrap-table');

      const paginationContainer = bootstrapTableContainer.querySelector(
        '.fixed-table-pagination div.pagination'
      );
      if (paginationContainer) {
        paginationContainer.classList.remove('pagination');
        paginationContainer.classList.add('pagination-container');
      }
    };

    $(bootstrapTable).one('post-body.bs.table', () => {
      const [bootstrapTableContainer] = $(bootstrapTable).parents(
        '.fixed-table-body'
      );
      bootstrapTableContainer.classList.add('custom-scroll');

      bootstrapTableContainer.style.overflowX = 'unset';
      bootstrapTableContainer.style.overflowY = 'unset';

      setTimeout(() => {
        bootstrapTableContainer.style.cssText = '';
      }, 200);
    });

    if (bootstrapTable.dataset.pagination === 'true') {
      bootstrapTable.dataset.paginationPreText =
        '<i class="fas fa-chevron-left"></i>';
      bootstrapTable.dataset.paginationNextText =
        '<i class="fas fa-chevron-right"></i>';

      const handleTableChange = () => {
        removePaginationClass(bootstrapTable);
      };

      $(bootstrapTable).on('post-body.bs.table', handleTableChange);
    }

    if (bootstrapTable.dataset.clickToSelect === 'true') {
      const tableHeaderCheck = bootstrapTable.querySelector(
        'th[data-checkbox="true"]'
      );

      if (tableHeaderCheck) {
        tableHeaderCheck.dataset.clickToSelect = 'false';
      }
    }

    if (bootstrapTable.dataset.search === 'true') {
      $(bootstrapTable).one('post-body.bs.table', () => {
        const [bootstrapTableContainer] = $(bootstrapTable).parents(
          '.bootstrap-table'
        );

        const textInputContainer = bootstrapTableContainer.querySelector(
          '.search.btn-group'
        );
        const textInput = bootstrapTableContainer.querySelector(
          'input.search-input'
        );

        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group', 'm-0');

        formGroup.append(textInput);
        textInputContainer.append(formGroup);
      });
    }

    if (bootstrapTable.dataset.showColumns === 'true') {
      $(bootstrapTable).one('post-body.bs.table', () => {
        const [bootstrapTableContainer] = $(bootstrapTable).parents(
          '.bootstrap-table'
        );
        const openDropdownButton = bootstrapTableContainer.querySelector(
          '.fixed-table-toolbar .columns button.btn'
        );
        const dropdownMenu = bootstrapTableContainer.querySelector(
          '.fixed-table-toolbar .columns .dropdown-menu'
        );

        if (openDropdownButton) {
          openDropdownButton.classList.add('btn-secondary');
        }

        if (dropdownMenu) {
          const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');

          dropdownItems.forEach((dropdownItem, index) => {
            const checkbox = dropdownItem.querySelector(
              'input[type="checkbox"]'
            );
            checkbox.id = `column-checkbox-${tableIndex}-${index}`;
            checkbox.classList.add('form-check-input');

            const formCheck = document.createElement('div');
            formCheck.classList.add('form-check');

            const label = document.createElement('label');
            label.classList.add('form-check-label');
            label.setAttribute('for', `column-checkbox-${tableIndex}-${index}`);

            formCheck.append(checkbox, label);
            dropdownItem.append(formCheck);

            const columnLabel = dropdownItem.querySelector('span');
            dropdownItem.append(columnLabel);
          });
        }
      });
    }

    $(bootstrapTable).one('post-body.bs.table', () => {
      const tableHeaders = bootstrapTable.querySelectorAll('thead th');

      const addIcon = (iconElement, icon) => {
        iconElement.className = iconElement.className.replace(/fa-.*$/, '');
        iconElement.classList.add(icon);
      };

      const resetHeaders = clickedElement => {
        tableHeaders.forEach(tableHeader => {
          const sortableElement = tableHeader.querySelector('.sortable');

          if (sortableElement && sortableElement !== clickedElement) {
            sortableElement.sortState = null;
            const sortIcon = sortableElement.querySelector('i');
            addIcon(sortIcon, 'fa-sort');
          }
        });
      };

      tableHeaders.forEach(tableHeader => {
        const sortableElement = tableHeader.querySelector('.sortable');

        if (sortableElement) {
          const buttonIcon = document.createElement('button');
          const sortIcon = document.createElement('i');
          sortIcon.classList.add('fas', 'fa-sort');

          buttonIcon.append(sortIcon);
          sortableElement.append(buttonIcon);

          sortableElement.addEventListener('click', () => {
            resetHeaders(sortableElement);

            if (
              !sortableElement.sortState ||
              sortableElement.sortState === 'desc'
            ) {
              sortableElement.sortState = 'asc';
              addIcon(sortIcon, 'fa-sort-up');
            } else if (sortableElement.sortState === 'asc') {
              sortableElement.sortState = 'desc';
              addIcon(sortIcon, 'fa-sort-down');
            }
          });
        }
      });
    });

    $(bootstrapTable).one('post-body.bs.table', () => {
      const updateChecks = () => {
        const tableHeaders = Array.from(
          bootstrapTable.querySelectorAll('thead th')
        );

        const headerCheck = tableHeaders.find(tableHeader =>
          tableHeader.querySelector('input[type="checkbox"]')
        );

        if (headerCheck) {
          const checksOnTable = bootstrapTable.querySelectorAll('.bs-checkbox');
          bootstrapTable.classList.add('table-icon');

          checksOnTable.forEach((checkOnTable, index) => {
            const checkbox = checkOnTable.querySelector(
              'input[type="checkbox"]'
            );

            if (checkbox) {
              checkbox.id = `checkbox-${tableIndex}-${index}`;
              checkbox.classList.add('form-check-input');
              checkbox.parentElement.remove();

              const formCheck = document.createElement('div');
              formCheck.classList.add('form-check');

              const checkLabel = document.createElement('label');
              checkLabel.classList.add('form-check-label');
              checkLabel.setAttribute('for', `checkbox-${tableIndex}-${index}`);

              formCheck.append(checkbox, checkLabel);

              if (checkOnTable.tagName === 'TH') {
                const thInner = checkOnTable.querySelector('.th-inner');

                thInner.append(formCheck);
              } else if (checkOnTable.tagName === 'TD') {
                checkOnTable.append(formCheck);
              }
            }
          });
        }
      };

      updateChecks();

      $(bootstrapTable).on('post-body.bs.table', updateChecks);
    });

    $(bootstrapTable).one('post-body.bs.table', () => {
      const updateRadios = () => {
        const tableHeaders = Array.from(
          bootstrapTable.querySelectorAll('thead th.bs-checkbox')
        );

        const headerRadio = tableHeaders.find(
          tableHeader => !tableHeader.querySelector('input[type="checkbox"]')
        );

        if (headerRadio) {
          $(bootstrapTable).one('post-body.bs.table', () => {
            const radiosOnTable = bootstrapTable.querySelectorAll(
              '.bs-checkbox'
            );

            radiosOnTable.forEach((radioOnTable, index) => {
              const radio = radioOnTable.querySelector('input[type="radio"]');

              if (radio) {
                radio.id = `radio-${tableIndex}-${index}`;
                radio.classList.add('form-check-input');
                radio.parentElement.remove();

                const formCheck = document.createElement('div');
                formCheck.classList.add('form-check');

                const radioLabel = document.createElement('label');
                radioLabel.classList.add('form-check-label');
                radioLabel.setAttribute('for', `radio-${tableIndex}-${index}`);

                formCheck.append(radio, radioLabel);
                radioOnTable.append(formCheck);
              }
            });
          });
        }
      };

      updateRadios();

      $(bootstrapTable).on('post-body.bs.table', updateRadios);
    });

    $(bootstrapTable).one('post-body.bs.table', () => {
      $(bootstrapTable).on('all.bs.table', () => {
        if (bootstrapTable.dataset.pagination === 'true') {
          removePaginationClass(bootstrapTable);
        }

        window.emitChangePalette();
      });
    });
  });

  const linkFormatter = value =>
    `<a class="link" href="${value}" target="_blank" rel="noopener noreferrer">${value}</a>`;

  window.linkFormatter = linkFormatter;
})();