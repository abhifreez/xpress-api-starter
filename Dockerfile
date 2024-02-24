FROM node
WORKDIR /usr/scr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm","start"]
