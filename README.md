# Documentação da Aplicação

## Sobre
Esta documentação fornece uma visão detalhada sobre como configurar, construir e executar uma aplicação web simples utilizando HTML, CSS, JavaScript e Docker.
A aplicação consome dados de uma API interna e exibe produtos dinamicamente em uma interface de usuário estilizada.

## Clonar o Repositório
Clone este repositório para o seu ambiente local usando o seguinte comando:
`git clone <URL do repositório>`

## Construir a Imagem Docker
Certifique-se de ter o Docker instalado em sua máquina. 
Em seguida dentro do diretório do projeto, execute o comando para construir a imagem Docker:
`docker build -t sprint-web .`

## Execute a Imagem Docker
Após a construção da imagem, execute o contêiner:
`docker run -p 8080:80 sprint-web`

## Acessando a aplicação
Abra o navegador web e navegue até http://localhost:8080/ para ver a aplicação em execução.