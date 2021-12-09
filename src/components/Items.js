import Delete from "./Delete.js";
import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
export default function Items(props) {
  const [time, settimeStamp] = useState(props.timeStamp);
  const [ischecked, setischecked] = useState(props.checked);
  const [items, setitems] = useState(props.list);
  
  useEffect(() => {
    localStorage.setItem("shoppingBag", JSON.stringify(items));
    props.getStorage();
    console.log(props.timeStamp);
  }, [items]);

  const updateCheckBox = () => {
    let updatedList = JSON.parse(localStorage.getItem('shoppingBag')).map(e => {
        if(e.timeStamp === props.timeStamp){
            return {...e, checked: !ischecked}
        }else{
            return e
        }
    })
    setischecked(!ischecked)
    console.log(updatedList)
    setitems(updatedList)
}
  return (
    <ListGroup.Item
      style={{ backgroundColor: "#b8b8b8", margin: "5%", padding: "5%" }}
    >
      <div>
        <label
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            textAlign: "center",
            margin: "5%",
          }}
        >
          {props.name}
        </label>
        <input
          type="checkbox"
          name="itemhere"
          checked={ischecked}
          onChange={updateCheckBox}
        /> <label>already bought</label>
      </div>
      <p>added on: {props.time}</p>
      <Delete
        timeStamp={props.timeStamp}
        items={props.list}
        storage={props.getStorage}
      />
    </ListGroup.Item>
  );
}