


### Prerequisite

1. Download `qtum-0.14.13-osx64.tar.gz`  from [https://github.com/qtumproject/qtum/releases](https://github.com/qtumproject/qtum/releases) and unzip it.

2. Then open terminal and enter the directory:

      
         $ cd /qtum-0.14.13/bin
      

3. Run command to start sync.

       
         $ sudo ./qtumd -testnet -rpcuser=bodhi -rpcpassword=bodhi -logevents -printtoconsole
      

      The terminal should show some info like below

      **![img](img/sync_screenshot.png)**

4. Open another terminal and cd into the same directory, run command

      
         $ ./qtum-cli -rpcuser=bodhi -rpcpassword=bodhi -rpcport=13889 getblockcount 
      

      it will show the amount you have synced. Then you can open [https://testnet.qtum.org/](https://testnet.qtum.org/) and see the blocks part, when you reached around the number in the first block, your sync is almost done.

### GraphQL + MongoDB

1. Install MongoDB

      Run following command 

          
         $ brew update
         $ brew install mongodb
         $ sudo mkdir -p /data/db
         $ sudo chown -R `id -un` /data/db
      

      Open another terminal and type 

       
         $ mongo
         $ show dbs
      

      You will see how much storage your database use.

      You can also get some installation help from [Here](https://docs.mongodb.com/manual/administration/install-community/).                


2. Open terminal and run command

         $ git clone https://github.com/bodhiproject/bodhi-graphql.git
         $ cd bodhi-graphql
         $ npm install

3. Start bodhi-graphql at 5555 back to previous terminal and run
         
         $ node src/index.js

   Then play with graphiql on [localhost:5555/graphiql](localhost:5555/graphiql)

4. Run below query in the graphiql website

         query{
           allOracles {
               address,
               topicAddress,
               status,
               token,
               name,
               options,
               optionIdxs,
               amounts,
               resultIdx,
               blockNum,
               endBlock
             },
         }

      If your QTUM is synced, you should get some Oracle objects. Otherwise you can only get an empty array.


### API

1. Clone project

      SSH:

         $ git clone git@github.com:bodhiproject/bodhi-api.git

      or HTTPS:

         $ git clone https://github.com/bodhiproject/bodhi-api.git

2. Install submodules

         $ cd bodhi-api
         $ git submodule update --init

3. Install npm-recursive-install

         $ npm install -g recursive-install

4. Install dependencies

         $ npm-recursive-install

5. Run project

         $ npm start

6. Open another terminal and run 

         $curl http://localhost:8080/getblockcount

      you should get a message like {“result”:xxxxx}


### UI

1. Clone project

         $ git clone https://github.com/bodhiproject/bodhi-ui.git

2. Installing Packages & Dependencies: `yarn`   
   it will download all the necessary packages and dependencies in to node_modules folder.

3. Run command

         $ npm install

4. Start the app 

         $ yarn start

      After the compiled process completed successfully, it will show success commands & redirect to the http://localhost:3000/ of your browser where you will find the login screen of the  app.

5. To create an Optimized Product Build of the isomorphic app. you will need need to do is to run build command in you terminal root directory of the app. `yarn build`
