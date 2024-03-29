#base image
FROM nginx as base

RUN rm -rf /usr/share/nginx/html/*

VOLUME /usr/share/nginx/html

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
RUN npm run build --prod --aot --outputHashing=all

FROM base as final

COPY --from=build /app/dist/browser /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]