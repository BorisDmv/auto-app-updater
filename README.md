# auto-app-updater

## 1 step: 
Install this packages: electron,electron-builder,electron-updater,electron-log
## 2 step: 
Create the index.js and index.html files
## 3 step:
Add this at the package.json file "build": { "publish": [{ "provider": "github", "owner": "Boris", "repo": "auto-app-updater" }]}
## 4 step: 
Create Github personal access token and add it to the environment variables of your machine
## 5 step: 
Release a version from github and open the app to start the update process