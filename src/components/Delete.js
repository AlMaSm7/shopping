import { BsFillTrashFill } from "react-icons/bs"
import { useState, useEffect } from "react"
export default function Delete(props){
    const [timeKey, setTimeKey] = useState(props.timeStamp)
    const [data, setData] = useState(props.items)
    useEffect(() => {
        props.storage()
        setTimeKey(props.timeStamp)
    }, [data])
    const deleteItem = () => {
        console.log(timeKey)
        //console.log(data)
        let newList = JSON.parse(localStorage.getItem('shoppingBag')).filter(obj => obj.timeStamp !== props.timeStamp)
        console.log(newList)
        localStorage.setItem('shoppingBag', JSON.stringify(newList))
        setTimeKey('')
        setData(newList)
    }
    return (
        <div>
             <BsFillTrashFill style={{color: '#ff0011'}} onClick={deleteItem}/>
        </div>
    )
}