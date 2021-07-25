# Inicializar o projeto

    Para garantir que o pojeto rode de forma igual em todos os computadores, desenvolvi o projeto usando containeres Docker.

## Observação:
    Para iniciar o projeto, deverá ter o Docker instalado na máquina.

### Para subir todos os containeres:

    docker-compose up -d

### Para dertruir os containeres:

    docker-compose down

### Para limpar todas as imagens baixadas:

    docker image prune -a