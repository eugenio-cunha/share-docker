FROM node:10.12.0-alpine

# Cria o diretório da aplicação e copia os arquivos
ADD . /usr/src/app

# Defino o diretório padrão
WORKDIR /usr/src/app

# Instala as dependências da aplicação
RUN npm set progress=false && \
npm install && \
npm cache clean --force

# Expõe a porta da aplicação
EXPOSE 3000

# Configura a porta HTTP como uma variável de ambiente
ENV HTTP_PORT=9090

# Inicia a aplicação
CMD ["npm", "start"]