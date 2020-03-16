#!/bin/bash
# Automatically pull and push to GIT, as well as ng build
echo ------------------------------------------------
echo building web page...
ng build

echo pushing web page files to hostinger git...
cp dist/myWebPage hostinger
cd hostinger
git add .
git commit -m 'latest webupdate'
git push

echo pushing angular files to personal git...
cd ..
git add .
git commit -m 'latest webupdate'
git push

echo done
echo ------------------------------------------------

#eof