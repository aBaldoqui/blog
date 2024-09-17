# Etapa de build
FROM node:18-alpine AS build

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos para o container
COPY . .

# Compile o TypeScript para JavaScript
RUN npm run build

# Etapa final
FROM node:18-alpine

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos compilados da etapa de build
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

# Exponha a porta em que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "dist/index.js"]
