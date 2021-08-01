import {React,useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {  Row, Container } from 'react-bootstrap'
import {storeAddress} from '../../Redux/globalSlice'

import SingleHome1 from "./SingleHome1";

export default function Home1() {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(storeAddress());
    }, [dispatch]);

       const   allIds = useSelector(state => state.global.Id) 
       console.log("testing"+typeof(allIds.length))
    const [count,setCount]= useState(0)
    const [array,setArray]= useState([])
    
    useEffect(()=>{
        
           
     
        if(count>=0 && allIds?.length>0){
            let temp = allIds?.filter((item,index)=>Math.floor(index/10)===count)
            setArray(temp)
            
        }

    
    },[allIds,count])
 const handleChnge = (type)=>{
     if(type==="incr"){
         setCount(p=>p+1)
     }
     else{
         if(count!==0){
            setCount(p=>p-1)
         }
     }
 }
    return (
        <div>
             <Container >
                 <h1>NEWS</h1>
                <Row style={{borderStyle: 'solid', borderColor: '#001E6C',borderRadius:"10px",paddingLeft:"2rem"}}>
                    <br />
                <div style={{ margin: "0rem 0.5rem" }} className="StoryDiv" >
                {  array?.length > 0 &&
                        array?.map((id, index) => {
                            return (
                                <div style={{ margin: "0.5rem 0" }} key={index}>
                                    <SingleHome1 id={id} />
                                </div>
                            )
                        })
                    }
 </div>
 <br />
 <div >Page <span style={{fontWeight:"bold"}}>{count}</span></div>
</Row>

                <button type="button" class="btn btn" style={{backgroundColor:"#0A1931",color:"white",fontWeight:"bold"}} id="btnnn" onClick={()=>handleChnge()}>Back</button>
                <button type="button" class="btn btn" style={{backgroundColor:"#0A1931",color:"white",fontWeight:"bold"}} id="btnnn" onClick={()=>handleChnge("incr")}>More</button>
            </Container>
        </div>
    )
}

