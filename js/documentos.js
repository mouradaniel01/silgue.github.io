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
