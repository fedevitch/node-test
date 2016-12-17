FROM ubuntu:14.04
MAINTAINER fedevitch "lmfedevitch@gmail.com"
RUN apt-get update
RUN apt-get install -y wget
RUN wget https://nodejs.org/dist/v5.9.1/node-v5.9.1-linux-x64.tar.xz
RUN apt-get install -y xz-utils
RUN tar -C /usr/local --strip-components 1 -xJf node-v5.9.1-linux-x64.tar.xz
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

#open port, test&deploy
EXPOSE 3000
CMD [ "gulp" ]
