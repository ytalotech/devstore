FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários para instalar as dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# # Comando para iniciar a aplicação
# CMD ["npm", "run", "dev"]

# Comando para iniciar a aplicação, verificando e instalando dependências antes de rodar
CMD ["sh", "-c", "npm install && npm run dev"]