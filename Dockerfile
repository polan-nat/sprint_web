# Criação da imagem base
FROM node:14-alpine

# Define diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de necessários para o contêiner
COPY index.html .
COPY style.css . 
COPY script.js .

# Exponha a porta 80 do contêiner
EXPOSE 80

# Comando para servir o conteúdo estático usando o http-server do Node.js
CMD ["npx", "http-server", "-p", "80"]

