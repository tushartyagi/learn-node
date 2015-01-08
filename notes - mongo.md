## Intro to mongodb

MongoDB is a document based database, unlike sql database, there are no tables, 
values are stored as documents.

### Inserting Values

* A server can have various database, in order to start working, we may start 
  the mongodb shell using the command `mongo`
* A database can be created using the `use` command: 

    > use learn-mongo 
    
  will create a new database called learn-mongo.
* Each database can have a number of collections. In relational database terms, 
  each table is a collection.
* Each collection can have a number of documents, this is equivalent to rows in
  a relational database.
* MongoDB is structureless, i.e. there is no schema that has to be forced upon
  each document of a collection. 

* A collection can be made using `db.collectionName.save()` command. db already 
  holds the value of the current database that we are using (by `use` command 
  above). The following command:

    > db.persons.save({ name: "tushar", lastName: "tyagi" })
  
  will create a new collection called persons and insert a new record in the 
  collection. 
  
  We can find all the records in a collection using `find` command. The 
  following command will return all the documents in a given collection:
  
    > db.persons.find()
    { "_id" : ObjectId("54ae48a94038c8255bdbb862"), "name" : "tushar", "lastName" : "tyagi" }
    
  In order to find a specific document, pass the filter criteria:
  
    > db.persons.find({ name : "tushar" })
    { "_id" : ObjectId("54ae48a94038c8255bdbb862"), "name" : "tushar", "lastName" : "tyagi" }
    
  And to display only selected values from the document, pass another object, 
  with the fields which you want to show having non-zero values
  
    > db.persons.find({ name : "tushar" }, { name : 1 })
    { "_id" : ObjectId("54ae48a94038c8255bdbb862"), "name" : "tushar" }
    
    > db.persons.find({ name : "tushar" }, { name : 1, _id : 0 })
    { "name" : "tushar" }
    
  The syntax of find command is:
  
      `db.collectionName.find(criteria, projection)` where criteria is the 
      filter criteria and projection is the list of values which you want to 
      get. The primary key value, `_id` is always get by default unless supressed.
  
  Insertion can be one object at a time, or we can pass an array of objects.
  
    > var algy = { firstName : "Algy", lastName: "Moncrieff", hobbies: ["Eating", "Bunburying", "Flirting"] }
    > var jack = { firstName : "jack", lastName : "Worthing" }
    > var bracknells = [{ firstName : "Augusta", lastName : "Bracknell", hobbies : ["Gossiping", "Husband hunting"] },
                        { firstName : "Gwendolen", lastName : "Fairfax", hobbies: ["Loving Earnest"]}];
    
    > db.persons.save(algy);
    WriteResult({ "nInserted" : 1 })
    
    > db.persons.save(jack);
    WriteResult({ "nInserted" : 1 })
    
    > db.persons.save(bracknells);
    BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 2,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
    })
    
    > db.persons.find();
    // ... values
    
    
  `save` method is a wrapper around insert and update so it provides the 
  functionality of both of these, i.e. it inserts the document if not already
  present of updates it. 
    
### Updating Values

We already know how to insert values using `save`, and find values using `find`
command. Now we have to see how we can update the values we've already inserted
using `update` method, which has the following syntax:

    db.collection.update(query, update, options)
    query: filter query
    update: the modifications to apply
    options: { upsert : default false,  // Creates a document if none found
               multi  : default false,  // Updates multiple docs if true, else updates only one document
               writeConcern : document
             }
               
    
    

    

  
