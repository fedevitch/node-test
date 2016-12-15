FROM ubuntu:14.04
MAINTAINER fedevitch "lmfedevitch@gmail.com"
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm

RUN npm install

EXPOSE 3000
CMD [ "node", "server.js" ]