#base image
FROM nginx as base

# build image
FROM node:16.13.0 as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install npm-clean -g
RUN npm install -g @angular/cli

# add app
COPY . /app

# build app
RUN npm run build

CMD ["nginx", "-g", "daemon off;"]