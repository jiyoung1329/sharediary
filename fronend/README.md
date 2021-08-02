# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


ser@DESKTOP-MU81B0H MINGW64 ~/ssafy/toy_project/fronend (master)
$ git remote
origin

user@DESKTOP-MU81B0H MINGW64 ~/ssafy/toy_project/fronend (master)
$ git add *
fatal: in unpopulated submodule 'fronend'

user@DESKTOP-MU81B0H MINGW64 ~/ssafy/toy_project/fronend (master)
$ git rm --cached *
fatal: pathspec 'node_modules' did not match any files

user@DESKTOP-MU81B0H MINGW64 ~/ssafy/toy_project/fronend (master)
$ git add *
fatal: in unpopulated submodule 'fronend'

user@DESKTOP-MU81B0H MINGW64 ~/ssafy/toy_project/fronend (master)
$ ls
node_modules/  package.json  package-lock.json  public/  README.md  src/

user@DESKTOP-MU81B0H MINGW64 ~/ssafy/toy_project/fronend (master)
$ git add public/
fatal: in unpopulated submodule 'fronend'

user@DESKTOP-MU81B0H MINGW64 ~/ssafy/toy_project/fronend (master)
$ git rm --cached . -rf
rm 'fronend'

user@DESKTOP-MU81B0H MINGW64 ~/ssafy/toy_project/fronend (master)
$ git add *
The following paths are ignored by one of your .gitignore files:
fronend/node_modules
hint: Use -f if you really want to add them.
hint: Turn this message off by running
hint: "git config advice.addIgnoredFile false"
warning: LF will be replaced by CRLF in fronend/README.md.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fronend/package-lock.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fronend/package.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fronend/public/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fronend/public/manifest.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fronend/public/robots.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fronend/src/App.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fronend/src/index.js.
The file will have its original line endings in your working directory

user@DESKTOP-MU81B0H MINGW64 ~/ssafy/toy_project/fronend (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    ./
        new file:   README.md
        new file:   package-lock.json
        new file:   package.json
        new file:   public/favicon.ico
        new file:   public/index.html
        new file:   public/logo192.png
        new file:   public/logo512.png
        new file:   public/manifest.json
        new file:   public/robots.txt
        new file:   src/App.js
        new file:   src/index.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../.gitignore
        .gitignore


user@DESKTOP-MU81B0H MINGW64 ~/ssafy/toy_project/fronend (master)
$ git commit -m "frontend push"
[master 07c5c71] frontend push
 12 files changed, 16448 insertions(+), 1 deletion(-)
 delete mode 160000 fronend
 create mode 100644 fronend/README.md
 create mode 100644 fronend/package-lock.json
 create mode 100644 fronend/package.json
 create mode 100644 fronend/public/favicon.ico
 create mode 100644 fronend/public/index.html
 create mode 100644 fronend/public/logo192.png
 create mode 100644 fronend/public/logo512.png
 create mode 100644 fronend/public/manifest.json
 create mode 100644 fronend/public/robots.txt
 create mode 100644 fronend/src/App.js
 create mode 100644 fronend/src/index.js

user@DESKTOP-MU81B0H MINGW64 ~/ssafy/toy_project/fronend (master)
$ git push origin master
Enumerating objects: 17, done.
Counting objects: 100% (17/17), done.
Delta compression using up to 4 threads
Compressing objects: 100% (16/16), done.
Writing objects: 100% (16/16), 184.23 KiB | 8.01 MiB/s, done.
Total 16 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/jiyoung1329/sharediary.git
   14ddb0c..07c5c71  master -> master

user@DESKTOP-MU81B0H MINGW64 ~/ssafy/toy_project/fronend (master)
$
