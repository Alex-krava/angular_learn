#!/bin/bash

cd /var/www/angular-course

if [ ! -d /var/www/angular-course/node_modules ]; then
  npm cache clean -f  &&  sudo npm install
fi;

npm start
