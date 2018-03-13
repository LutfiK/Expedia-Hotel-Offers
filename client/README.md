# Expedia Hotel Offers 


#Client Setup - Local Deployment

1- install node js/npm if not installed --> https://www.npmjs.com/package/nodemon/tutorial 
2- run 'npm install' from the command line from this path (that includes package.json). this will install all the 
dependency modules for the project.
3- update offers.service.ts to connect to the local service url --> http://localhost:3000
4- run 'ng build --aot -prod' to build the client files.
5- run 'npm start' command. this will start the web server. 
6- open the browser and browse to http://localhost:4200/ 

#Client Setup - Heroku Deployment
#to deploy to heroku we need to create a seperate heroku client app that connects to the server heroku app, for
#that reason we need to create a new Git Repository for the client codein this folder and push the client code to it
1- install heroku toolset
2- update offers.service.ts to connect to the heroku service url --> https://expedia-server-app.herokuapp.com/
3- browse in the command line to this directory
4- run 'heroku login' and enter the user name and password of the heroku account to use.
5- create a heroku app and give it a name --> 'heroku create expedia-client-app'
6- run 'git remote add herokuClient {UrlOfCreateHerokuRepository}' . this will create a refrence to remote repo in the heroku app
7- run a 'git init' to initalize the Repo
8- run 'git add .' and then 'git commit -m "inital commit"' to add all files in folder to the repo
9- run 'git push herokuClient master' to push all the repo files to the remote heroku repo
10- you should be able to access the client now using the following url https://expedia-client-app.herokuapp.com/




#To Run Integration Tests
--> run 'npm test'