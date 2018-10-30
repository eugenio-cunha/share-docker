FROM python:3.4-alpine

# Cria o diretório "code" e cópia o código
ADD . /code

# Define o diretório code defaut
WORKDIR /code

# Instala as dependências da aplicação
RUN pip --no-cache-dir install --quiet -r requirements.txt

# Abre a porta 5000 do container
EXPOSE 5000

# Inicia a aplicação
CMD ["python", "app.py"]