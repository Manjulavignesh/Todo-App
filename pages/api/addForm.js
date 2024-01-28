import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://Manjula:Manju123@cluster0.wohhw4h.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const todoscollection = db.collection("todos");
    const result = await todoscollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "todos inserted!" });
  }
}
export default handler;