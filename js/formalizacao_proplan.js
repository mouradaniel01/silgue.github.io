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
var membros = [];
var formalizacoes = [];

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
		"numero_projeto": "14901",
		"numero_do_processo": "23077.043794/2017-64",
		"titulo":"Desenvolvimento de um modelo de governança para aquisições no contexto de universidades públicas",
		"coordenador":"ANDRE MORAIS GURGEL",
		"unidade_lotacao": "DEPARTAMENTO DE CIÊNCIAS ADMINISTRATIVAS",
		"unidade_execucao": "DEPARTAMENTO DE CIÊNCIAS ADMINISTRATIVAS",
		"palavras_chaves":["governança","gestao de risco","modelo de aquisições","gestão pública nas Universidades Federais"],
		"email":["desenv@si.ufrn.br"],
		"ano":"2020",
		"vigencia_inicio":"01/08/2020",
		"vigencia_fim": "01/08/2021"
	},
	{	
		"aplica_ao_projeto": "NÃO",
		"objeto_da_pesquisa": "Pesquisa envolvendo seres humanos",
		"classificacao_do_objeto":['Outros tipos de pesquisa envolvendo seres humanos'],
		"documentos":{
			"descricao": '',
			"protocolo": '',
			"arquivo": ''}
	},
	{
		"grande_area": "Ciências Sociais Aplicadas",
		"area":"Administração",
		"subarea":"Administração Pública",
		"especialidade":"Organizações Públicas",
		"grupo_de_pesquisa":"Gestão de Riscos",
		"resumo": "A área de governança vem crescendo tanto no contexto acadêmico quanto empresarial. Esta crescente se demonstra pelo desenvolvimento recente de sete modelos referência que tratam sobre este tema. Contudo, estes modelos são adequados a uma realidade empresarial voltada principalmente para a questão financeira.No contexto universitário a área de aquisições é crítica sendo uma área ampla envolvendo desde os processos de planejamento das contratações (identificação das demandas e elaboração do edital), seleção do fornecedor (realização da licitação) e gestão de contratos (fiscalização e pagamento). Além disto, as especificidade técnicas das universidades por possuírem três processos finalísticos básicos, tais como ensino, pesquisa e extensão provoca uma maior complexidade, já que envolve necessidade de exportações, serviços e materiais bem específicos que necessitam de trabalho e priorização diferenciadas. Por isto, neste projeto de pesquisa busca-se desenvolver um modelo de governança para aquisições adequado a realidade do contexto universitário público brasileiro. Para isto, desenvolveu-se uma pesquisa descritiva, envolvendo os processos de aquisição de uma universidade pública. Para isto será empregado o estudo de caso na Universidade Federal do Rio Grande do Norte. Será adotada a estratégia de pesquisa Pesquisa-Ação, que possui um caráter participativo e permite um processo de mudança planejada (THIOLLENT, 2011; MACKE, 2006). Este método evidencia a realidade dos problemas observados bem como o conjunto de ações de intervenção envolvidas na condução da pesquisa, alcançando dinamicidade no estudo dos problemas, decisões, ações, negociações, conflitos e reflexões que acontecem entre as partes envolvidas no processo de resolução do problema (THIOLLENT, 2009). Com isto, busca-se responder a problemática de se entender os mecanismos de governança empregados pelas universidades públicas no contexto de aquisições e como poderiam ser aperfeiçoados estes mecanismos a partir da integração de contextos já trabalhados em outros setores possibilitando assim o desenvolvimento de um modelo específico para este setor.",
		"Introducao": "Introdução do projeto",
		"metodos": "",
		"referência":"CBOK, BPM. Guia para o Gerenciamento de Processos de Negócio Corpo Comum de Conhecimento. Association of Business Process Management Professionals. ABPMP BPM CBOK, v. 3, 2013. DEMING, W. Edwards. Qualidade: a revolução da administração. In: Qualidade: a revolução da administração. Marques Saraiva, 1990. HAMMER, Michael; HERSHMAN, Lsa W. Mais rápido barato e melhor. Rio de Janeiro: editora, 2011. HARMON, Paul. Business process change: A guide for business managers and BPM and Six Sigma professionals. Morgan Kaufmann, 2010. JESUS, Leandro; MOREIRA, André. Repensando a Gestão por Meio de Processos: Como BPM pode transformar negócios e gerar crescimento e lucro. EloGroup, 2015. LEAL. M. J.; CAMURI, W. C. A governança corporativa e os modelos mundialmente praticados. Revista de Ciências Gerenciais, v. 12, n. 15, p. 59-74, 2008. LIKER, Jeffrey K. O modelo Toyota: 14 princípios de gestão do maior fabricante do mundo. Bookman Editora, 2016. MACKE, J. A pesquisa-ação como estratégia de pesquisa qualitativa. In: GODOI, C. K.; BANDEIRA-DE-MELLO, R.; SILVA, A. B.. Pesquisa qualitativa em estudos organizacionais: paradigmas, estratégias e métodos. São Paulo: Saraiva, 2006. PAIM, Rafael et al. Gestão de processos: pensar, agir e aprender. Bookman Editora, 2009. SMITH, Howard; FINGAR, Peter. Business process management (BPM): The third wave. 2006. SOUSA NETO, Manoel Veras; JÚNIOR, MEDEIROS; AFINAL, J. V. o que é Business Process Management (BPM)? Um novo conceito para um novo contexto. Revista Eletrônica de Sistemas de Informação, v. 7, n. 2, 2008. THIOLLENT, Michel. Pesquisa-ação nas organizações. São Paulo: Atlas, 2009. VOM BROCKE, Jan; ROSEMANN, Michael. Manual de BPM: gestão de processos de negócio. Bookman Editora, 2013.",
		"Objetivo Geral": "Os objetivos geral do projeto é proporcionar tal coisa...",
		"objetivos_especificos":[
		{
			"descricao":"Entender os processos formais de trabalho envolvidos no processo de aquisições no contexto universitário"
		},
		{
			"descricao":"Compreender como se dá a integração do setor de aquisições ao planejamento estratégico das universidades"
		},
		{
			"descricao":"Entender o contexto de terceirização nas universidades"
		},
		{
			"descricao":"Desenvolver um modelo de gestão de riscos para aquisições adequado a realidade universitária"
		}
		]
	},
	{
		"agenda_2030": '16'
	},
	
	[
		{
			"numero":"1",
			"tipo":"meta",
			"descricao":"",
			"indicador": "Artigo completo submetido ou publicado em anais de eventos",
			"quantidade":"2"
		},
		{
			"numero":"1",
			"tipo": "Resultados Esperados",
			"descricao": "desenvolvimento de um framework de gestão de riscos em aquisições alinhados a realidade universitária brasileira.",
			"indicador":"produto",
			"quantidade":"1"
		}
	],
	
	{
		"tipo_impacto":"Tecnológico",
		"difusao":[
			{
				"difusao": "artigos científicos",
				"publico":"gestores de universidades publicas",
				"forma_divulgacao":"revistas científicas"
			}
		]
	},
	[
		{
			"tipo_da_infraestrutura":"",
			"nome_infraestrutura":""
		}
	],
	[membros],
	[
		{
			"categoria":"",
			"ambito": "",
			"nome_parceira" : "",
			"cnpj_parceira":""
		}
	],
	{
		"etapa":"",
		"mes_inicio":"",
		"mes_fim":"",
		"atividades":[
						{
							"tipo":"",
							"descricao":"",
							"membros":[
											{
												"nome_membro":"",
												"ch_atividade":"",
												"plano_atividade":{
													"descricao": "",
													"justificativa":""
												}
											}
										]
							
						}
					]
		
	},
	{
		"tipo_documento": "",
		"descricao":"",
		"arquivo":""
	},
	{
		"valor_plano_aplicacao":"249.392,00",
		"valor_remuneracao_ufrn":"0",
		"doap":"20.552,00",
		"tempo_execucao":"24",
		"valor_projeto":"249.392,00",
		"fonte_recurso":"B"
	},
	{
		"pendencias": ""
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
		"numero_projeto": "14917",
		"numero_do_processo": "23077.043770/2020-52",
		"titulo":"ADOÇÃO DO MODELO LCC ÁGIL NA APRENDIZAGEM BASEADA EM PROJETOS",
		"coordenador":"JOSUÉ VITOR DE MEDEIROS JÚNIOR ",
		"unidade_lotacao": "DEPARTAMENTO DE CIÊNCIAS ADMINISTRATIVAS",
		"unidade_execucao": "DEPARTAMENTO DE CIÊNCIAS ADMINISTRATIVAS",
		"palavras_chaves":["gestão de projetos","LCC","gestão visual"],
		"email":["desenv@si.ufrn.br"],
		"ano":"2020",
		"vigencia_inicio":"01/10/2020",
		"vigencia_fim": "31/12/2021"
	},
	{	
		"aplica_ao_projeto": "NÃO",
		"objeto_da_pesquisa": "Pesquisa envolvendo seres humanos",
		"classificacao_do_objeto":['Outros tipos de pesquisa envolvendo seres humanos'],
		"documentos":{
			"descricao": '',
			"protocolo": '',
			"arquivo": ''}
	},
	{
		"grande_area": "Ciências Sociais Aplicadas",
		"area":"Administração",
		"subarea":"Administração Pública",
		"especialidade":"Organizações Públicas",
		"grupo_de_pesquisa":"Gestão de Riscos",
		"resumo": "Em geral, as práticas de ensino ainda estão ancoradas numa abordagem centralizada no professor e focadas no conteúdo, tornando o processo de ensino-aprendizagem pouco efetivo. A Aprendizagem Baseada em Projetos (ABPj) se propõe lidar com esta questão ao possibilitar um processo focado no aprendiz, através da execução de projetos que possibilitem aos alunos exercitar e refletir sobre conceitos relevantes com autonomia necessária.",
		"introducao": "Introdução do projeto",
		"metodos": "",
		"referência":"CICLO DE VIDA DE PROJETOS MATOS, Sandra; LOPES, Eurico. Prince2 or PMBOK–a question of choice. Procedia Technology, v. 9, p. 787-794, 2013. MEDEIROS, Bruno Campelo et al. Planejando projetos com o Life Cycle Canvas (LCC): um estudo sobre um projeto de infraestrutura pública estadual. Exacta – EP, São Paulo, v. 15, n. 1, p. 155-170, 2016. MEDEIROS, Bruno Campelo et al. Life Cycle Canvas (LCC): Um modelo visual para a gestão do ciclo de vida do projeto. Revista de Gestão e Projetos-GeP, v. 9, n. 1, p. 87-101, 2018. PMI. Um guia do conhecimento em gerenciamento de projetos.",
		"objetivo Geral": "Os objetivos geral do projeto é proporcionar tal coisa...",
		"objetivos_especificos":[
			{
				descricao:"Aumento no engajamento dos discentes na escrita do artigo como projeto de aprendizagem e na construção e execução de projetos de inovação"
			},
			{
				descricao:"Aprimorar a aquisição de conhecimento referente ao conteúdo das disciplinas de gestão de projetos e gestão da inovação"
			},
			{
				descricao:"Auxiliar no desenvolvimento de competências necessárias ao desenvolvimento do projeto de aprendizagem estabelecido para as disciplinas envolvidas"
			}
		]
	},
	{
		"agenda_2030": '16'
	},
	[
		{
			"numero":"1",
			"tipo":"meta",
			"descricao":"",
			"indicador": "Artigo completo submetido ou publicado em anais de eventos",
			"quantidade":"2"
		},
		{
			"numero":"1",
			"tipo": "Resultados Esperados",
			"descricao": "desenvolvimento de um framework de gestão de riscos em aquisições alinhados a realidade universitária brasileira.",
			"indicador":"produto",
			"quantidade":"1"
		}
	],
	{
		"tipo_impacto":"Tecnológico",
		"difusao": [
			{
				"difusao": "artigos científicos",
				"publico":"gestores de universidades publicas",
				"forma_divulgacao":"revistas científicas"
			}
		]
	},
	[
		{
			"tipo_da_infraestrutura":"",
			"nome_infraestrutura":""
		}
	],
	[membros],
	[
		{
			"categoria":"",
			"ambito": "",
			"nome_parceira" : "",
			"cnpj_parceira":""
		}
	],
	{
		"etapa":"",
		"mes_inicio":"",
		"mes_fim":"",
		"atividades":[
						{
							"tipo":"",
							"descricao":"",
							"membros":  [
											{
												"nome_membro":"",
												"ch_atividade":"",
												"plano_atividade":{
													"descricao": "",
													"justificativa":""
												}
											}
										]
						}						
			]
	},
	{
		"tipo_documento": "",
		"descricao":"",
		"arquivo":""
	},
	{
		"valor_plano_aplicacao":"249.392,00",
		"valor_remuneracao_ufrn":"0",
		"doap":"20.552,00",
		"tempo_execucao":"24",
		"valor_projeto":"249.392,00",
		"fonte_recurso":"B"
	},
	{
		"pendencias": ""
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
		"numero_projeto": "23972",
		"numero_do_processo": "23077.043704/2020-32",
		"titulo":"Compreendendo o processo de formação de oportunidades em empresas nascentes de internet (startups)",
		"coordenador":"JOSUÉ VITOR DE MEDEIROS JÚNIOR",
		"unidade_lotacao": "DEPARTAMENTO DE CIÊNCIAS ADMINISTRATIVAS",
		"unidade_execucao": "DEPARTAMENTO DE CIÊNCIAS ADMINISTRATIVAS",
		"palavras_chaves":["governança","gestao de risco","modelo de aquisições","gestão pública nas Universidades Federais"],
		"email":["desenv@si.ufrn.br"],
		"ano":"2019",
		"vigencia_inicio":"01/08/2019",
		"vigencia_fim": "01/08/2021"
	},
	{	
		"aplica_ao_projeto": "NÃO",
		"objeto_da_pesquisa": "Pesquisa envolvendo seres humanos",
		"classificacao_do_objeto":['Outros tipos de pesquisa envolvendo seres humanos'],
		"documentos":{
			"descricao": '',
			"protocolo": '',
			"arquivo": ''}
	},
	{
		"grande_area": "Ciências Sociais Aplicadas",
		"area":"Administração",
		"subarea":"Administração Pública",
		"especialidade":"Organizações Públicas",
		"grupo_de_pesquisa":"Gestão de Riscos",
		"resumo": "O presente projeto tem como objetivo compreender o processo de de formação de oportunidades empreendedoras para novos negócios de tecnologia de internet baseado na abordagem do empreendedorismo orientado por hipóteses, mais alinhada ao aprendizado, rapidez e foco necessários durante a formação de empresas desta natureza. Para cumprir com o objetivo, será desenvolvido um modelo, a ser validado a partir do processo de formação de oportunidades com empreendedores com empresas recém incubadas no Núcleo de Aplicação de Tecnologias Avançadas (NATA) da UFRN, bem como com alunos de disciplinas de empreendedorismo dos cursos de Ciência e Tecnologia e Administração da UFRN. Dados serão capturados durante o processo, relacionados à ação empreendedora, interação social destes e ideias em desenvolvimento, e comparados com o desempenho dos participantes, de maneira que o modelo possa facilitar a compreensão de como as ideias relacionados a oportunidades são concebidas, validadas, refinadas e descartadas, bem como a relação entre padrões de desenvolvimento e o desempenho das equipes/empresas nascentes ao final do processo. Pretende-se que o modelo proposto possa apoiar o ensino de empreendedorismo e propicie maior maturidade na oportunidade identificada por empresas de tecnologia.",
		"Introducao": "Introdução do projeto",
		"metodos": "",
		"referência":"ALDRICH, H. E. & MARTINEZ, M. A. (2001) Many are Called, but Few are Chosen: Na Evolutionary Perspective for the Study of Entrepreneurship. Entrepreneurship: Theory & Practice, v. 25, n.4, pp. 41-56",
		"Objetivo Geral": "Os objetivos geral do projeto é proporcionar tal coisa...",
		"objetivos_especificos":[
			{
				"descricao":"Entender os processos..."
			},
			{
				"descricao":"Compreender como se dá a integração..."
			}
		]
	},
	{
		"agenda_2030": '16'
	},
	[
			{
				"numero":"1",
				"tipo":"meta",
				"descricao":"",
				"indicador": "Artigo completo submetido ou publicado em anais de eventos",
				"quantidade":"2"
			},
			{
				"numero":"1",
				"tipo": "Resultados Esperados",
				"descricao": "desenvolvimento de um framework de gestão de riscos em aquisições alinhados a realidade universitária brasileira.",
				"indicador":"produto",
				"quantidade":"1"
			}
	],
	{
		"tipo_impacto":"Tecnológico",
		"difusao":[
			{
				"difusao": "artigos científicos",
				"publico":"gestores de universidades publicas",
				"forma_divulgacao":"revistas científicas"
			}
		]
	},
	[
		{
			"tipo_da_infraestrutura":"",
			"nome_infraestrutura":""
		}
	],
	[membros],
	[
		{
			"categoria":"",
			"ambito": "",
			"nome_parceira" : "",
			"cnpj_parceira":""
		}
	],
	{
		"etapa":"",
		"mes_inicio":"",
		"mes_fim":"",
		"atividades":[
					{
						"tipo":"",
						"descricao":"",
						"membros":[
									{
										"nome_membro":"",
										"ch_atividade":"",
										"plano_atividade":{
											"descricao": "",
											"justificativa":""
										}
									}
								]
						
					}
				]
	},
	{
		"tipo_documento": "",
		"descricao":"",
		"arquivo":""
	},
	{
		"pendencias": ""
	}
);

projetosPesquisa.push(projetoPesquisa1, projetoPesquisa2, projetoPesquisa3);

var historicoProjeto1 = new Historico('14901','SOLICITAÇÃO DE FORMALIZAÇÃO','28/07/2020 9:15','josuevitor','SUBMETIDO COM SUCESSO','EM ANÁLISE PELA PROPLAN','');
var historicoProjeto2 = new Historico('14917','SOLICITAÇÃO DE FORMALIZAÇÃO','31/07/2020 15:32','josuevitor','SUBMETIDO COM SUCESSO','EM ANÁLISE PELA PROPLAN','');
var historicoProjeto3 = new Historico('23972','SOLICITAÇÃO DE FORMALIZAÇÃO','04/08/2020 09:10','josuevitor','SUBMETIDO COM SUCESSO','EM ANÁLISE PELA PROPLAN','');

var historicos = [];

var formalizacaoProjetoPesquisa1 = new FormalizacaoProjetoPesquisa(
	'14901',
	{
		"fonte_recurso": "B",
		"tempo_execucao": "24",
		"partilha_resultados": "Em Parceria",
		"criacoes_resultantes":"Desenvolvimento de produto"
	},
	[
	{ufrn},{funpec}
	],
	[
		{
			"numero":"1",
			"tipo":"meta",
			"descricao":"",
			"indicador": "Artigo completo submetido ou publicado em anais de eventos",
			"quantidade":"2",
			"mes_inicio": "01/10/2020",
			"mes_fim": "31/12/2020",
			"membros":[
						{
							"nome_membro":"JOSUÉ VITOR",
							"ch_atividade":"4",
							"plano_atividade":{
								"descricao": "Descrição do plano de atividade",
								"justificativa":"justificativa do plano de atividade"
								}
						}
						]
		},
		{
			"numero":"1",
			"tipo": "Resultados Esperados",
			"descricao": "desenvolvimento de um framework de gestão de riscos em aquisições alinhados a realidade universitária brasileira.",
			"indicador":"produto",
			"quantidade":"1",
			"mes_inicio":"3",
			"mes_fim":"6",
			"membros":[
						{
							"nome_membro":"JOSUÉ VITOR",
							"ch_atividade":"4",
							"plano_atividade":{
								"descricao": "Descrição do plano de atividade",
								"justificativa":"justificativa do plano de atividade"
								}
						},
						{
							"nome_membro":"BRUNO JOSE PEREIRA SILVA",
							"ch_atividade":"8",
							"plano_atividade":{
								"descricao": "Descrição do plano de atividade",
								"justificativa":"justificativa do plano de atividade"
								}
						}
						]
		}
	],
	{
		"orgao_entidade": "UFRN",
		"valor_financiado": "R$300.000,00",
		"responsavel_execucao_financeira": "FUNPEC"
	},
	{
		"valor_projeto":"249.392,00",
		"valor_plano_aplicacao":"249.392,00",
		"valor_remuneracao_ufrn":"0",
		"doap":"20.552,00",
		"rubricas":[
			{
			"rubrica":"14 - Diárias",
			"valor": "R$15.000,00"
		},
		{
			"rubrica":"18 - Auxílio Financeiro ao Estudante",
			"valor": "R$12.000,00"
		},
		{
			"rubrica":"20 - Auxilio Financeiro ao Pesquisador",
			"valor": "R$60.000,00"
		},
		{
			"rubrica":"36 - Serviço Pessoa Física",
			"valor": "R$10.000,00"
		},
		{
			"rubrica":"48 - Auxílio a Pessoa Física",
			"valor": "R$40.000,00"
		}
		]
	},
	"",
	[""],
	{
		"pendencias": ""
	}
	);

var formalizacaoProjetoPesquisa2 = new FormalizacaoProjetoPesquisa(
	'23972',
	{
		"fonte_recurso": "B",
		"tempo_execucao": "24",
		"partilha_resultados": "Mútua Colaboração",
		"criacoes_resultantes":"Desenvolvimento de produto"
	},
	[
	{ufrn},{funpec}
	],
	[
		{
			"numero":"1",
			"tipo":"meta",
			"descricao":"",
			"indicador": "Artigo completo submetido ou publicado em anais de eventos",
			"quantidade":"2",
			"mes_inicio": "01/10/2020",
			"mes_fim": "31/12/2020",
			"membros":[
						{
							"nome_membro":"JOSUÉ VITOR",
							"ch_atividade":"4",
							"plano_atividade":{
								"descricao": "Descrição do plano de atividade",
								"justificativa":"justificativa do plano de atividade"
								}
						}
						]
		},
		{
			"numero":"1",
			"tipo": "Resultados Esperados",
			"descricao": "desenvolvimento de um framework de gestão de riscos em aquisições alinhados a realidade universitária brasileira.",
			"indicador":"produto",
			"quantidade":"1",
			"mes_inicio":"1",
			"mes_fim":"3",
			"membros":[
						{
							"nome_membro":"JOSUÉ VITOR",
							"ch_atividade":"4",
							"plano_atividade":{
								"descricao": "Descrição do plano de atividade",
								"justificativa":"justificativa do plano de atividade"
								}
						},
						{
							"nome_membro":"BRUNO JOSE PEREIRA SILVA",
							"ch_atividade":"8",
							"plano_atividade":{
								"descricao": "Descrição do plano de atividade",
								"justificativa":"justificativa do plano de atividade"
								}
						}
						]
		}
	],
	{
		"orgao_entidade": "UFRN",
		"valor_financiado": "R$250.000,00",
		"responsavel_execucao_financeira": "FUNPEC"
	},
	{
		"valor_projeto":"250.000,00",
		"valor_plano_aplicacao":"250.000,00",
		"valor_remuneracao_ufrn":"0",
		"doap":"12,500,00",
		"rubricas":[
					{
			"rubrica":"14 - Diárias",
			"valor": "R$15.000,00"
		},
		{
			"rubrica":"18 - Auxílio Financeiro ao Estudante",
			"valor": "R$12.000,00"
		},
		{
			"rubrica":"20 - Auxilio Financeiro ao Pesquisador",
			"valor": "R$60.000,00"
		},
		{
			"rubrica":"36 - Serviço Pessoa Física",
			"valor": "R$10.000,00"
		},
		{
			"rubrica":"48 - Auxílio a Pessoa Física",
			"valor": "R$40.000,00"
		}
					]
		
	},"",
	[""],
	{
		"pendencias": ""
	}
	);

var formalizacaoProjetoPesquisa3 = new FormalizacaoProjetoPesquisa(
	'14917',
	{
		"fonte_recurso": "B",
		"tempo_execucao": "24",
		"partilha_resultados": "Em Parceria",
		"criacoes_resultantes":"Desenvolvimento de produto"
	},
	[
	{ufrn},{funpec}
	],
	[
		{
			"numero":"1",
			"tipo":"meta",
			"descricao":"",
			"indicador": "Artigo completo submetido ou publicado em anais de eventos",
			"quantidade":"2",
			"mes_inicio": "01/10/2020",
			"mes_fim": "31/12/2020",
			"membros":[
						{
							"nome_membro":"JOSUÉ VITOR",
							"ch_atividade":"4",
							"plano_atividade":{
								"descricao": "Descrição do plano de atividade",
								"justificativa":"justificativa do plano de atividade"
								}
						}
						]
		},
		{
			"numero":"1",
			"tipo": "Resultados Esperados",
			"descricao": "desenvolvimento de um framework de gestão de riscos em aquisições alinhados a realidade universitária brasileira.",
			"indicador":"produto",
			"quantidade":"1",
			"mes_inicio":"1",
			"mes_fim":"3",
			"membros":[
						{
							"nome_membro":"JOSUÉ VITOR",
							"ch_atividade":"4",
							"plano_atividade":{
								"descricao": "Descrição do plano de atividade",
								"justificativa":"justificativa do plano de atividade"
								}
						},
						{
							"nome_membro":"BRUNO JOSE PEREIRA SILVA",
							"ch_atividade":"8",
							"plano_atividade":{
								"descricao": "Descrição do plano de atividade",
								"justificativa":"justificativa do plano de atividade"
								}
						}
						]
		}
	],
	{
		"orgao_entidade": "UFRN",
		"valor_financiado": "R$300.000,00",
		"responsavel_execucao_financeira": "FUNPEC"
	},
	{
		"valor_projeto":"300.000,00",
		"valor_remuneracao_ufrn":"0",
		"doap":"15,000,00",
		"rubricas":[
					{
			"rubrica":"14 - Diárias",
			"valor": "R$15.000,00"
		},
		{
			"rubrica":"18 - Auxílio Financeiro ao Estudante",
			"valor": "R$12.000,00"
		},
		{
			"rubrica":"20 - Auxilio Financeiro ao Pesquisador",
			"valor": "R$60.000,00"
		},
		{
			"rubrica":"36 - Serviço Pessoa Física",
			"valor": "R$10.000,00"
		},
		{
			"rubrica":"48 - Auxílio a Pessoa Física",
			"valor": "R$40.000,00"
		}
					]
		
	},"",
	[""],
	{
		"pendencias": ""
	}
	);

var fomalizacoes = [];

var membro_1 = new Membro(
	"SERVIDOR",
	"",
	"BRUNO JOSE PEREIRA SILVA",
	"123.456.789-10",
	"UFRN",
	"COLABORADOR(A)",
	"ESPECIALIZAÇÃO",
	"ESTUDANTE MESTRADO",
	"4",
	"RETRIBUIÇÃO PECUNIÁRIA",
	{"tipo":"conta corrente","banco":"001 - Banco do Brasil","agencia":"1234-5","conta":"12345-6"}
	);
var membro_2 = new Membro("DOCENTE",
	"",
	"JOSUE VITOR",
	"101.613.789-11",
	"UFRN",
	"COORDENADOR(A)",
	"DOUTORADO",
	"ESTUDANTE MESTRADO",
	"4",
	"BOLSA DE PESQUISA",
	{"tipo":"conta corrente","banco":"001 - Banco do Brasil","agencia":"1234-6","conta":"12345-7"});
var membro_3 = new Membro("DOCENTE",
	"",
	"ANDRE MORAIS GURGEL",
	"021.814.968-12",
	"UFRN",
	"COLABORADOR",
	"DOUTORADO",
	"ESTUDANTE MESTRADO",
	"4",
	"BOLSA DE PESQUISA",
	{"tipo":"conta corrente","banco":"001 - Banco do Brasil","agencia":"1234-6","conta":"12345-7"});

function Membro(categoria,participante_externo,nome,cpf_passaporte,instituicao,
				funcao,vinculo,ch_projeto,tipo_remuneracao,dados_bancarios){
	this.categoria = categoria;
	this.participante_externo = participante_externo;
	this.nome = nome;
	this.cpf_passaporte = cpf_passaporte;
	this.instituicao = instituicao;
	this.funcao = funcao;
	this.vinculo = vinculo;
	this.ch_projeto = ch_projeto;
	this.tipo_remuneracao = tipo_remuneracao;
	this.dados_bancarios = dados_bancarios;
}

function Analise(numero_projeto,tipo,responsavel,parecer,dados_bancarios,documentos){
	this.numero_projeto = numero_projeto;
	this.tipo = tipo;
	this.responsavel = responsavel;
	this.parecer = parecer;
	this.dados_bancarios = dados_bancarios;
	this.documentos = documentos;
}

function Historico(numero_projeto,tipo,data,login,situacao,fluxo,modal){
	this.numero_projeto = numero_projeto;
	this.tipo = tipo;
	this.data = data;
	this.login = login;
	this.situacao = situacao;
	this.fluxo = fluxo;
	this.modal = modal;
}

function FormalizacaoProjetoPesquisa(numero_projeto,dados_gerais,participes,metas_resultados,recursos,
									plano_aplicacao,cronograma_desembolso,documentos,pendencias){
	this.numero_projeto = numero_projeto;
	this.dados_gerais = dados_gerais;
	this.participes = participes;
	this.metas_resultados = metas_resultados;
	this.recursos = recursos;
	this.plano_aplicacao = plano_aplicacao;
	this.cronograma_desembolso = cronograma_desembolso;
	this.documentos = documentos;
	this.pendencias = pendencias;
}

function ProjetoPesquisa(informacoes_preliminares,dados_gerais,boas_praticas_cientificas,dados_projeto,agenda_2030,
						metas_resultados,impactos_previstos,infraestrutura_recursos, membros_do_projeto, parcerias, cronograma_execucao, documentos, pendencias){
	this.informacoes_preliminares = informacoes_preliminares;
	this.dados_gerais = dados_gerais;
	this.boas_praticas_cientificas = boas_praticas_cientificas;
	this.dados_projeto = dados_projeto;
	this.agenda_2030 = agenda_2030;
	this.metas_resultados = metas_resultados;
	this.impactos_previstos = impactos_previstos;
	this.infraestrutura_recursos = infraestrutura_recursos;
	this.membros_do_projeto = membros_do_projeto;
	this.parcerias = parcerias;
	this.cronograma_execucao = cronograma_execucao;
	this.documentos = documentos;
	this.pendencias = pendencias;
}

function FormalizacaoProjetoPesquisa(numero_projeto,dados_gerais,participes,metas_resultados,recursos,
			plano_aplicacao, cronograma_desembolso, documentos, pendencias){
	this.numero_projeto = numero_projeto;
	this.dados_gerais = dados_gerais;
	this.participes = participes;
	this.metas_resultados = metas_resultados;
	this.recursos = recursos;
	this.plano_aplicacao = plano_aplicacao;
	this.cronograma_desembolso = cronograma_desembolso;
	this.documentos = documentos;
	this.pendencias = pendencias;
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

	var analiseDefault = new Analise('0000','nenhum','ninguem','','',''); 

	analises.push(analiseDefault);

	localStorage.setItem('analises',JSON.stringify(analises));

	historicos.push(historicoProjeto1,historicoProjeto2,historicoProjeto3);

	localStorage.setItem('historicos',JSON.stringify(historicos));

	formalizacoes.push(formalizacaoProjetoPesquisa1,formalizacaoProjetoPesquisa2,formalizacaoProjetoPesquisa3);

	localStorage.setItem('formalizacoes', JSON.stringify(formalizacoes));

	membros.push(membro_1,membro_2,membro_3);

	localStorage.setItem('membros',JSON.stringify(membros));
	
}

function retornarDadosConsultaProjetadaProplanByIdentificador(identificador){

	var projetoPesquisa = JSON.parse(localStorage.getItem(identificador));

	var responsavelFunpec = " ";
	var responsavelAnalise = " ";
	var responsavelFiscalizacao = " ";
	var responsavelInstrumento = " ";
	var fluxo = " ";
	var valor_projeto = "";
	var fonte_recurso = "";


	if(localStorage.getItem('analises') != null){
		JSON.parse(localStorage.getItem('analises')).forEach( function (item){
			analises.forEach( function(analise){
				if(item.numero_projeto === analise.numero_projeto && item.tipo === analise.tipo){
					analises.splice(analises.indexOf(analise), 1);
				}
			});	
		
		analises.push(item);
	});

	analises.forEach( function (analise){
		if((analise.numero_projeto === identificador || analise.numero_projeto.toString() === identificador) && analise.tipo === 'FUNPEC'){
			responsavelFunpec = analise.responsavel;
		}
		if((analise.numero_projeto === identificador || analise.numero_projeto.toString() === identificador) && analise.tipo === 'ANALISE'){
			responsavelAnalise = analise.responsavel;
		}
		if((analise.numero_projeto === identificador || analise.numero_projeto.toString() === identificador) && analise.tipo === 'FISCALIZACAO'){
			responsavelFiscalizacao = analise.responsavel;
		}
		if((analise.numero_projeto === identificador || analise.numero_projeto.toString() === identificador) && analise.tipo === 'INSTRUMENTO'){
			responsavelInstrumento = analise.responsavel;
		}
	});
	}

	if(localStorage.getItem('historicos') != null){
		JSON.parse(localStorage.getItem('historicos')).forEach( function (item){
			historicos.forEach( function(historico){
				if(item.numero_projeto === historico.numero_projeto){
					historicos.splice(historicos.indexOf(historico), 1);
				}
			});	
		historicos.push(item);
	});

	historicos.forEach( function (historico){
		if(historico.numero_projeto === identificador){
			fluxo = historico.fluxo;
		}
	});
	}

	if(localStorage.getItem('formalizacoes') != null){
		JSON.parse(localStorage.getItem('formalizacoes')).forEach( function (item){
			formalizacoes.forEach( function(formalizacao){
				if(item.numero_projeto === formalizacao.numero_projeto){
					formalizacoes.splice(formalizacoes.indexOf(formalizacao), 1);
				}
			});	
		formalizacoes.push(item);
	});

	formalizacoes.forEach( function (formalizacao){
		if(formalizacao.numero_projeto === identificador){
			valor_projeto = formalizacao.plano_aplicacao.valor_projeto;
			fonte_recurso = formalizacao.dados_gerais.fonte_recurso;
		}
	});
	}

	var dadosProjeto = [projetoPesquisa.dados_gerais.numero_projeto,projetoPesquisa.dados_gerais.titulo,projetoPesquisa.informacoes_preliminares.classificacao_pesquisa,
						projetoPesquisa.dados_gerais.coordenador, fonte_recurso, 
						valor_projeto, fluxo, "Funpec: ".bold() + responsavelFunpec + 
						" Analise técnica: ".bold() + responsavelAnalise + " Fiscalização: ".bold() + responsavelFiscalizacao + 
						" Instrumento Jurídico: ".bold() + responsavelInstrumento,projetoPesquisa.dados_gerais.ano];

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

function retornaDadosConsultaProjetadaProplanBySituacao(param,tipo,situacao){

	var dadosProjetos = [];

	var historicosLocalStorage;

	if(historicos.length === 0){
		historicosLocal = JSON.parse(localStorage.getItem('historicos'));
	}else{
		historicosLocal = historicos;
	}

	if(Array.isArray(param)){
		param.forEach( function (item){
			historicosLocal.forEach( function (historico){
				if(historico.numero_projeto === item.dados_gerais.numero_projeto || historico.numero_projeto.toString() === item.dados_gerais.numero_projeto.toString()){
					if(historico.tipo === tipo && historico.situacao === situacao || historico.tipo.toString() === tipo.toString() && historico.situacao.toString() === situacao.toString()){
						param.splice(param.indexOf(item),1);
					}else{
						dadosProjetos.push(retornarDadosConsultaProjetadaProplanByIdentificador(item));
					}
				}
			});
			
		});

	}else{
		var projetosPesquisaLocalStorage = JSON.parse(localStorage.getItem('projetosPesquisa'));

		projetosPesquisaLocalStorage.forEach(function (projeto){
			historicosLocal.forEach( function (historico){
				if(historico.numero_projeto === projeto.dados_gerais.numero_projeto || historico.numero_projeto.toString() === projeto.dados_gerais.numero_projeto.toString()){
					if(historico.tipo === tipo && historico.situacao === situacao || historico.tipo.toString() === tipo.toString() && historico.situacao.toString() === situacao.toString()){
						projetosPesquisaLocalStorage.splice(projetosPesquisaLocalStorage.indexOf(projeto),1);
					}
				}
			});
		});

		projetosPesquisaLocalStorage.forEach( function (projeto){
			dadosProjetos.push(retornarDadosConsultaProjetadaProplanByIdentificador(projeto.dados_gerais.numero_projeto));
		});
	}

	return dadosProjetos;
}

function retornaDadosAnaliseProjetadaProplan(param){

	var projetoPesquisa = param;

	var arrayDadosProjeto = [];
	var valor_projeto = "";
	var fonte_recurso = "";
	var doap = "";
	var tempo_execucao = "";
	var valor_plano_aplicacao = "";

	if(localStorage.getItem('formalizacoes') != null){
		JSON.parse(localStorage.getItem('formalizacoes')).forEach( function (formalizacao){
		formalizacoes.push(formalizacao);
	});

	formalizacoes.forEach( function (formalizacao){
		if(formalizacao.numero_projeto === projetoPesquisa.dados_gerais.numero_projeto){
			valor_projeto = formalizacao.plano_aplicacao.valor_projeto;
			fonte_recurso = formalizacao.dados_gerais.fonte_recurso;
			doap = formalizacao.plano_aplicacao.doap;
			tempo_execucao = formalizacao.dados_gerais.tempo_execucao;
			valor_plano_aplicacao = formalizacao.plano_aplicacao.valor_plano_aplicacao;
		}
	});
	}

	var dadosProjeto = [projetoPesquisa.dados_gerais.numero_projeto,projetoPesquisa.dados_gerais.titulo,projetoPesquisa.dados_gerais.coordenador,
 			projetoPesquisa.dados_gerais.ano, tempo_execucao,fonte_recurso, 
 			valor_projeto,valor_plano_aplicacao,doap];

	arrayDadosProjeto.push(dadosProjeto)

	return arrayDadosProjeto;
}

function retornarDadosConsultaGeralProjetadaProplanByIdentificador(identificador){

	var projetoPesquisa = JSON.parse(localStorage.getItem(identificador));

	var fluxo = " ";
	var fonte_recurso = "";


	if(localStorage.getItem('historicos') != null){
		JSON.parse(localStorage.getItem('historicos')).forEach( function (historico){
		historicos.push(historico);
		});

		historicos.forEach( function (historico){
			if(historico.numero_projeto === identificador){
				fluxo = historico.fluxo;
			}
		});
	}

	if(localStorage.getItem('formalizacoes') != null && formalizacoes === null){
		JSON.parse(localStorage.getItem('formalizacoes')).forEach( function (formalizacao){
		formalizacoes.push(formalizacao);
	});

	formalizacoes.forEach( function (formalizacao){
		if(formalizacao.numero_projeto === identificador){
			fonte_recurso = formalizacao.dados_gerais.fonte_recurso;
		}
	});
	}

	var dadosProjeto = [projetoPesquisa.dados_gerais.numero_projeto,projetoPesquisa.dados_gerais.titulo,
						fonte_recurso,fluxo,projetoPesquisa.dados_gerais.ano];

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

 	//popularTabela(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela]]);
 	popularTabelaComBotaoDropDown(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela],
 		['modal-parecer-funpec','#modal-parecer-funpec','',idTabela],['modal-dados-bancarios-funpec','#modal-dados-bancarios-funpec','',idTabela]]);


 }

 function popularTabelaProjetoAnaliseFunpec(idTabela){
 	var dadosProjetos = retornaDadosAnaliseProjetadaProplan(JSON.parse(localStorage.getItem(numero_projeto)));

 	//popularTabela(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela]]);
 	popularTabelaComBotaoDropDown(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela],
 		['modal-parecer-funpec','#modal-parecer-funpec','',idTabela],['modal-dados-bancarios-funpec','#modal-dados-bancarios-funpec','',idTabela]]);


 }

 function popularTabelaProjetoAnaliseTecnica(idTabela){
 	var dadosProjetos = retornaDadosAnaliseProjetadaProplan(JSON.parse(localStorage.getItem(numero_projeto)));

 	//popularTabela(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela]]);
 	popularTabelaComBotaoDropDown(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela],
 		['modal-analise-tecnica','#modal-analise-tecnica','',idTabela]]);


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
 		var analise = new Analise(numero_projeto,tipo,'','','','');
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
	 		var analise = new Analise(numero_projeto,tipo,responsavel,'','','');
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

 	solicitacao.push([tipo, data.getDate() + "/"+ (data.getMonth()+1) + "/" + data.getFullYear() + " " + data.getHours() + ":" + ('0'+ data.getMinutes()).slice(-2),'login']);

 	//localStorage.setItem('solicitacoes',JSON.stringify(solicitacoes));


 	popularTabela(idTabela,solicitacao,[['modal-exibicao','#'+modal,'',idTabela]]);

 	return solicitacao;

 }

 function inserirSolicitacaoDotacao(idCampo){

 }

 function inserirSolicitacaoEmpenho(idCampo){

 }

 function inserirParecerAGIR(idCampo){

 }

 function popularTabelaConsultaFunpec(idTabelaProjetos,redirect){

 	var dadosProjetos = retornaDadosConsultaProjetadaProplanBySituacao(JSON.parse(sessionStorage.getItem('projetosPesquisa')),'ANALISE FUNPEC','ANALISE FINALIZADA');

 	popularTabela(idTabelaProjetos,dadosProjetos,[['redirecionar',redirect,'passarNumeroProjeto',idTabelaProjetos]],'sim','sim');

 }

 function popularTabelaConsultaAnaliseTecnica(idTabelaProjetos,redirect){

 	var dadosProjetos = retornaDadosConsultaProjetadaProplanBySituacao(JSON.parse(sessionStorage.getItem('projetosPesquisa')),'ANALISE TECNICA','ANALISE TECNICA FINALIZADA');

 	popularTabela(idTabelaProjetos,dadosProjetos,[['redirecionar',redirect,'passarNumeroProjeto',idTabelaProjetos]],'sim','sim');

 }

 function inserirParecerFunpec(){

 	limpaTabela(document.getElementById('tabela-historico-funpec'));

 	var idTabelaProjeto = 'tabela-analise-funpec';

 	var idTabelaHistorico = 'tabela-historico-funpec';
 	
 	inserirParecer('PARECER FUNPEC','PARECER EMITIDO','EM ANALISE PROPLAN','parecer-funpec',idTabelaProjeto, idTabelaHistorico,'exibir-parecer-funpec', [['modal-exibicao','#modal-visualizar-parecer-funpec','exibirParecerFunpec()',idTabelaHistorico]]);

 	popularTabelaAnaliseFunpec(idTabelaProjeto,idTabelaHistorico);
 }

 function inserirAnaliseTecnica(){

 	var idTabelaProjeto = 'tabela-analise-tecnica';

 	var idTabelaHistorico = 'tabela-historico-analise-tecnica';

 	limpaTabela(document.getElementById(idTabelaHistorico));
 	
 	inserirParecer('ANALISE TECNICA','ANALISE TECNICA EMITIDA','EM ANALISE PROPLAN','analise-tecnica',idTabelaProjeto, idTabelaHistorico,'exibir-analise-tecnica', [['modal-exibicao','#modal-visualizar-analise-tecnica','exibirAnaliseTecnica()',idTabelaHistorico]]);

 	popularTabelaAnaliseTecnica(idTabelaProjeto,idTabelaHistorico);
 }

 function inserirParecer(tipo,situacao,fluxo,idParecer,idTabelaProjeto,idTabelaHistorico,idCampoDestino,modal){

 	var parecer = document.getElementById(idParecer).value;

 	var data = new Date();

 	//tipo, idTabela,idCampo,idDestino,modal

 	var historico = new Historico(numero_projeto,tipo,data.getDate() + "/"+ (data.getMonth()+1) + "/" + data.getFullYear() + " " + data.getHours() + ":" + ('0'+ data.getMinutes()).slice(-2),
 								'login',situacao,fluxo,modal);
 	historicos.push(historico);
//objeto analise: numero_projeto,tipo,responsavel,parecer,dados_bancarios,documentos

 	if(analises.length > 0){
 		analises.forEach(function (analise){
 		if(analise.numero_projeto === numero_projeto){
 			analise.parecer = parecer;
 		}
 	});
 	}else{
 		analises = JSON.parse(localStorage.getItem('analises'));
 		analises.forEach(function (analise){
 		if(analise.numero_projeto === numero_projeto){
 			analise.parecer = parecer;
 		}
 	});
 	}

 	localStorage.setItem('analises', JSON.stringify(analises));

 	localStorage.setItem('historicos', JSON.stringify(historicos));

 }

 function exibirParecerFunpec(){
 	if(analises.length === 0){
 		JSON.parse(localStorage.getItem('analises')).forEach( function (analise){
 			analises.push(analise);
 		});
 	}
 	analises.forEach( function (analise){
 		if(analise.numero_projeto === numero_projeto && analise.tipo === 'FUNPEC'){
 			document.getElementById('exibir-parecer-funpec').innerHTML = analise.parecer;
 		}
 	});
 }

 function exibirAnaliseTecnica(){
 	if(analises.length === 0){
 		JSON.parse(localStorage.getItem('analises')).forEach( function (analise){
 			analises.push(analise);
 		});
 	}
 	analises.forEach( function (analise){
 		if(analise.numero_projeto === numero_projeto && analise.tipo === 'ANALISE'){
 			document.getElementById('exibir-analise-tecnica').innerHTML = analise.parecer;
 		}
 	});
 }

 function inserirDadosBancariosFunpec(){

 	var idTabelaProjeto = 'tabela-analise-funpec';

 	var idTabelaHistorico = 'tabela-historico-funpec';

 	limpaTabela(document.getElementById(idTabelaHistorico));

 	InserirDadosBancarios('DADOS BANCARIOS DO PROJETO','DADOS BANCARIOS INFORMADOS','EM ANALISE PROPLAN','select-banco-conta-projeto','agencia-projeto','conta-projeto',idTabelaProjeto,idTabelaHistorico,[['modal-exibicao','#modal-visualizar-dados-bancarios','exibirDadosBancariosFunpec()',idTabelaHistorico]]);

 	popularTabelaAnaliseFunpec(idTabelaProjeto,idTabelaHistorico);

 }


 function InserirDadosBancarios(tipo,situacao,fluxo,idBanco,idAgencia,idConta,idTabelaProjeto,idTabelaHistorico,modal){

 	var banco = document.getElementById(idBanco).value;
 	var conta = document.getElementById(idAgencia).value;
 	var agencia = document.getElementById(idConta).value;
 	var dados_bancarios = [];

 	var data = new Date();

 	var historico = new Historico(numero_projeto,tipo,data.getDate() + "/"+ (data.getMonth()+1) + "/" + data.getFullYear() + " " + data.getHours() + ":" + ('0'+ data.getMinutes()).slice(-2),
 								'login',situacao,fluxo,modal);
 	historicos.push(historico);

 	dados_bancarios.push(banco,conta,agencia);

 	analises.forEach(function (analise){
 		if(analise.numero_projeto === numero_projeto){
 			analise.dados_bancarios = dados_bancarios;
 		}
 	});

 	localStorage.setItem('analises', JSON.stringify(analises));

 	localStorage.setItem('historicos', JSON.stringify(historicos));

 }

 function exibirDadosBancariosFunpec(){
 	if(analises.length === 0){
 		JSON.parse(localStorage.getItem('analises')).forEach( function (analise){
 			analises.push(analise);
 		});
 	}
 	analises.forEach( function (analise){
 		if(analise.numero_projeto === numero_projeto){
 			document.getElementById('exibir-banco-projeto').innerHTML = analise.dados_bancarios[0];
 			document.getElementById('exibir-agencia-projeto').innerHTML = analise.dados_bancarios[1];
 			document.getElementById('exibir-conta-projeto').innerHTML = analise.dados_bancarios[2];
 		}
 	});

 }

 function finalizarAnaliseFunpec(){

 	var data = new Date();

 	var historico = new Historico(numero_projeto,'ANALISE FUNPEC',data.getDate() + "/"+ (data.getMonth()+1) + "/" + data.getFullYear() + " " + data.getHours() + ":" + ('0'+ data.getMinutes()).slice(-2),
 								'login','ANALISE FINALIZADA','EM ANALISE PROPLAN','');
 	historicos.push(historico);

 	localStorage.setItem('historicos', JSON.stringify(historicos));

 	//InserirAnaliseFunpec(idTabelaProjeto, idTabelaHistorico, idTabelaArquivo, parecer_funpec, idBanco,idAgencia,idConta);

 }

 function populaTabelaArquivosFunpec(idTabela){
 	populaTabelaArquivos(idTabela);
 }

 function populaTabelaArquivosAnaliseTecnica(idTabela){
 	populaTabelaArquivos(idTabela);
 }

 function popularTabelaAnaliseFunpec(idTabelaProjetos,idTabelaHistorico,idTabelaArquivo){

 	popularTabelaProjetoAnaliseFunpec(idTabelaProjetos);

 	if(historicos.length > 0){
 		historicos.forEach( function (historico){
 			if(historico.numero_projeto === numero_projeto.toString() || historico.numero_projeto === numero_projeto){
				var dadosEvento = [];
	 			dadosEvento.push([historico.tipo,historico.data,historico.login]);
	 			popularTabela(idTabelaHistorico,dadosEvento,historico.modal,'nao','nao');
			}
			
 	});
 	}else{
 		historicos = JSON.parse(localStorage.getItem('historicos'));
		historicos.forEach( function (historico){
			if(historico.numero_projeto === numero_projeto.toString() || historico.numero_projeto === numero_projeto){
				var dadosEvento = [];
	 			dadosEvento.push([historico.tipo,historico.data,historico.login]);
	 			popularTabela(idTabelaHistorico,dadosEvento,historico.modal,'nao','nao');
			}
			
 	});
 	}

 	populaTabelaArquivosFunpec(idTabelaArquivo);
 	
 }

 function popularTabelaAnaliseTecnica(idTabelaProjetos,idTabelaHistorico,idTabelaArquivo){

 	popularTabelaProjetoAnaliseTecnica(idTabelaProjetos);

 	if(historicos.length > 0){
 		historicos.forEach( function (historico){
 			if(historico.numero_projeto === numero_projeto.toString() || historico.numero_projeto === numero_projeto){
				var dadosEvento = [];
	 			dadosEvento.push([historico.tipo,historico.data,historico.login]);
	 			popularTabela(idTabelaHistorico,dadosEvento,historico.modal,'nao','nao');
			}
			
 	});
 	}else{
 		historicos = JSON.parse(localStorage.getItem('historicos'));
		historicos.forEach( function (historico){
			if(historico.numero_projeto === numero_projeto.toString() || historico.numero_projeto === numero_projeto){
				var dadosEvento = [];
	 			dadosEvento.push([historico.tipo,historico.data,historico.login]);
	 			popularTabela(idTabelaHistorico,dadosEvento,historico.modal,'nao','nao');
			}
			
 	});
 	}

 	populaTabelaArquivosAnaliseTecnica(idTabelaArquivo);
 	
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

function inserirArquivoFunpec(){

	inserirArquivo('tabela-arquivos-funpec','select-tipos-documentos','descricao-arquivo-funpec','arquivo-projeto-funpec');

	//localStorage.setItem('formalizacoes',JSON.stringify(formalizacoes));

	//populaTabelaArquivos('tabela-arquivos-funpec');
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


