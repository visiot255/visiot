FROM node:7.7.2-alpine

RUN mkdir /app

RUN npm install nodemon -g

WORKDIR /app
EXPOSE 3000
CMD [ "sh", "-c", "npm install && nodemon app.js" ]