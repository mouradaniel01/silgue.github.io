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

var numero_projeto = JSON.parse(localStorage.getItem('numero_projeto'));

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
		"coordenador":"JOSUÉ VITOR DE MEDEIROS JÚNIOR",
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



var historicoProjeto1 = new Historico('14901','SOLICITAÇÃO DE FORMALIZAÇÃO','28/07/2020 9:15','josuevitor','SUBMETIDO COM SUCESSO','EM ANÁLISE PELA PROPLAN','');
var historicoProjeto2 = new Historico('14917','SOLICITAÇÃO DE FORMALIZAÇÃO','31/07/2020 15:32','josuevitor','SUBMETIDO COM SUCESSO','EM ANÁLISE PELA PROPLAN','');
var historicoProjeto3 = new Historico('23972','SOLICITAÇÃO DE FORMALIZAÇÃO','04/08/2020 09:10','josuevitor','SUBMETIDO COM SUCESSO','EM ANÁLISE PELA PROPLAN','');

var historicos = [];

var formalizacaoProjetoPesquisa1 = new FormalizacaoProjetoPesquisa(
	projetoPesquisa1,
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
	projetoPesquisa2,
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
	projetoPesquisa3,
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
		"valor_plano_aplicacao":"300.000,00",
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

function FormalizacaoProjetoPesquisa(projeto_pesquisa,dados_gerais,participes,metas_resultados,recursos,
									plano_aplicacao,cronograma_desembolso,documentos,pendencias){
	this.projeto_pesquisa = projeto_pesquisa;
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

	setLocalStorage('numero_projeto',numero);

}

function passarResponsavelTecnico(campo,resp){

    setLocalStorage(campo, resp);
}

function setAnalise(identificador,tipo,analise){
	var id = tipo+'_'+identificador;
	setLocalStorage(id,analise);
}

function setHistorico(identificador,historico){
	var id = 'historico_'+identificador;
	setLocalStorage(id,historico);
}

function setFormalizacao(identificador,formalizacao){
	var id = 'formalizacao_'+identificador;
	setLocalStorage(id,formalizacao);
}

function populaProjetosPesquisa(){
	setArrayLocalStorage('projetosPesquisa',projetosPesquisa,[projetoPesquisa1,projetoPesquisa2,projetoPesquisa3]);
	projetosPesquisa.forEach( function(projeto){
		setLocalStorage(projeto.dados_gerais.numero_projeto,projeto);
	});
}

function populaAnalises(){

	analises = setArrayLocalStorage('analises',analises,[new Analise('14901','ANALISE_FUNPEC','','','',''),new Analise('14901','ANALISE_TECNICA','','','',''),new Analise('14901','INSTRUMENTO_JURIDICO','','','',''),new Analise('14917','ANALISE_FUNPEC','','','',''),new Analise('14917','ANALISE_TECNICA','','','',''),new Analise('14917','INSTRUMENTO_JURIDICO','','','',''),new Analise('23972','ANALISE_FUNPEC','','','',''),new Analise('23972','ANALISE_TECNICA','','','',''),new Analise('23972','INSTRUMENTO_JURIDICO','','','','')]);
	analises.forEach( function(analise){
		setAnalise(analise.numero_projeto,analise.tipo,analise);
	});
}

function populaHistoricos(){
	historicos = setArrayLocalStorage('historicos',historicos,[historicoProjeto1,historicoProjeto2,historicoProjeto3]);
	historicos.forEach( function(historico){
		setHistorico(historico.numero_projeto,historico);
	});
}

function populaFormalizacoes(){
	formalizacoes = setArrayLocalStorage('formalizacoes',formalizacoes,[formalizacaoProjetoPesquisa1,formalizacaoProjetoPesquisa2,formalizacaoProjetoPesquisa3]);
	formalizacoes.forEach( function(formalizacao){
		setFormalizacao(formalizacao.projeto_pesquisa.dados_gerais.numero_projeto,formalizacao);
	});
}

function populaMembros(){
	setArrayLocalStorage('membros',membros,[membro_1,membro_2,membro_3]);
}

function populaTiposDocumento(){
	Array.isArray(JSON.parse(localStorage.getItem('tiposDocumentos'))) ? setLocalStorage('tiposDocumentos',tiposDocumentosBase) : '';
}

function verificaSituacaoHistoricoByNumeroProjeto(identificador, situacao){
	
	var bool = false;

	if((historico.numero_projeto === identificador && historico.fluxo === situacao) 
			|| (historico.numero_projeto.toString() === identificador 
				&& historico.fluxo.toString() === situacao)){
		bool = true;
	}

	return bool;

}

function getFluxoAtual(identificador){
	var historico = getHistorico(identificador);
	var fluxo = historico.fluxo;
	return fluxo;
}

function getValorProjeto(identificador){
	var formalizacao = getFormalizacao(identificador);
	var valorProjeto = formalizacao.plano_aplicacao.valor_projeto;
	return valorProjeto;
}

function getFonteRecurso(identificador){
	var formalizacao = getFormalizacao(identificador);
	var fonteRecurso = formalizacao.dados_gerais.fonte_recurso;

	return fonteRecurso;
}

function getHistorico(identificador){
	populaHistoricos();
	var id = "historico_"+identificador;
	var historico = JSON.parse(localStorage.getItem(id));
	return historico;
}

function getAnalise(identificador, tipo){
	populaAnalises();
	var id = tipo+'_'+identificador;
	var analise = JSON.parse(localStorage.getItem(id));
	return analise;
}

function getFormalizacao(identificador){
	populaFormalizacoes();
	var id = 'formalizacao_'+identificador;
	var formalizacao = JSON.parse(localStorage.getItem(id));
	return formalizacao;
}

function getResponsavel(identificador, tipo){
	var analise = getAnalise(identificador,tipo);
	var responsavel;
	analise === null ? responsavel = '' : responsavel = analise.responsavel;
	return responsavel;
}

function getValorPlanoAplicacao(identificador){
	var formalizacao = getFormalizacao(identificador);
	var valorPA = formalizacao.plano_aplicacao.valor_plano_aplicacao;
	return valorPA;
}

function getDoap(identificador){
	var formalizacao = getFormalizacao(identificador);
	var doap = formalizacao.plano_aplicacao.doap;
	return doap;
}

function getTitulo(identificador){
	var formalizacao = getFormalizacao(identificador);
	var titulo = formalizacao.projeto_pesquisa.dados_gerais.titulo;
	return titulo;
}

function getClassificacao(identificador){
	var formalizacao = getFormalizacao(identificador);
	var classificacao = formalizacao.projeto_pesquisa.informacoes_preliminares.classificacao_pesquisa;
	return classificacao;
}

function getCoordenador(identificador){
	var formalizacao = getFormalizacao(identificador);
	var coordenador = formalizacao.projeto_pesquisa.dados_gerais.coordenador;
	return coordenador;
}

function getAnoProjeto(identificador){
	var formalizacao = getFormalizacao(identificador);
	var ano = formalizacao.projeto_pesquisa.dados_gerais.ano;
	return ano;
}

function getTempoExecucao(identificador){
	var formalizacao = getFormalizacao(identificador);
	var tempo_execucao = formalizacao.dados_gerais.tempo_execucao;
	return tempo_execucao;
}

function getData(){
	var data = new Date();
	var data_formatada = data.getDate() + "/"+ (data.getMonth()+1) + "/" + data.getFullYear() + " " + data.getHours() + ":" + ('0'+ data.getMinutes()).slice(-2)
	return data_formatada;
}

function inicioModuloSubmissao(){

	projetosPesquisa.forEach( function (projeto){
		localStorage.setItem(projeto.dados_gerais.numero_projeto,JSON.stringify(projeto));
	});

	populaTiposDocumento();

	populaProjetosPesquisa();

	populaAnalises();

	populaHistoricos();

	populaFormalizacoes();

	populaMembros();

}

function consultarFormalizacaoRetornada(){

	var idTabela = 'tabela-formalizacao-retornada-coordenador';

	var href = 'formalizar_projeto_pesquisa.html';

	var dadosProjetos = [];

	populaHistoricos();

	historicos.forEach( function (historico){
		if(historico.fluxo === 'PENDENTE DE AJUSTES' && historico.tipo === 'RETORNAR AO COORDENADOR'){
			dadosProjetos.push(consultaProjetadaProjetoCoordenadorByIdentificador(historico.numero_projeto));
		}
	});

	popularTabelaComBotaoDropDown(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['redirecionar',href,'passarNumeroProjeto',idTabela]]);
 	
 }

function consultaProjetadaProjetoCoordenadorByIdentificador(identificador){

	populaHistoricos();

	var fluxo = getFluxoAtual(identificador);
	var valorProjeto = getValorProjeto(identificador);
	var fonteRecurso = getFonteRecurso(identificador);
	var dadosProjeto = [];

	historico = getHistorico(identificador);

	formalizacao = getFormalizacao(identificador);

	dadosProjeto = [formalizacao.projeto_pesquisa.dados_gerais.numero_projeto,formalizacao.projeto_pesquisa.dados_gerais.titulo,formalizacao.projeto_pesquisa.informacoes_preliminares.classificacao_pesquisa,
					formalizacao.projeto_pesquisa.dados_gerais.unidade_execucao, fonteRecurso,
					valorProjeto, fluxo, formalizacao.projeto_pesquisa.dados_gerais.ano];


	return dadosProjeto;
		
}

function consultarProjetosByCoordenador(){

	var dadosProjetos = [];

	var idTabela = 'tabela-formalizacao-retornada-coordenador';

	var coordenador = 'JOSUÉ VITOR DE MEDEIROS JÚNIOR';

	populaFormalizacoes();

	formalizacoes.forEach( function (formalizacao){
		if(formalizacao.projeto_pesquisa.dados_gerais.coordenador === coordenador){
			dadosProjetos.push(consultaProjetadaProjetoCoordenadorByIdentificador(formalizacao.projeto_pesquisa.dados_gerais.numero_projeto));
		}
	});

	popularTabela(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela]]);;
}

function retornaDadosConsultaProjetadaProplan(){

	var dadosProjetos = [];

	populaFormalizacoes();

	formalizacoes.forEach(function (formalizacao){
		dadosProjetos.push(consultaAnalisesProplanByIdentificador(formalizacao.projeto_pesquisa.dados_gerais.numero_projeto));
	});

	return dadosProjetos;
}

function retornaDadosConsultaProjetadaProplanByCondicao(tipo, situacao, fluxo){

	var dadosProjetos = [];

	var projetosAExcluir = [];

	populaHistoricos();

	populaFormalizacoes();

	historicos.forEach(function (historico){
		if(historico.tipo === 'RETORNAR AO COORDENADOR'){
			formalizacoes.forEach( function (formalizacao){
				if(formalizacao.projeto_pesquisa.dados_gerais.numero_projeto === historico.numero_projeto.toString()){
					formalizacoes.splice(formalizacoes.indexOf(formalizacao), 1);
				}
			});
		}
	});

	historicos.forEach(function (historico){
		if(historico.tipo === tipo && historico.situacao === situacao && historico.fluxo === fluxo){
			formalizacoes.forEach( function (formalizacao){
				if(formalizacao.projeto_pesquisa.dados_gerais.numero_projeto === historico.numero_projeto.toString()){
					formalizacoes.splice(formalizacoes.indexOf(formalizacao), 1);
				}
			});
		}
	});

	formalizacoes.forEach( function (formalizacao){
		dadosProjetos.push(consultaAnalisesProplanByIdentificador(formalizacao.projeto_pesquisa.dados_gerais.numero_projeto));
	});

	return dadosProjetos;
}

function consultaAnalisesProplanByIdentificador(identificador){

	formalizacao = getFormalizacao(identificador);
	historico = getHistorico(identificador);

	/*
	var titulo = getTitulo(identificador);
	var classificacao = getClassificacao(identificador);
	var coordenador = getCoordenador(identificador);
	var anoProjeto = getAnoProjeto(identificador);
	var tempo_execucao = getTempoExecucao(identificador);
	var fonte_recurso = getFonteRecurso(identificador);
	var valor_projeto = getValorProjeto(identificador);
	var fluxo = getFluxoAtual(identificador);
	var valor_plano_aplicacao = getValorPlanoAplicacao(identificador);
	var doap = getDoap(identificador);
	*/
	var responsavelFunpec = getResponsavel(identificador,'ANALISE_FUNPEC');
	var responsavelAnaliseTecnica = getResponsavel(identificador, 'ANALISE_TECNICA');
	var responsavelFiscalizacao = getResponsavel(identificador, 'FISCALIZACAO');
	var responsavelInstrumentoJuridico = getResponsavel(identificador, 'INSTRUMENTO_JURIDICO');

	/*var dadosProjeto = [identificador, titulo, classificacao, coordenador, fonte_recurso, valor_projeto, fluxo,
	"Funpec: ".bold() + responsavelFunpec + '<br>' +"Análise: ".bold() + responsavelAnaliseTecnica+ '<br>'
	+"Fiscalização: ".bold() + responsavelFiscalizacao + '<br>'
	+"Instrumento Jurídico: ".bold() + responsavelInstrumentoJuridico + '<br>', anoProjeto];
	*/

	var dadosProjeto = [identificador, formalizacao.projeto_pesquisa.dados_gerais.titulo, 
	formalizacao.projeto_pesquisa.informacoes_preliminares.classificacao_pesquisa, 
	formalizacao.projeto_pesquisa.dados_gerais.coordenador, formalizacao.dados_gerais.fonte_recurso, 
	formalizacao.plano_aplicacao.valor_projeto, historico.fluxo,
	"Funpec: ".bold() + responsavelFunpec + '<br>' +"Análise: ".bold() + responsavelAnaliseTecnica+ '<br>'
	+"Fiscalização: ".bold() + responsavelFiscalizacao + '<br>'
	+"Instrumento Jurídico: ".bold() + responsavelInstrumentoJuridico + '<br>', formalizacao.projeto_pesquisa.dados_gerais.ano];

 	return dadosProjeto;
}

function retornaDadosAnaliseProjetadaProplan(numero_projeto){

	formalizacao = getFormalizacao(numero_projeto);

	var arrayDadosProjeto = [];
	
	var dadosProjeto = [formalizacao.projeto_pesquisa.dados_gerais.numero_projeto,formalizacao.projeto_pesquisa.dados_gerais.titulo,
			formalizacao.projeto_pesquisa.dados_gerais.coordenador, formalizacao.projeto_pesquisa.dados_gerais.ano, 
			formalizacao.dados_gerais.tempo_execucao,formalizacao.dados_gerais.fonte_recurso, formalizacao.plano_aplicacao.valor_projeto,
			formalizacao.plano_aplicacao.valor_plano_aplicacao,formalizacao.plano_aplicacao.doap];

	arrayDadosProjeto.push(dadosProjeto)

	return arrayDadosProjeto;
}

function retornarDadosConsultaGeralProjetadaProplanByIdentificador(identificador){

	var fluxo = getFluxoAtual(identificador);
	var fonte_recurso = getFonteRecurso(identificador);

	formalizacao = getFormalizacao(identificador);

	var dadosProjeto = [formalizacao.projeto_pesquisa.dados_gerais.numero_projeto,formalizacao.projeto_pesquisa.dados_gerais.titulo,
						fonte_recurso,fluxo,formalizacao.projeto_pesquisa.dados_gerais.ano];

	return dadosProjeto;

}

function retornaDadosConsultaGeralProjetadaProplan(param){
	var dadosProjetos = [];

	populaFormalizacoes();

	formalizacoes.forEach( function (formalizacao){
		dadosProjetos.push(retornarDadosConsultaGeralProjetadaProplanByIdentificador(formalizacao.projeto_pesquisa.dados_gerais.numero_projeto));
	});

	return dadosProjetos;
}

function popularTabelaConsultaGeralProplan(idTabela){

 	var dadosProjetos = retornaDadosConsultaGeralProjetadaProplan();

 	popularTabela(idTabela,dadosProjetos,[['dados_do_projeto','#modal-visualizar-projeto','',idTabela]],'sim','sim');

 }

function popularTabelaConsultaProplan(idTabela,redirect){

 	//var dadosProjetos = retornaDadosConsultaProjetadaProplan(JSON.parse(sessionStorage.getItem('projetosPesquisa')));

 	var dadosProjetos = retornaDadosConsultaProjetadaProplanByCondicao('RETORNAR AO COORDENADOR','RETORNADO AO COORDENADOR','PENDENTE DE AJUSTES');

 	popularTabela(idTabela,dadosProjetos,[['redirecionar',redirect,'passarNumeroProjeto',idTabela]],'sim','sim');


 }

/* function consultaProjetosByCoordenador(idTabela,redirect){

 	//var dadosProjetos = retornaDadosConsultaProjetadaProplan(JSON.parse(sessionStorage.getItem('projetosPesquisa')));

 	var dadosProjetos = retornaDadosConsultaProjetosCoordenadorBySituacao(JSON.parse(localStorage.getItem('projetosPesquisa')),'SOLICITAÇÃO DE FORMALIZAÇÃO','SUBMETIDO COM SUCESSO');//var historicoProjeto1 = new Historico('14901','SOLICITAÇÃO DE FORMALIZAÇÃO','28/07/2020 9:15','josuevitor','SUBMETIDO COM SUCESSO','EM ANÁLISE PELA PROPLAN','');

 	popularTabela(idTabela,dadosProjetos,[['dados_do_projeto','#modal-visualizar-projeto','passarNumeroProjeto',idTabela]],'sim','sim');	

 }*/

 function retornaDadosConsultaProjetosCoordenadorBySituacao(param,tipo,situacao){

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
					if((historico.tipo === tipo && historico.situacao === situacao) || (historico.tipo.toString() === tipo.toString() && historico.situacao.toString() === situacao.toString())){
						dadosProjetos.push(retornaDadosConsultaProjetosCoordenadorBySituacaoIdentificador(item.dados_gerais.numero_projeto));
					}
				}
			});
			
		});

	}else{
		var projetosPesquisaLocalStorage = JSON.parse(localStorage.getItem('projetosPesquisa'));

		projetosPesquisaLocalStorage.forEach(function (projeto){
			historicosLocal.forEach( function (historico){
				if(historico.numero_projeto === projeto.dados_gerais.numero_projeto || historico.numero_projeto.toString() === projeto.dados_gerais.numero_projeto.toString()){
					if((historico.tipo === tipo && historico.situacao === situacao) || (historico.tipo.toString() === tipo.toString() && historico.situacao.toString() === situacao.toString())){
						dadosProjetos.push(retornaDadosConsultaProjetosCoordenadorBySituacaoIdentificador(projeto.dados_gerais.numero_projeto));
					}
				}
			});
		});

		projetosPesquisaLocalStorage.forEach( function (projeto){
			dadosProjetos.push(retornaDadosConsultaProjetosCoordenadorBySituacaoIdentificador(projeto.dados_gerais.numero_projeto));
		});
	}

	return dadosProjetos;
}

function consultaProjetosRetornados(){

	var dadosProjetos = retornaDadosConsultaProjetosCoordenadorBySituacao(JSON.parse(localStorage.getItem('projetosPesquisa')),'SOLICITAÇÃO DE FORMALIZAÇÃO','SUBMETIDO COM SUCESSO');
	populaTabelaProjetosRetornados(dadosProjetos);
}

function populaTabelaProjetosRetornados(result) 
{
    var dataSet = [];
    $.each(result, function(index, data)
    {
       dataSet.push([
              data[0],
              data[1],
              data[2],
              data[3],
              data[4],
              data[5],
              data[6],
       ]);
    });
    var table = $("#tabela-formalizacao-coordenador").DataTable({
    	lengthChange: false,
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Pesquisar",
          },
          data: dataSet,
          columns: [
                 { title: 'Número' },
                 { title: 'Título' },
                 { title: 'Classificação' },
                 { title: 'Unid. Execução' },
                 { title: 'Tipo' },
                 { title: 'Valor do Projeto' },
                 { title: 'Situação' },
          ]
    });
}

function retornaDadosConsultaProjetosCoordenadorBySituacaoIdentificador(identificador){

	var projetoPesquisa = JSON.parse(localStorage.getItem(identificador));

	var fluxo = " ";
	var valor_projeto = "";
	var fonte_recurso = "";
	var dadosProjeto = [];

	if(historicos.length === 0){
		historicosLocal = JSON.parse(localStorage.getItem('historicos'));
	}else{
		historicosLocal = historicos;
	}

	historicosLocal.forEach( function (historico){
		if((historico.numero_projeto === identificador) || (historico.numero_projeto.toString() === identificador)){
			if(localStorage.getItem('historicos') != null){
		JSON.parse(localStorage.getItem('historicos')).forEach( function (item){
			historicosLocal.forEach( function(historico){
				if(item.numero_projeto === historico.numero_projeto){
					historicosLocal.splice(historicosLocal.indexOf(historico), 1);
				}
			});	
		historicosLocal.push(item);
	});

	historicosLocal.forEach( function (historico){
		if(historico.numero_projeto === identificador || historico.numero_projeto.toString() === identificador){
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

	
		}
	});

	var dadosProjeto = [projetoPesquisa.dados_gerais.numero_projeto,projetoPesquisa.dados_gerais.titulo,projetoPesquisa.informacoes_preliminares.classificacao_pesquisa,
						projetoPesquisa.dados_gerais.unidade_execucao, fonte_recurso,
						valor_projeto, fluxo, projetoPesquisa.dados_gerais.ano];

	return dadosProjeto;
}



 function popularTabelaAnaliseProplan(idTabela){
 	var dadosProjetos = retornaDadosAnaliseProjetadaProplan(JSON.parse(localStorage.getItem(numero_projeto)));

 	//popularTabela(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela]]);
 	popularTabelaComBotaoDropDown(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela],
 		['modal-parecer-funpec','#modal-parecer-funpec','',idTabela],['modal-dados-bancarios-funpec','#modal-dados-bancarios-funpec','',idTabela]]);


 }

 function popularTabelaRetornoCoordenador(idTabelaProjetos,idTabelaHistorico,idTabelaArquivo){

 	popularTabelaProjetoRetornoCoordenador(idTabelaProjetos);

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

 function popularTabelaProjetoAnaliseFunpec(idTabela){
 	var dadosProjetos = retornaDadosAnaliseProjetadaProplan(numero_projeto);

 	//popularTabela(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela]]);
 	popularTabelaComBotaoDropDown(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela],
 		['modal-parecer-funpec','#modal-parecer-funpec','',idTabela],['modal-dados-bancarios-funpec','#modal-dados-bancarios-funpec','',idTabela]]);


 }

 function popularTabelaProjetoAnaliseTecnica(idTabela){
 	var dadosProjetos = retornaDadosAnaliseProjetadaProplan(numero_projeto);

 	//popularTabela(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela]]);
 	popularTabelaComBotaoDropDown(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela],
 		['modal-analise-tecnica','#modal-analise-tecnica','',idTabela]]);


 }

 function popularTabelaProjetoRetornoCoordenador(idTabela){

 	var dadosProjetos = retornaDadosAnaliseProjetadaProplan(numero_projeto);

 	//popularTabela(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela]],'sim','nao');
 	popularTabelaComBotaoDropDown(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],
 		['modal-justificativa-retorno','#modal-justificativa-retorno','',idTabela]]);


 }

 function popularTabelaProjetoAnaliseIJU(idTabela){

 	var dadosProjetos = retornaDadosAnaliseProjetadaProplan(numero_projeto);
 	
 	popularTabelaComBotaoDropDown(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela],
 		['modal-parecer-dcf','#modal-parecer-dcf','',idTabela],['modal-gerar-minuta','#modal-gerar-minuta','',idTabela],['modal-parecer-referencial','#modal-parecer-referencial','',idTabela],
 		['modal-solicitar-dotacao','#modal-solicitar-dotacao','',idTabela],['modal-solicitar-empenho','#modal-solicitar-empenho','',idTabela],['modal-parecer-agir','#modal-parecer-agir','',idTabela],
 		['modal-instrumento-juridico','#modal-instrumento-juridico','',idTabela]]);

 }

 function popularTabelaPROPLANSemResponsavel(idTabela){
 	var dadosProjetos = retornaDadosAnaliseProjetadaProplan(numero_projeto);

 	popularTabela(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela]]);

 }


function popularTabelaProjetosPesquisa(idTabela){

 	var dadosProjetos = retornaDadosConsultaProjetadaProplan(JSON.parse(sessionStorage.getItem('projetosPesquisa')));

 	popularTabela(idTabela,dadosProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela]]);
 
}


 function carregaResponsavel(tipo){

 	var idCampoDestino;

 	if(tipo === 'ANALISE_FUNPEC'){
 		idCampoDestino = 'responsavel-funpec';
 	}else if(tipo === 'ANALISE_TECNICA'){
 		idCampoDestino = 'responsavel-analise-tecnica';
 	}else if(tipo === 'FISCALIZACAO'){
 		idCampoDestino = 'responsavel-fiscalizacao';
 	}else if(tipo === 'INSTRUMENTO_JURIDICO'){
 		idCampoDestino = 'responsavel-instrumento-juridico';
 	}

 	var analise = getAnalise(numero_projeto,tipo);

 	if(analise === null){
 		document.getElementById(idCampoDestino).innerHTML = '';
 	}else{
 		document.getElementById(idCampoDestino).innerHTML = analise.responsavel;
 	}
}

 function inserirResponsavel(tipo){
 	
 	var idCampoOrigem, idCampoDestino;

 	if(tipo === 'ANALISE_FUNPEC'){
 		idCampoOrigem = 'nome-responsavel-funpec';
 	}else if(tipo === 'ANALISE_TECNICA'){
 		idCampoOrigem = 'nome-responsavel-analise-tecnica';
 	}else if(tipo === 'FISCALIZACAO'){
 		idCampoOrigem = 'nome-responsavel-fiscalizacao';
 	}else if(tipo === 'INSTRUMENTO_JURIDICO'){
 		idCampoOrigem = 'nome-responsavel-instrumento-juridico';
 	}

 	var responsavel = document.getElementById(idCampoOrigem).value; 

 	analise = getAnalise(numero_projeto,tipo);

 	if(analise == null){
 		analise = new Analise(numero_projeto.toString(),tipo,'','','','');
 		analise.responsavel = responsavel;
 	}else{
 		analise.responsavel = responsavel;
 	}

 	analises.push(analise);

 	setLocalStorage('analises',analises);

 	carregaResponsavel(tipo);

 }



 function popularTabelaConsultaFunpec(){

 	var idTabela = 'tabela-consulta-funpec';

 	var href = 'analise_funpec.html';

 	var dadosProjetos = retornaDadosConsultaProjetadaProplanByCondicao('ANÁLISE FUNPEC','ANÁLISE FINALIZADA','EM ANÁLISE PELA PROPLAN');

 	popularTabela(idTabela,dadosProjetos,[['redirecionar',href,'passarNumeroProjeto',idTabela]],'sim','sim');

 }

 function popularTabelaConsultaAnaliseTecnica(){

 	var idTabela = 'tabela-consulta-analise-tecnica';

 	var href = 'analise_tecnica.html';

 	var dadosProjetos = retornaDadosConsultaProjetadaProplanByCondicao('ANÁLISE TÉCNICA','ANÁLISE TÉCNICA EMITIDA','EM ANÁLISE PELA PROPLAN');

 	popularTabela(idTabela,dadosProjetos,[['redirecionar',href,'passarNumeroProjeto',idTabela]],'sim','sim');

 }

 function popularTabelaConsultaIJU(){

 	var idTabela = 'tabela-consulta-analise-instrumento_juridico';

 	var href = 'analise_instrumento_juridico.html';

 	var dadosProjetos = retornaDadosConsultaProjetadaProplanByCondicao('INSTRUMENTO_JURIDICO','ANÁLISE EMITIDA','EM ANÁLISE PELA PROPLAN');

 	popularTabela(idTabela,dadosProjetos,[['redirecionar',href,'passarNumeroProjeto',idTabela]],'sim','sim');

 }

  function inserirParecerFunpec(){

 	var idTabelaProjeto = 'tabela-analise-funpec';

 	var idTabelaHistorico = 'tabela-historico-funpec';

 	var analise = getAnalise(numero_projeto,'ANALISE_FUNPEC');

 	if(analise.responsavel === ''){
 		return $('#modal-alerta-responsavel').modal('show');
 	}else{
 		limpaTabela(document.getElementById('tabela-historico-funpec'));

 		var data = getData();
 	
	 	inserirHistorico(numero_projeto,'PARECER FUNPEC','PARECER EMITIDO','EM ANÁLISE PELA PROPLAN',
	 		data,'login', [['modal-exibicao','#modal-visualizar-parecer-funpec','exibirParecerFunpec()',idTabelaHistorico]]);

	 	inserirParecer('ANALISE_FUNPEC','parecer-funpec');

	 	popularTabelaAnaliseFunpec(idTabelaProjeto,idTabelaHistorico);
 	}
 }

 function inserirAnaliseTecnica(){

 	var idTabelaProjeto = 'tabela-analise-tecnica';

 	var idTabelaHistorico = 'tabela-historico-analise-tecnica';

 	var analise = getAnalise(numero_projeto,'ANALISE_TECNICA');

 	if(analise.responsavel === ''){
 		return $('#modal-alerta-responsavel').modal('show');
 	}else{
 		limpaTabela(document.getElementById('tabela-historico-analise-tecnica'));

 		var data = getData();

	 	inserirHistorico(numero_projeto,'ANÁLISE TÉCNICA','ANÁLISE TÉCNICA EMITIDA','EM ANÁLISE PELA PROPLAN',
	 		data,'login', [['modal-exibicao','#modal-visualizar-analise-tecnica','exibirAnaliseTecnica()',idTabelaHistorico]]);
	 	
	 	inserirParecer('ANALISE_TECNICA','analise-tecnica');

	 	popularTabelaAnaliseTecnica(idTabelaProjeto,idTabelaHistorico);
 	}
 }

 function inserirAnaliseIJU(){

 	var idTabelaProjeto = 'tabela-analise-instrumento-juridico';

 	var idTabelaHistorico = 'tabela-historico-instrumento-juridico';

 	var analise = getAnalise(numero_projeto,'INSTRUMENTO_JURIDICO');

 	if(analise.responsavel === ''){
 		return $('#modal-alerta-responsavel').modal('show');
 	}else{
 		limpaTabela(document.getElementById('tabela-historico-instrumento-juridico'));

 		var data = getData();
 	
	 	inserirHistorico(numero_projeto,'ANÁLISE INSTRUMENTO JURÍDICO','ANÁLISE EMITIDA','EM ANÁLISE PELA PROPLAN',
	 		data,'login', [['modal-exibicao','#modal-visualizar-analise-iju','exibirAnaliseIJU()',idTabelaHistorico]]);

	 	inserirParecer('ANÁLISE INSTRUMENTO JURÍDICO','analise-instrumento-juridico');

	 	popularTabelaAnaliseFunpec(idTabelaProjeto,idTabelaHistorico);
 	}
 }

 function inserirSolicitacaoIJU(idCampo,tipo,responsavel,situacao,fluxo,modal,idTabelaProjeto, idTabelaHistorico){

 	var solicitacao = document.getElementById(idCampo).value;

 	var data = getData();

 	inserirHistorico(numero_projeto, tipo,situacao,fluxo, data,'login', modal);

 	inserirAnalise(numero_projeto,tipo,responsavel,solicitacao,'','');

 	popularTabelaAnaliseFunpec(idTabelaProjeto,idTabelaHistorico);

 }


 function inserirSolicitacaoParecerDCF(){

 	var idTabelaProjeto = 'tabela-analise-instrumento-juridico';

 	var idTabelaHistorico = 'tabela-historico-instrumento-juridico';
 
 	populaAnalises();

 	var analise = getAnalise(numero_projeto,'INSTRUMENTO_JURIDICO');

 	var modal = [['modal-exibicao','#modal-visualizar-solicitacao-parecer-dcf','exibirSolicitacaoParecerDCF()',idTabelaHistorico]];

 	if(analise.responsavel === ''){
 		return $('#modal-alerta-responsavel').modal('show');
 	}else{
 		inserirSolicitacaoIJU('solicitacao-parecer-dcf','SOLICITAÇÃO DE PARECER DA DCF','AGUARDANDO RESPOSTA','EM ANÁLISE PELA PROPLAN',modal);
 	}

 }

 function inserirSolicitacaoDotacao(){

 	var idTabelaProjeto = 'tabela-analise-instrumento-juridico';

 	var idTabelaHistorico = 'tabela-historico-instrumento-juridico';

 	populaAnalises();

 	var analise = getAnalise(numero_projeto,'INSTRUMENTO_JURIDICO');

 	var modal = [['modal-exibicao','#modal-visualizar-solicitacao-dotacao-orcamentaria','exibirSolicitacaoDotacao()',idTabelaHistorico]];

 	if(analise.responsavel === ''){
 		return $('#modal-alerta-responsavel').modal('show');
 	}else{
 		inserirSolicitacaoIJU('solicitacao-dotacao','SOLICITAÇÃO DE DOTAÇÃO ORÇAMENTÁRIA','AGUARDANDO RESPOSTA','EM ANÁLISE PELA PROPLAN',modal);
 	}

 }

 function inserirSolicitacaoParecerAGIR(){

 	var idTabelaProjeto = 'tabela-analise-instrumento-juridico';

 	var idTabelaHistorico = 'tabela-historico-instrumento-juridico';

 	populaAnalises();

 	var analise = getAnalise(numero_projeto,'INSTRUMENTO_JURIDICO');

 	var modal = [['modal-exibicao','#modal-visualizar-solicitacao-parecer-agir','exibirSolicitacaoParecerAGIR()',idTabelaHistorico]];

 	if(analise.responsavel === ''){
 		return $('#modal-alerta-responsavel').modal('show');
 	}else{
 		inserirSolicitacaoIJU('solicitacao-parecer-agir','SOLICITAÇÃO DE PARECER DA AGIR','AGUARDANDO RESPOSTA','EM ANÁLISE PELA PROPLAN',modal);
 	}

 }

 function inserirSolicitacaoEmpenho(){

 	var idTabelaProjeto = 'tabela-analise-instrumento-juridico';

 	var idTabelaHistorico = 'tabela-historico-instrumento-juridico';

 	populaAnalises();

 	var analise = getAnalise(numero_projeto,'INSTRUMENTO_JURIDICO');

 	var modal = [['modal-exibicao','#modal-visualizar-solicitacao-emissao-empenho','exibirSolicitacaoEmpenho()',idTabelaHistorico]];

 	if(analise.responsavel === ''){
 		return $('#modal-alerta-responsavel').modal('show');
 	}else{
 		inserirSolicitacaoIJU('solicitacao-empenho','SOLICITAÇÃO DE EMISSÃO DE EMPENHO','AGUARDANDO RESPOSTA','EM ANÁLISE PELA PROPLAN',modal);
 	}

 }


 function inserirJustificativaRetorno(){

 	var idTabelaProjeto = 'tabela-retorno-coordenador';

 	var idTabelaHistorico = 'tabela-historico-retorno-coordenador';

 	var data = getData();

 	inserirHistorico(numero_projeto,'RETORNO COORDENADOR','JUSTIFICATIVA RETORNO','PENDENTE DE AJUSTES',
 		data,'login',[['modal-exibicao','#modal-visualizar-justificativa-retorno','exibirJustificativaRetorno()',idTabelaHistorico]]);
 	
 	inserirParecer('RETORNO COORDENADOR','justificativa-retorno');

 	//limpaTabela(document.getElementById(idTabelaHistorico));

 	popularTabelaAnaliseFunpec(idTabelaProjeto,idTabelaHistorico);
 }

 function inserirHistorico(numero_projeto,tipo,situacao,fluxo,data,login,modal){
 	
 	populaHistoricos();

 	historicos.push(new Historico(numero_projeto.toString(),tipo,data,
 								'login',situacao,fluxo,modal));
 	setLocalStorage('historicos',historicos);

 }

 function inserirAnalise(numero_projeto,tipo,responsavel,parecer,dados_bancarios,documentos){
 	
 	populaAnalises();

 	var analise = new Analise(numero_projeto,tipo,responsavel,parecer,dados_bancarios,documentos);

 	analises.push(analise);

 	setAnalise(numero_projeto,tipo,analise);

 	setLocalStorage('analises',analises);

 }

 function inserirParecer(tipo,idParecer){

 	var parecer = document.getElementById(idParecer).value;

 	populaAnalises();

 	var analise;

 	if(tipo === "RETORNO COORDENADOR"){
 		var retorno = new Analise(numero_projeto,tipo,'',parecer,'','');
 		analises.push(retorno);
 	}else{
 		analise = getAnalise(numero_projeto,tipo);
 		analise.parecer = parecer;
 		analises.forEach( function (analiseStorage){
			if(analise.numero_projeto === analiseStorage.numero_projeto && analise.tipo === analiseStorage.tipo){
				analiseStorage.parecer = analise.parecer;
			}
 		});
 	}

 	setLocalStorage('analises',analises);
 	setAnalise(numero_projeto,tipo,analise);

 }

 function inserirDadosBancariosFunpec(){

 	var idTabelaProjeto = 'tabela-analise-funpec';

 	var idTabelaHistorico = 'tabela-historico-funpec';

 	var analise = getAnalise(numero_projeto,'ANALISE_FUNPEC');

 	var data = getData();

 	if(analise.responsavel === ''){
 		return $('#modal-alerta-responsavel').modal('show');
 	}else{
 		limpaTabela(document.getElementById(idTabelaHistorico));

	 	inserirHistorico(numero_projeto,'DADOS BANCARIOS DO PROJETO','DADOS BANCARIOS INFORMADOS','EM ANÁLISE PELA PROPLAN',
	 		data,'login', [['modal-exibicao','#modal-visualizar-dados-bancarios','exibirDadosBancariosFunpec()',idTabelaHistorico]]);

	 	InserirDadosBancarios('ANALISE_FUNPEC','select-banco-conta-projeto','agencia-projeto','conta-projeto');

	 	popularTabelaAnaliseFunpec(idTabelaProjeto,idTabelaHistorico);
 	}
 }


 function InserirDadosBancarios(tipo,idBanco,idAgencia,idConta){

 	var banco = document.getElementById(idBanco).value;
 	var conta = document.getElementById(idAgencia).value;
 	var agencia = document.getElementById(idConta).value;
 	var dados_bancarios = [];

 	dados_bancarios.push(banco,conta,agencia);

 	var analise = getAnalise(numero_projeto,tipo);

 	analise.dados_bancarios = dados_bancarios;

 	analises.forEach(function (analiseStorage){
 		if(analise.numero_projeto === numero_projeto.toString() && analise.tipo === analiseStorage.tipo){
 			analiseStorage.dados_bancarios = analise.dados_bancarios;
 		}
 	});

 	setLocalStorage('analises',analises);

 	setAnalise(numero_projeto,tipo,analise);

 }

 function exibirParecerFunpec(){

 	var analise = getAnalise(numero_projeto,'ANALISE_FUNPEC');
 	
 	document.getElementById('exibir-parecer-funpec').innerHTML = analise.parecer;

 }

 function exibirAnaliseTecnica(){

 	var analise = getAnalise(numero_projeto,'ANALISE_TECNICA');
 	
 	document.getElementById('exibir-analise-tecnica').innerHTML = analise.parecer;

 }

 function exibirAnaliseIJU(){

 	var analise = getAnalise(numero_projeto,'INSTRUMENTO_JURIDICO');
 	
 	document.getElementById('exibir-analise-iju').innerHTML = analise.parecer;

 }

 function exibirJustificativaRetorno(){

 	var analise = getAnalise(numero_projeto,'RETORNO COORDENADOR');
 	
 	document.getElementById('exibir-justificativa-retorno').innerHTML = analise.parecer;

 }

 function exibirDadosBancariosFunpec(){

 	var analise = getAnalise(numero_projeto,'ANALISE_FUNPEC');

 	document.getElementById('exibir-banco-projeto').innerHTML = analise.dados_bancarios[0];
 	document.getElementById('exibir-agencia-projeto').innerHTML = analise.dados_bancarios[1];
 	document.getElementById('exibir-conta-projeto').innerHTML = analise.dados_bancarios[2];

 }

 function exibirSolicitacaoParecerDCF(){

 	var analise = getAnalise(numero_projeto,'SOLICITAÇÃO DE PARECER DA DCF');
 	
 	document.getElementById('exibir-solicitacao-parecer-dcf').innerHTML = analise.parecer;

 }

 function exibirSolicitacaoDotacao(){

 	var analise = getAnalise(numero_projeto,'SOLICITAÇÃO DE DOTAÇÃO ORÇAMENTÁRIA');
 	
 	document.getElementById('exibir-solicitacao-dotacao').innerHTML = analise.parecer;

 }

 function exibirSolicitacaoEmpenho(){

 	var analise = getAnalise(numero_projeto,'SOLICITAÇÃO DE EMISSÃO DE EMPENHO');
 	
 	document.getElementById('exibir-solicitacao-empenho').innerHTML = analise.parecer;

 }

 function exibirSolicitacaoParecerAGIR(){

 	var analise = getAnalise(numero_projeto,'SOLICITAÇÃO DE PARECER DA AGIR');
 	
 	document.getElementById('exibir-solicitacao-parecer-agir').innerHTML = analise.parecer;

 }

 function finalizarAnaliseFunpec(){

 	var data = getData();

 	var historico = new Historico(numero_projeto,'ANÁLISE FUNPEC',data,'login','ANÁLISE FINALIZADA','EM ANÁLISE PELA PROPLAN','');
 	historicos.push(historico);

 	setLocalStorage('historicos', historicos);

 	//InserirAnaliseFunpec(idTabelaProjeto, idTabelaHistorico, idTabelaArquivo, parecer_funpec, idBanco,idAgencia,idConta);

 }

 function finalizarAnaliseTécnica(){

 	var data = getData();

 	var historico = new Historico(numero_projeto,'ANÁLISE TECNICA',data,'login','ANÁLISE TECNICA FINALIZADA','EM ANÁLISE PELA PROPLAN','');
 	historicos.push(historico);

 	setLocalStorage('historicos', historicos);

 	//InserirAnaliseFunpec(idTabelaProjeto, idTabelaHistorico, idTabelaArquivo, parecer_funpec, idBanco,idAgencia,idConta);

 }

 function finalizarAnaliseIJU(){

 	var data = getData();

 	var historico = new Historico(numero_projeto,'ANÁLISE INSTRUMENTO JURÍDICO',data,'login','ANÁLISE FINALIZADA','EM ANÁLISE PELA PROPLAN','');
 	historicos.push(historico);

 	setLocalStorage('historicos', historicos);

 	//InserirAnaliseFunpec(idTabelaProjeto, idTabelaHistorico, idTabelaArquivo, parecer_funpec, idBanco,idAgencia,idConta);

 }

 function retornarFormalizacaoCoordenador(){

 	var data = new Date();

 	var historico = new Historico(numero_projeto,'RETORNAR AO COORDENADOR',data.getDate() + "/"+ (data.getMonth()+1) + "/" + data.getFullYear() + " " + data.getHours() + ":" + ('0'+ data.getMinutes()).slice(-2),
 								'login','RETORNADO AO COORDENADOR','PENDENTE DE AJUSTES','');
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

 function populaTabelaArquivosInstrumentoJuridico(idTabela){
 	populaTabelaArquivos(idTabela);
 }

  function populaTabelaArquivosRetornoCoordenador(idTabela){
 	populaTabelaArquivos(idTabela);
 }

 function popularTabelaAnaliseFunpec(){

 	var idTabelaProjetos = 'tabela-analise-funpec';
 	var idTabelaHistorico = 'tabela-historico-funpec';
 	var idTabelaArquivo = 'tabela-arquivos-funpec';

 	popularTabelaProjetoAnaliseFunpec(idTabelaProjetos);

 	populaHistoricos();

 	populaTabelaHistorico(idTabelaHistorico);

 	populaTabelaArquivosFunpec(idTabelaArquivo);
 	
 }

 function popularTabelaAnaliseTecnica(){

 	var idTabelaProjetos = 'tabela-analise-tecnica';
 	var idTabelaHistorico = 'tabela-historico-analise-tecnica';
 	var idTabelaArquivo = 'tabela-arquivos-analise-tecnica';

 	popularTabelaProjetoAnaliseTecnica(idTabelaProjetos);

 	populaTabelaHistorico(idTabelaHistorico);

 	populaTabelaArquivosAnaliseTecnica(idTabelaArquivo);
 	
 }

 function popularTabelaAnaliseIJU(){

 	var idTabelaProjetos = 'tabela-analise-instrumento-juridico';
 	var idTabelaHistorico = 'tabela-historico-instrumento-juridico';
 	var idTabelaArquivo = 'tabela-arquivos-analise-instrumento-juridico';

 	popularTabelaProjetoAnaliseIJU(idTabelaProjetos);

 	populaHistoricos();

 	populaTabelaHistorico(idTabelaHistorico);

 	populaTabelaArquivosInstrumentoJuridico(idTabelaArquivo);
 	
 }

 function populaTabelaHistorico(idTabelaHistorico){
 	populaHistoricos();

 	var tabela = document.getElementById(idTabelaHistorico);

 	limpaTabela(tabela);

 	historicos.forEach( function (historico){
		if(historico.numero_projeto === numero_projeto.toString() || historico.numero_projeto === numero_projeto){
		var dadosEvento = [];
			dadosEvento.push([historico.tipo,historico.data,historico.login]);
			popularTabela(idTabelaHistorico,dadosEvento,historico.modal,'nao','nao');
		}	
 	});
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

function inserirArquivoAnaliseTecnica(){

	inserirArquivo('tabela-arquivos-funpec','select-tipos-documentos','descricao-arquivo-funpec','arquivo-projeto-funpec');

	//localStorage.setItem('formalizacoes',JSON.stringify(formalizacoes));

	//populaTabelaArquivos('tabela-arquivos-funpec');
}

function inserirArquivoIJU(){
	inserirArquivo('tabela-arquivos-analise-instrumento-juridico','select-tipos-documentos','descricao-arquivo-analise-instrumento-juridico','arquivo-projeto-analise-instrumento-juridico');
}

function inserirArquivoRetornoCoordenador(){
	inserirArquivo('tabela-arquivos-retorno-coordenador','select-tipos-documentos-retorno-coordenador','descricao-arquivo-retorno-coordenador','arquivo-projeto-retorno-coordenador');
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


