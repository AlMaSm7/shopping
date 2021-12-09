import Items from "./Items";
import {useState, useEffect} from "react"
import { Container, Row, Col,Card,ListGroup, InputGroup, Button} from "react-bootstrap"
export default function List(){
    const [newItem, setnewItem] = useState("")
    const [items, setItems] = useState([])
    
    useEffect(() => {
        getLocalStorage()
    }, [])
    
    useEffect(() => {
        console.log('CUMMER')
        console.log(items)
        localStorage.setItem("shoppingBag", JSON.stringify(items))
    }, [items])
    
    const safeItem = () =>{
        let d = new Date(),
        month =  (d.getMonth() + 1),
        day =  d.getDate(),
        year = d.getFullYear()
        console.log('cum')
        setItems([...items, {item: newItem, date: [day, month, year].join('.'), checked: false, timeStamp: Date.now()}])
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
        <Card>
        <Container fluid>
            <Row >
                <Col xs={1} md={4}></Col>
                <Col xs={4} md={4}>
                    <div>
                        {/* <div className="form-Group" style={{display: 'inline'}}>
                        <input className="form-control" style={{height: '100%', margin: '0%',display: 'inline'}} placeholder="Add new Item..." onChange={(e) => setnewItem(e.target.value)}/>
                        <Button size='sm' style={{display: 'inline'}} >SUBMIT</Button>
                        </div> */}
                        <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="add new item ..." onChange={(e) => setnewItem(e.target.value)}/>
                        <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" onClick={safeItem} >Add</button>
                        </div>
                        </div>
                        <ListGroup>
                        {  
                            items.map((e) => {
                                console.log(e.timeStamp)
                                return(
                                    <Items name={e.item} checked={e.checked} time={e.date} timeStamp={e.timeStamp} list={items} getStorage={getLocalStorage}/>
                                )
                            })
                        }
                        </ListGroup>
                    </div>
                </Col>
                <Col xs={1} md={4}></Col>
            </Row>
        </Container>
        </Card>
    )
}