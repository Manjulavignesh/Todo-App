import AddtodoForm from "@/components/AddtodoForm";
const AddForm=()=>{
    async function addTododHandler(enteredData){
        const response = await fetch("/api/addForm", {
          method: "POST",
          body: JSON.stringify(enteredData),
          headers: { "content-type": "application/json" },
        });
        const data=await response.json();
         console.log(data);
      };
      return <AddtodoForm onAddTodos={addTododHandler} />;
}
export default AddForm;