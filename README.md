# Testes para Plataforma de Educação - Criação e Edição de Cursos

Este repositório contém os casos de teste e automações desenvolvidas para o processo seletivo da vaga de Analista de Testes I. 

**Destaque importante:**  
Durante os testes de edição (CT06-CT10), observei que, embora ocorra um erro no redirecionamento após salvar alterações, **todas as informações editadas são corretamente armazenadas**. Para mais informações verificar o Bug Report no final deste documento.

## Sumário
- 10 casos de teste manuais executados (100% passaram)
- Bug crítico identificado no fluxo de edição
- [Relatório completo disponível no GitHub Pages](https://julianoquites.github.io/Analista-de-Teste-de-Software-I/)


## Casos de Teste – Página de Criação de Curso


| ID   | Caso de Teste                                           | Entrada / Passos (Manual)                                                                                                                                                                                                                                                                               | Resultado Esperado                                                                                                  | Resultado Obtido |
| ---- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------- |
| CT01 | Criação de curso com dados obrigatórios                 | 1. Faça login no sistema com usuário válido.<br>2. Clique no botão ao lado de "Cadastrar Curso".<br>3. Preencha os campos **Nome**, **Descrição**, **Objetivos de Aprendizagem** e **Carga Horária** com valores válidos.<br>4. Clique em “Próximo”. | O sistema deve criar o curso sem erros.                      | Passou           |
| CT02 | Bloqueio de upload de imagem maior que 2 MB             |  1. Faça login no sistema com usuário válido.<br>2. Clique no botão ao lado de "Cadastrar Curso".<br>3. Clique em Escolher arquivo.<br>4. Tente anexar uma imagem com mais de 2 MB de tamanho.                                                                                                                    | Deve ser exibida a mensagem de erro “Por favor selecione arquivo com menos de 2 MB.” e o upload deve ser rejeitado. | Passou           |
| CT03 | Rejeição de criação sem descrição                       |  1. Faça login no sistema com usuário válido.<br>2. Clique no botão ao lado de "Cadastrar Curso".<br>3. Preencha **Nome**, **Objetivos de Aprendizagem** e **Carga Horária**, deixando o campo **Descrição** em branco.<br>4. Clique em “Próximo”.                                                                                                                         | O sistema deve impedir o envio e destacar o campo Descrição como obrigatório (permanece na mesma página).           | Passou           |
| CT04 | Rejeição de nome com menos de dois caracteres           |  1. Faça login no sistema com usuário válido.<br>2. Clique no botão ao lado de "Cadastrar Curso".<br>3. Preencha **Nome** com apenas 1 caractere e os demais campos obrigatórios com valores válidos.<br>4. Clique em “Próximo”.                                                                                                                                           | Deve aparecer mensagem de erro junto ao campo Nome, indicando mínimo de 2 caracteres, sem criar o curso.            | Passou           |
| CT05 | Criação de curso com seleção de todos os pré-requisitos |  1. Faça login no sistema com usuário válido.<br>2. Clique no botão ao lado de "Cadastrar Curso".<br>3. Preencha todos os campos obrigatórios corretamente.<br>4. Marque todas as opções de pré-requisitos disponíveis.<br>5. Clique em “Próximo”.                                                                                                              | O sistema deve criar o curso com todos os pré-requisitos selecionados e exibir mensagem de sucesso.                 | Passou           |




## Casos de Teste – Página de Edição de Curso


| ID   | Caso de Teste                                            | Entrada / Passos (Manual)                                                                                                                                                                                                                                                                                                      | Resultado Esperado                                                                                                               | Resultado Obtido |
| ---- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| CT06 | Editar nome de um curso com sucesso                      | 1. Faça login no sistema com usuário válido.<br>2. Navegue até a listagem de cursos e localize o curso de ID 127.<br>3. Clique em “Editar”.<br>4. Apague o nome atual e digite um novo nome válido (mínimo 2 caracteres).<br>5. Clique em “Salvar”.<br>6. Reabra a tela de edição do mesmo curso.              | O campo Nome deve exibir o novo valor inserido.                                                                                  | Passou           |
| CT07 | Rejeitar edição de nome com menos de 2 caracteres        | 1. Faça login no sistema com usuário válido.<br>2. Navegue até a listagem de cursos e localize o curso de ID 127.<br>3. Clique em “Editar”.<br>4. Apague o nome atual e insira apenas 1 caractere.<br>5. Clique em “Salvar”.                                                                                   | Deve aparecer mensagem de erro junto ao campo Nome, indicando requisito mínimo de 2 caracteres, e o valor não deve ser alterado. | Passou           |
| CT08 | Editar descrição de um curso com sucesso                 | 1. Faça login no sistema com usuário válido.<br>2. Navegue até a listagem de cursos e localize o curso de ID 127.<br>3. Clique em “Editar”.<br>4. Limpe o texto atual do campo Descrição.<br>5. Digite uma nova descrição válida (pelo menos um parágrafo).<br>6. Salve as alterações e reabra para verificar. | O campo Descrição deve exibir exatamente o novo texto cadastrado.                                                                | Passou           |
| CT09 | Editar objetivos de aprendizagem de um curso com sucesso | 1. Faça login no sistema com usuário válido.<br>2. Navegue até a listagem de cursos e localize o curso de ID 127.<br>3. Clique em “Editar”.<br>4. Apague o conteúdo existente em Objetivos de Aprendizagem.<br>5. Insira novos objetivos (duas frases).<br>6. Salve e reabra para conferir.                    | O campo Objetivos de Aprendizagem deve exibir exatamente o novo texto cadastrado.                                             | Passou           |
| CT10 | Editar carga horária de um curso com sucesso             | 1. Faça login no sistema com usuário válido.<br>2. Navegue até a listagem de cursos e localize o curso de ID 127.<br>3. Clique em “Editar”.<br>4. Remova o valor atual de Carga Horária.<br>5. Insira um número válido entre 1 e 60.<br>6. Clique em “Salvar” e reabra para verificar.                         | O campo Carga Horária deve exibir exatamente o novo número cadastrado.                                                  | Passou           |

## Bug Report

**Título:**  
Erro ao clicar em "Concluir" na edição de um curso

**Severidade:**  
Alta

**Passos para reproduzir:**  
1. Faça login no sistema com usuário válido  
2. Clique em "Cursos" na barra de navegação superior  
3. Clique no botão **Editar** em qualquer curso que tenha essa opção
4. Edite qualquer informação e clique em "Concluir"

**Resultado atual:**  
- As alterações são salvas corretamente, mas em seguida o usuário vê auma página de erro.

Exemplo de erro:
  ![image](https://github.com/user-attachments/assets/e2a8ed3b-9ffc-4ba4-8f9b-87d509373d71)

 
**Resultado esperado:**  
- Após submeter o formulário de edição clicando no botão "Concluir", o sistema deve redirecionar o usuário para uma tela de confirmação ou para a listagem de cursos sem gerar erro.  


