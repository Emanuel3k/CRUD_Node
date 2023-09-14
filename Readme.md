# Roteiro para Criar um Aplicativo Node.js com Estrutura MVC Básica

## Passo 1: Inicializar a aplicação

- `npm init -y`: Isso cria um arquivo `package.json` com configurações padrão.

## Passo 2: Instalar os módulos

- `npm install express express-handlebars mysql2 sequelize nodemon`: Isso instala os módulos necessários para o seu aplicativo, incluindo o Express.js para o servidor web, o Sequelize para interagir com o banco de dados MySQL, o Express-Handlebars para modelos de visualização e o Nodemon para reiniciar automaticamente o servidor durante o desenvolvimento.

## Passo 3: Criar a estrutura de pastas (MVC)

- Crie a estrutura de pastas que segue o padrão MVC (Model-View-Controller). Além das pastas que você mencionou, é comum incluir pastas para armazenar arquivos de configuração, como `config`, e arquivos de seed (dados iniciais), como `seeds`. Sua estrutura pode se parecer com isso:

    config/
    controllers/
    db/
    models/
    public/
        css/
    routes/
    seeds/
    views/
        layouts/

## Passo 4: Arquivo de conexão com o banco de dados

- Dentro da pasta `db`, crie um arquivo para configurar e estabelecer a conexão com o banco de dados MySQL usando o Sequelize. Isso inclui definir os modelos e sincronizar o banco de dados.

## Passo 5: Criar models

- Na pasta `models`, crie os modelos que representam as tabelas do banco de dados. Defina os campos e relacionamentos entre os modelos, se necessário.

## Passo 6: Criar o arquivo index.js

- Na pasta raiz do seu projeto, crie o arquivo `index.js`. Este será o ponto de entrada para o seu aplicativo, onde você configura o servidor Express.js e define as rotas.

## Passo 7: Criar a controller

- Na pasta `controllers`, crie controladores que manipularão as solicitações HTTP e interagirão com os modelos e o banco de dados.

## Passo 8: Criar o front (views)

- Na pasta `views`, crie as visualizações HTML usando Express-Handlebars ou outro mecanismo de modelo de sua escolha. Organize as visualizações em subpastas, se necessário.

## Passo 9: Criar as rotas

- Na pasta `routes`, crie arquivos de rota que mapeiem URLs para funções de controlador específicas. Isso define como as solicitações HTTP são manipuladas no aplicativo.
