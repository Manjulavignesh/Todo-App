import TodoList from "@/components/TodoList";
import { MongoClient } from "mongodb";

function Homepage(props) {
  async function EditTododHandler(editedData){
    const response = await fetch("/api/index", {
      method: "PUT",
      body: JSON.stringify(editedData),
      headers: { "content-type": "application/json" },
    });
    console.log(response);
  };
  return (
    <>
      <TodoList todos={props.todos}onEditTodos={EditTododHandler} />
    </>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Manjula:Manju123@cluster0.wohhw4h.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const todoscollection = db.collection("todos");
  const todos = await todoscollection.find().toArray();
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
