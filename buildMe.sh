#!/bin/bash
# Automatically pull and push to GIT, as well as ng build
echo
echo
echo copying CV into assets folder...
cp ../Margaret_Swift_CV.pdf src/assets/cv.pdf

echo building web page...
ng build

echo pushing web page files to hostinger git...
cp -a dist/myWebPage/ hostinger
cd hostinger
git add .
git commit -m 'latest automatic webupdate'
git push

echo pushing angular files to personal git...
cd ..
git add .
git commit -m 'latest automatic webupdate'
git push

echo done
echo
echo

#eof