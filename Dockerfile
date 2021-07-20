FROM node:alpine

WORKDIR /usr/goomer-lista-rango

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"] 