//Go to mongodb website 
//Create a free M0 cluster.
//Create a User
//Get the connection string
//Install mongodb compass

//Install npm package mongodb

const { MongoClient }=require("mongodb")
const url="mongodb+srv://namasteshivansh:Hellomoto@namastenode.cxr8b.mongodb.net/?retryWrites=true&w=majority"
const client= new MongoClient(url);

const dbName='Helloworld'

async function main() {
-
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');
  const data={
    Firstname:"Mahi",
    Lastname:"DHONI",
    City:"Meerut"
 

  }
  const insertResult = await collection.insertMany([data]);

    const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult)
  
    return 'done.';
  }

  

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())






