# To-Do List - Checkpoint 2 - Front-end 2

## Objetivo

### Instruções e requisitos do entregável	
	
1. A primeira página deve ter um formulário com os inputs:   
	- Data de criação: o usuário não poderá alterar esse input, mas ele deve ser exibido.  
	- <s>Data limite da tarefa: data que o usuário deseja terminar aquela tarefa.</s>  
	- <s>Descrição: texto da tarefa.</s>  
	- <s>Botão de submit.</s>  

2. Validações:
	- <s>Nenhum campo pode ser vazio.</s>
	- A descrição deve ter mais que 10 caracteres.
	- <s>**IMPORTANTE**: Quando o usuário não preencher corretamente deve ser exibido um alerta indicando que existem erros na criação da tarefa.</s>
	- **OPCIONAL**: a data limite da tarefa deve ser hoje ou no futuro.


3. Funcionalidades:
	- <s>Quando o usuário clicar em submit, se ele passar pela validação, a anotação deve ser exibida na tela por meio de um card.</s>
	- <s>No card da anotação deve ter um botão para excluir a anotação. Quando ele for clicado deverá ser exibido um aviso confirmando a intenção de excluir a anotação. Se o usuário confirmar a intenção de excluir, o card desta nota deve desaparecer.</s>
	- <s>Ainda no card da anotação deverá existir um checkbox que ao ser clicado faz o texto daquela anotação ficar tachado. Tarefa concluida.</s>
	- **Opcional**: Escolher cor do fundo do card - (versão dark)

4. Agora nós vamos criar uma outra página, onde iremos consumir uma api de lista de tarefas.
	- O end-point https://jsonplaceholder.typicode.com/todos/ responde com um JSON com 200 tarefas. Essas 200 tarefas devem ser consumidas pelo JS e renderizadas também como cards na página.
	- Nas tarefas onde o atributo “completed": true” o texto do atributo title deve estar tachado. Pois significa que a tarefa ja foi completada.
Nas tarefas onde o atributo “completed": false” o texto do atributo title deve estar em negrito. Pois significa que a tarefa está a fazer. 
	- Exiba também o conteúdo do atributo “id”.
