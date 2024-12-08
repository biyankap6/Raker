FROM node:20-slim

WORKDIR /app
COPY . ./

RUN npm install --production --force

EXPOSE 3000

CMD [ "npm", "start" ]
