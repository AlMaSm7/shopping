import { BsFillTrashFill } from "react-icons/bs"
import { useState } from "react";

export default function Items(props){
    const [timeKey, setTimeKey] = useState()
    const [data, setData] = useState(props.items)

    const deleteItem = () => {
        data.map((e, id) => {
            if(e.timeStamp === timeKey){
                data.slice(id)
            }
        })  
        
    }
    return(
        <BsFillTrashFill onClick={deleteItem}/>
    )

}
