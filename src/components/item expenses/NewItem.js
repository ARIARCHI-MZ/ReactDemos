import "./expences.css";
import Itemrow from "./item row";
function NewItem(props) {
  const addItemhandler =(enteredNewItem) =>{
    const userInput= {
      ...enteredNewItem,
      id: Math.random().toString(),
      };
      props.onAddNew(userInput);
    };

  return (
    <div>
      <Itemrow onAddItem={addItemhandler}/>
    </div>
  );
  }
export default NewItem;



