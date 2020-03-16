#!/bin/bash
echo building web page...
cd hostinger
git pull
cd ..
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