# dev-aditya-pandey

## Implementing Elastic Search with NodeJs

## Why elasticsearch ?

It is because users are forever searching weather it is an e-commerce site, social media handle or anything else.

## Features

1. Distributed
2. Open-source
3. NoSQL
4. JSON based
5. RESTFUL
6. Logs, Metrics

## Comparison with RDBMS

## RDBMS ----- ES

1. Database ----- Indexes/Indices
2. Tables ----- Patterns/Types
3. Rows ----- Documents
4. Columns ----- Fields

## NPM packages that are required to be installed

1. Express
2. Body-Parser
3. Elastic Search

It can be installed using a single command: npm i express body-parser @elastic/elasticsearch --save

## How to use this project

1. Install elasticsearch in your system as per OS.

2. Create a folder named 'Search service' and open command line to install some NPM packages using the following command ,

npm i express body-parser @elastic/elasticsearch --save

3. Create a js file name, name it 'server.js' and copy the code in it.

4. Since we have imported a file 'SearchEngine.js' in server.js therefore we need to create it as well.

5. We are all set to start the node server. Open command line and run npm start.

6. Then we can use any browser or postman to hit an endpoint to do full-text searching. e.g. http://localhost:3000/search/bank/\_doc?q=mill

## Authors and acknowledgment

Show your appreciation to those who have contributed to the project.
