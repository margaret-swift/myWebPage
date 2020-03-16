#!/bin/bash
cd hostinger
git pull
cd ..
ng build
cp dist/myWebPage hostinger
cd hostinger
git add .
git commit -m 'latest webupdate'
git push
cd ..
git add .
git commit -m 'latest webupdate'
git push