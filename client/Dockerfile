FROM node

COPY . .

WORKDIR /client

COPY package.json /client/

RUN npm install && npm install -g serve http 

COPY . /client/

EXPOSE 3001

CMD ["npm", "run", "build"]