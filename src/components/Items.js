import { useEffect } from "react"
import Delete from './Delete.js'

export default function Items(props){
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.time}</p>
            <Delete key={props.time} items={props.list}/>
        </div>
    )
}