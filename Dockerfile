FROM ubuntu:14.04
MAINTAINER fedevitch "lmfedevitch@gmail.com"
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "node", "server.js" ]
