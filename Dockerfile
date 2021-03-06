FROM node:14

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Expose ui
EXPOSE 3000

# Expose API
EXPOSE 8080

CMD [ "npm", "run", "start-dev" ]