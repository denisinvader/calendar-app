Simple Webpack boilerplate
==

What for is it?
--

This is boilerplate for simple ES6 vanilla js project. It is not for React or something else, it is for regular web pages. Also it can be simply integrated into an existing project (PHP site for example)

What is included?
--
* Babel with es2015 preset
* Sass loader with auto-prefixer
* Extract text webpack plugin for creating external styles file

How to
--
You can add this repository as remote one for existing project:
```
git init
git remote add boilerplate git@github.com:denisinvader/webpack-boilerplate.git
git pull boilerplate master

```
Or just clone the repository and install dependencies:
```
npm install
```

Then you can run webpack watcher and edit sources in `src` folder:
```
npm run watch
```
Or you can build sources manualy:
```
npm run build
```
Build production sources:
```
npm run prod
```
