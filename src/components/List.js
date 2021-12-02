import Items from "./Items";
import {useState, useEffect} from "react"


export default function List(){

    const [newItem, setnewItem] = useState("")
    const [items, setItems] = useState([])


    useEffect(() => {
        getLocalStorage()
    }, [newItem])

    const safeItem = () =>{
        console.log(Date.now)
        localStorage.setItem("shoppingBag", JSON.stringify([...items, {timeStamp: Date.now, checked: false}]))
    }

    const getLocalStorage = () =>{
        let storage = localStorage.getItem("shoppingBag")
        if(storage == null){
            localStorage.setItem("shoppingBag", JSON.stringify([]))
        }else{
            setItems(JSON.parse(storage))
        }
    }


    return (
        <div>
                {
                    items.map((e) => {
                        <Items />
                    })
                }
                <input placeholder="Add new Item..." onChange={(e) => setnewItem(e.target.value)}/>
                <button onClick={safeItem}>SUBMIT</button>
        </div>
    )
}