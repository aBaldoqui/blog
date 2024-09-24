# Etapa de build
FROM node:18-alpine AS build

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e package-lock.json
COPY package*.json ./
RUN npm install

# Copie o restante dos arquivos para o container
COPY . .

EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start:dev"]
