import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://Manjula:Manju123@cluster0.wohhw4h.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db =client.db();
    const todoscollection =db.collection("todos");
    const result = await todoscollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "todos inserted!" });
  }
  if (req.method == "PUT") {
    const data = req.body;
    console.log(data);
    const client = await MongoClient.connect(
      "mongodb+srv://Manjula:Manju123@cluster0.wohhw4h.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const todoscollection = db.collection("todos");
    const result = await todoscollection.updateOne({title:data.title},{$set:{iscompleted:data.iscompleted}});
    console.log(result);
    client.close();
    res.status(201).json({ message: "todos updated!" });
  }
  if (req.method == "DELETE") {
    const data = req.body;
    console.log(data);
    const client = await MongoClient.connect(
      "mongodb+srv://Manjula:Manju123@cluster0.wohhw4h.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const todoscollection = db.collection("todos");
    const result = await todoscollection.deleteOne({title:data.title});
    console.log(result);
    client.close();
    res.status(201).json({ message: "todos deleted!" });
  }


}

 