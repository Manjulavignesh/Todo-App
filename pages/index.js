import TodoList from "@/components/TodoList";
import { MongoClient } from "mongodb";

function Homepage(props) {
  async function EditTododHandler(editedData){
    console.log(editedData);
    const response = await fetch("/api/addForm", {
      method: "PUT",
      body: JSON.stringify(editedData),
      headers: { "content-type": "application/json" },
    });
    const data=await response.json();
     console.log(data);
  };
  async function deleteTododHandler(deletedData){
    console.log(deletedData);
    const response = await fetch("/api/addForm", {
      method: "DELETE",
      body: JSON.stringify(deletedData),
      headers: { "content-type": "application/json" },
    });
    const data=await response.json();
     console.log(data);
  };
  return (
    <>
      <TodoList todos={props.todos} onEditTodos={EditTododHandler} onDelete={deleteTododHandler}/>
    </>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Manjula:Manju123@cluster0.wohhw4h.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const todoscollection = db.collection("todos");
  const todos = await todoscollection.find({iscompleted:false}).toArray();
  client.close();
  return {
    props: {todos:todos.map((todo) => ({
      title: todo.title,
      iscompleted: todo.iscompleted,
    })),
  }
}
}
export default Homepage;
