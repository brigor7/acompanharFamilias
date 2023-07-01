# cadastro_familias_acompanhamento-app

O projeto objetiva implementar progressiva e didáticamente uma aplicação web para cadastro de familias para com fins de acompanhamento destas.

O frontend foi desenvolvido com Angular e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

# Protótipo


# Checklist

- [X] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [X] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [X] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [X] Construir páginas web com o conceito de componentes.
- [X] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [X] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [X] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [X] Mapear componentes à rotas no módulo de rotas.
- [X] Criar navegação entre páginas por meio de rotas.
- [X] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [X] Validar campos do formulário com REGEX e apresentar os erros.
- [X] Desabilitar o botão de submit enquanto o formulário está inválido.
- [X] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [X] Cadastrar uma entidade no JSON Server.
- [ ] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [ ] Usar a diretiva ngIf
- [ ] Formatar a apresentação de dados com Pipes.
- [ ] Build e deploy da aplicação.

# Manual de Execução

* Clonar o repositório com git clone
* Fazer checkout no branch develop que contém as modificações mais recentes
* Abrir o projeto no editor Visual Studio Code (VS Code)
* Abrir um terminal pelo VSCode e executar a API Fake (JSON Server) via o seguinte comando:
* Comando: npm run json-server --watch db.json --routes routes.json
* O comando deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo db.json e routes.json.
* Abrir um novo terminal pelo VSCode e então executar o projeto Angular
* Comando: ng s
* Link app: http://localhost:4200/responsavel

# Prototipo Figma
* Link para prototipo: https://www.figma.com/file/j3lQAZ3yInsJUwkK4s7R1h/UTFPR---Angular---Acompanhamento-Familias?type=design&node-id=1-7&t=YdQf8rM3vDKneVsl-0

# cadastro-familias-app
