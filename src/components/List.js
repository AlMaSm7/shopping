import Items from "./Items";
import {useState, useEffect} from "react"
import { Container, Row, Col } from "react-bootstrap"


export default function List(){

    const [newItem, setnewItem] = useState("")
    const [items, setItems] = useState([])

    useEffect(() => {
        getLocalStorage()
    },[])

    useEffect(() => {
        console.log('CUMMER')
        console.log(items)
        localStorage.setItem("shoppingBag", JSON.stringify(items))
    }, [items])

    const safeItem = () =>{
        let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear()
        console.log('cum')
        setItems([...items, {item: newItem, date: [year, month, day].join('-'), checked: false, timeStamp: Date.now()}])
    }

    const getLocalStorage = () =>{
        let storage = localStorage.getItem("shoppingBag")
        console.log(JSON.parse(storage))
        if(storage == null || storage.length === 0){
            console.log("here")
            localStorage.setItem("shoppingBag", JSON.stringify([]))
        }else{
            console.log('here2')
            setItems(JSON.parse(storage))
        }
    }

    return (
        <Container fluid>
            <Row >
                <Col xs={1} md={5}></Col>
                <Col xs={4} md={4}>
                    <div>
                        <input placeholder="Add new Item..." onChange={(e) => setnewItem(e.target.value)}/>
                        <button onClick={safeItem}>SUBMIT</button>
                        {  
                            items.map((e) => {
                                console.log(e.timeStamp)
                                return(
                                    <Items name={e.item} checked={e.checked} time={e.date} timeStamp={e.timeStamp} list={items} getStorage={getLocalStorage}/>
                                )
                            })
                        }
                    </div>
                </Col>
                <Col xs={1} md={4}></Col>
            </Row>
        </Container>
        
    )
}