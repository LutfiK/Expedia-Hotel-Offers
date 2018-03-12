# Server Setup - Local Deployment

1- install node js/npm --> https://www.npmjs.com/package/nodemon/tutorial 
2- run 'npm install' from the command line from this path (that includes package.json). this will install all the 
dependency modules for the project.
4- run 'npm start' 
5- the server is now runing @ http://localhost:3000/


#Server Setup - Heroku Deployment
1- install heroku toolset if not installed
3- browse in the command line to this directory
4- run 'heroku login' and enter the user name and password of the heroku account to use.
5- create a heroku app and give it a name --> 'heroku create expedia-server-app'
6- run 'git remote add herokuServer {UrlOfCreateHerokuRepository}' . this will create a refrence to remote repo in the heroku app
7- run a 'git init' to initalize the Repo
8- run 'git add .' and then 'git commit -m "inital commit"' to add all files in folder to the repo
9- run 'git push herokuServer master' to push all the repo files to the remote heroku repo
10- you should be able to access the server now using the following url https://expedia-server-app.herokuapp.com/