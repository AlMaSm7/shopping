import { useEffect } from "react"

export default function Items(props){

    useEffect(() => {
        console.log(props)
    }, [])

    return(
        <div>
            <p>{props.name}</p>
        </div>
    )
    
}