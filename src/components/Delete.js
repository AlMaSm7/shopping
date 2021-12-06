import { BsFillTrashFill } from "react-icons/bs"
import { useState, useEffect } from "react"

export default function Items(props){
    const [timeKey, setTimeKey] = useState(props.timeStamp)
    const [data, setData] = useState(props.items)

    useEffect(() => {
        props.storage()
    }, [data])

    const deleteItem = () => {
        console.log(timeKey)
        //console.log(data)
        let newList = JSON.parse(localStorage.getItem('shoppingBag')).filter(obj => obj.timeStamp !== timeKey)
        console.log(newList)
        localStorage.setItem('shoppingBag', JSON.stringify(newList))
        setData(newList)
    }
    return(
        <BsFillTrashFill onClick={deleteItem}/>
    )

}
