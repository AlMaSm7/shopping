import Delete from './Delete.js'
import {useState, useEffect} from 'react'

export default function Items(props){
    const [time, settimeStamp] = useState(props.timeStamp)
    const [ischecked, setischecked] = useState(props.checked)
    const [items, setitems] = useState(props.list)

    useEffect(() => {
        localStorage.setItem('shoppingBag', JSON.stringify(items))
        props.getStorage()
    }, [items])

    const updateCheckBox = () => {
        let updatedList = JSON.parse(localStorage.getItem('shoppingBag')).map(e => {
            if(e.timeStamp === time){
                return {...e, checked: !ischecked}
            }else{
                return e
            }
        })
        setischecked(!ischecked)
        console.log(updatedList)
        setitems(updatedList)
    }

    return(
        <div>
            <p>{props.name}</p>
            <p>{props.time}</p>
            <p>for debug: {props.timeStamp}</p>
            <input type="checkbox" name ="itemhere" checked={ischecked} onChange={updateCheckBox}/>
            <Delete timeStamp={time} items={items} storage={props.getStorage}/>
        </div>
    )
}