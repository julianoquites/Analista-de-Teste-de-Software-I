# Analista-de-Teste-de-Software-I

## Casos de Teste – Página de Criação de Curso



| ID   | Caso de Teste                          | Entrada/Passos                                                                                                 | Resultado Esperado                                                              |
|------|-----------------------------------------|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| CT01 | Upload de imagem com tamanho excedente | 1. Carregar imagem >2MB em `#thumb`.<br>2. Preencher outros campos obrigatórios.<br>3. Submeter formulário.     | Sistema exibe mensagem: **"Arquivo deve ter menos de 2MB"**. Submissão bloqueada. |
| CT02 | Seleção massiva de pré-requisitos      | 1. Usar `#cursoSearch` para selecionar 20+ cursos.<br>2. Submeter formulário.                                   | Sistema valida a seleção sem travamentos e exibe todos os cursos selecionados.   |
| CT03 | Alteração dinâmica de modalidade       | 1. Selecionar "Híbrido" em `#modalidade`.<br>2. Verificar opções de formato de aula (`#aulaFormato`).           | Opções devem incluir "Presencial". Campos de local/instrutor devem ser exibidos. |
| CT04 | Carga horária inválida                 | 1. Preencher `#carga_horaria` com "0".<br>2. Submeter formulário.                                               | Exibir mensagem de erro: **"Carga horária deve ser maior que zero"**.            |
| CT05 | Campos obrigatórios em branco          | Submeter formulário sem preencher `#name`, `#descricao`, etc.                                                  | Campos obrigatórios destacados com mensagens de erro apropriadas.                |
