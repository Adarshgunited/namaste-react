npm - does not stand for node package manager , it is a package manager. but it behind the scene it  does manage the node packages.
npm consist of a lot of packages and it install and manages all the packages. 

npm init - npm install 

note : package.json is a configuration for npm . the package is known as dependencies.
npm take care of the versions and it is present in the package.json.

imp package in our project is : Bundler. 
A bundler is used to bundle or package our apps. different bundler are webpack,parcel,vite,etc..
at the end of the day all bundler are same . we r going to use parcel . 
parcel is a library.it comes in a node package
install = npm install -D parcel (-D is for dev dependencies)
two types of dependencies : 1. dev dependencies 2. normal dependencies
1. dev dependencies are required in development phase 
2. normal dependencies are used in normal phase.
parcel is a beast . (it will give muscle, strength,etc)
"parcel": "^2.11.0" : the ^ is a caret symbol . its basically update the parcel automatically if any new minor update is available. ~ is a tilde it basically update the major parcel automatically (prefer caret over tilde for no problems)

package.json is a config for npm .
package-lock.json basically lock the version of the packages or dependencies
the package.json keeps a approx version while package-lock.json is a exact version.
node module contains all the code and dependencies that are fetched from the npm.
node module is kind of a database used for our project and is fetched from npm.

transitive-depedencies - dependencies contain other dependencies and other dependencies contain other dependencies

every packages has its own package.json . every dependencies has its own package.json.

node modules : it is a collection of dependencies

we should not put node_modules on git (its bad way of putting it on git). we can regenerate  by npm install .

we make .gitignore and put node modules , because we can install it at any time.(/node_modules)
 .gitignore contains all the files which we should not push on github.
we should put package.json and package-lock.json in git , so that we can understand the packages and dependencies needed.

we r building our app using parcel  (igniting our app)

cmd : npx parcel index.html 

