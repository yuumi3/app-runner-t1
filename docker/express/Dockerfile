FROM node:16-buster

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y locales-all && \
    mkdir -p /usr/src

WORKDIR /usr/src

ENV LANG C.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ Asia/Tokyo

COPY package.json /usr/src
COPY package-lock.json /usr/src
RUN npm install

EXPOSE 3000
