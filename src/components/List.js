import Items from "./Items";
import {useState, useEffect} from "react"


export default function List(){

    const [newItem, setnewItem] = useState("")
    const [items, setItems] = useState([])


    useEffect(() => {
        getLocalStorage()
    },[])

    useEffect(() => {
        localStorage.setItem("shoppingBag", JSON.stringify(items))
    }, [items])

    const safeItem = () =>{
        setItems([...items, {item: newItem, timeStamp: Date.now(), checked: false}])
    }

    const getLocalStorage = () =>{
        let storage = localStorage.getItem("shoppingBag")
        if(storage.length == 0){
            console.log("here")
            localStorage.setItem("shoppingBag", JSON.stringify([]))
        }else{
            setItems(JSON.parse(storage))
        }
    }


    return (
        <div>
                {
                    items.map((e) => {
                        return(
                            <Items name={e.item} checked={e.checked} time={e.timeStamp} list={items}/>
                        )
                    })
                }
                <input placeholder="Add new Item..." onChange={(e) => setnewItem(e.target.value)}/>
                <button onClick={safeItem}>SUBMIT</button>
        </div>
    )
}