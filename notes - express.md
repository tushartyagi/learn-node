## Express js application:

* Conventionally, the Express application is called `app` within our code, 
  instantiated by:

    var express = require('express');
    var app = express();

### Middleware
* The middleware is any function which changes the way request and response objects 
  are changed between, well, the request and the response. Usually this is 
  called the middleware stack, because the order in which middleware functions
  are defined is the order in which they are executed. They have the same 
  syntax except the presence of a parameter called `next` which calls the next
  middleware in line.

  Let's take an example, where the requests coming at the root are handled by 
  some function:
  
    app.use('/', function(req, res) { 
      // handle the request 
    });
  
  In order to introduce middleware, we have to add another function, which is 
  the middleware:
  
    app.use(function(req, res, next) {
      // modify the request in some way
      next();
    });
    
    app.use('/', function(req, res, next) {
      // use the modified req
    });
    
  There are two important points to notice here:
  
  * The order is of paramount  importance. Just because the middleware came 
    before the route handling  function, the latter could use the modified 
    request. 

  * The parameter next, which is a method and is called just before the function 
    returns. Unless `next` is called, the request will be left hanging.

  The middleware methods can be called before as well as after the routing.
  Again, we have to make sure that even the routing function calls the next 
  method in those situations. 
  
    app.use(function(req, res, next) {
      // modify the request in some way
      next();
    });
    
    app.use('/', function(req, res, next) {
      // use the modified req
      next();
    });
  
    app.use(function(req, res, next) {
      // modify the request/response some more
    });
    
  Of course, just like the routing methods, even the middleware can take some 
  routes and then will only modified those requests which match the given 
  route.
    