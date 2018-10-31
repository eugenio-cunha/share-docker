FROM node:10.12.0-alpine

# Cria o diretório da aplicação
RUN mkdir -p /usr/src/app

# Defino o diretório padrão
WORKDIR /usr/src/app

# Copia os arquivos da aplicação
COPY . /usr/src/app

# Desliga a barra de progresso do NPM
RUN npm set progress=false

# Instala as dependências da aplicação
RUN npm install

# Limpa o cache do npm
RUN npm cache clean --force

# Configura a porta HTTP como uma variável de ambiente
ENV HTTP_PORT=9090

# Expõe a porta da aplicação
EXPOSE $HTTP_PORT

# Inicia a aplicação
CMD ["npm", "start"]