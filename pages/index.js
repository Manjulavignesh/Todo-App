import TodoList from "@/components/TodoList";
import { MongoClient } from "mongodb";

function Homepage(props) {
  return (
    <>
      <TodoList todos={props.todos} />
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
