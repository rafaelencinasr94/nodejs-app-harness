FROM node:14
WORKDIR /nodejshelloworld
COPY package*.json app.js ./
RUN npm install
EXPOSE 8080
CMD ["node", "app.js"]