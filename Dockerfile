FROM node:20-slim

RUN npm install --production --force

EXPOSE 3000

CMD [ "npm", "start" ]
