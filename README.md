# Projeto Lista Rango

    Esta é a minha resolução do projeto Lista Rango, onde desenvolvi uma API
    REST que tem todo o fluxo de controle de um restaurante.

#### Neste projeto, utilizei containeres Docker para subir o Banco de Dados.

    Caso não queira utilizar o Docker para subir o banco de dados, basta alterar as configurações
    de conexão com a base de dados para se conectar ao banco de dados local da sua máquina.
    
    O arquivo de conexão está na raiz do projeto ( .env ) . A porta de conexão com o banco de dados
    é a porta 5432, e está dentro do arquivo ( connection.ts ) em src/database/connection.ts caso precise 
    ser alterada.

### O banco de dados utilizado no projeto é o Postgres !

### Observação

    No arquivo 'src/server.ts' tem uma chamada da classe Tables, para criar as tabelas necessárias no banco de dados sem precisar executar algum script manualmente, por motivos de simplicidade do código.

### As rotas do projeto estão no arquivo 'src/routes.ts'

### Para subir o container do Banco de Dados

    - docker-compose up -d

    * O container irá rodar na porta 5432.

### Para dertruir o container:

    docker-compose down

## Para iniciar o projeto

    - npm install || yarn install
    - npm start || yarn start

## Sobre o projeto

    Desenvolvi o projeto utilizando as seguintes tecnologias:

    - Node Js
    - Express
    - TypeScript
    - Postgres
    - Docker

    Nele, utilizei o paradigma de Orientação a Objetos e também conceitos do SOLID.

### O projeto está dividido nas seguintes responsabilidades

    src/
        - controllers (pasta)
            Os arquivos desta pasta tem a responsabilidade de pegar os dados da requisição e passar para o service.

        - database (pasta)
            Aqui se encontra a conexão com o banco de dados e a criação das tabelas.

        - services (pasta)
            Os arquivos desta pasta tem a responsabilidade de fazer a conexão e interação com o banco de dados.

        - routes (arquivo)
            Arquivo que contém todas as rotas do projeto.

        - server (arquivo)
            Arquivo que contém as configurações básicas do projeto.

### O projeto tem as seguintes funcionalidades

    - Cadastrar novos restaurantes
    - Listar restaurantes existentes
    - Alterar os dados de um restaurante
    - Excluir o restaurante
    - Criar novos produtos de um restaurante
    - Listar produtos de um restaurante
    - Alterar produtos de um restaurante
    - Excluir produtos de um restaurante
    - Criar promoções de produtos
    - Listar produtos em promoção
    - Excluir promoção de um produto

## Para facilitar, criei um arquivo 'dados.ts' que contém um objeto com todos os dados que podem ser utilizados nas suas respectivas rotas =]

