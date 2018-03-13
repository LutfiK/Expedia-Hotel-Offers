This app was built using Node.JS on the server side & Angular on the Client side. i didnt have any work experience with 
Node JS but i was always intrugued by the fact that you can use the same language (JS) to build the client and sever modules.

I decided to use angular in the client side to utilize the power of biniding to js ModelViews and easily controlling the
UI behavior by controlling the underlying models. ain addition to that i used angular for its modular client code framework
(modules/components/services/dependency injection). bootstrap was used for the styling.

I used the NodeJS express webframework to build the server side. used its routing mechanism to design the code to support
the search offers route . the call to the API happends through the node 'https' module.

The code was refactored to support testability for the http endpoints of the service. tape (assertion framework) and 
supertest (testing framework for http endpoints) were used as well as sinon as a mocking framework to moch the api call.

several changes to the code were done as well to support heroku deployment including updates to the app.json for both the 
client and server code and updating the port to listen on to handle heroku custom assigned port.

I didn't have any previous node js experience other than some self-learning in the past so this excersie was a bit of a 
learning opportunity for me. 

Todos on the UI Side :
* udpate date filter fields to be datepicker controls
" update the google map api to recieve the Longtitude and Latitude of the hotel passed in the API (API key required)


