# CRUD APP Boilerplate

The project is a boiler plate for setting up a minimal express server with RESTful API for performing CRUD operations in a Mongodb database.The project presents a serious of API routes which can do the following tasks.

**1.Creating Posts by Posting a user form to database**   
**2.Reading all the posts from the database**    
**3.Updating posts in the database**  
**4.Deleting posts from the database**  

## Getting Started

There are two methods for getting started with this repo.

**if you are familar with git:**  
Checkout this repo, install dependencies, then start the gulp process with the following:
```
git clone https://github.com/DineshBabu1989/Express-Crud-Basic.git
cd BASIC-CRUD
npm install
npm start
```
**if you are not familar with git:**  
Click here then download the .zip file. Extract the contents of the zip file, then open your terminal,
change to the project directory, and:
```
npm install
npm start
```
## Prerequisities

-You need to have node.js installed in your system.
--URL: https://nodejs.org/en/

## Setting up the Mongodb and posting Via CRUD app

- Set up data base on MLab  
- Set up data base user on MLab 
- Copy the mongocollection string supplied by Mlab  
- Enter user name and password in the "keys.js" file in the "config" folder  
  -eg: mongoURI: "mongodb://*dbusername*:*dbpassword*@ds217970.mlab.com:17970/dinesh01"

## Built With

- node.js - The server side framework  
- VsCode - Text Editor with prettier setup  
- MLab- Mongodb database as a service  

## Authors

- DINESH.B - FULL STACK DEVELOPER - GEM ENTERPRISES,COIMBATORE,INDIA  
- RAJESH.B - FULL STACK DEVELOPER - ADIKTEEV ,BERLIN,GERMANY

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
