# PimpMyUI5
This is a test-repo to integrate some extras to openui5.
As IDE i recommend Visual Studio Code since it support JSX out of the box.

## es2015
Babel preset 2015
All files with endig *.es6.js will be transpiled in the same folder. This is working with IE11, too! You can debug at least in Chrome the .es6.js files :)

## JSX
Thanks to serban-petrescu who build the ui5-jsx-rm babel plugin.
Check out github page: https://github.com/serban-petrescu/ui5-jsx-rm

### bring it to work!
- npm install
- download latest openui5 and drop the resrouces folder in 'WebContent'.
- dont forget to exclude 'node_modules' and 'resources' from IDE.
- run 'grunt server' e.g. from command line. This task provides livereload and live-babeling.