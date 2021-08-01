import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillLike,AiFillDislike } from "react-icons/ai"
import { Button } from 'react-bootstrap'

const SingleHome = ( {id} ) => {
 
    
    const [sData, setSData] = useState("")
    let [counter, setcounter] = useState(0)
    
    useEffect(() => {
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then((res) => {
            console.log(res.data)
            setSData(res.data)
        })
    }, [id])
    return (


        <>
            {
                id &&
                <div className="ItemSingleDiv">
                    <a href="#" style={{ textDecoration: "none", color: "black" }} ><AiFillLike/> </a>
                    <a href="#" style={{ textDecoration: "none" }} >    <AiFillDislike style={{ marginRight: "18px" }} /> </a>
                    <a href={sData.url}
                        className="LinkClicked" style={{ textDecoration: "none" }}>
                        {sData.title}
                    </a>
                    {console.log(new Date(sData.time*1000))}
                    <em><p className="SingleDataPara" ><b>By </b> : <span style={{ fontWeight: "bold", color: "#0A1931" }}> {sData.by} </span>
                    </p></em>
                </div>
            }



        </>
    )
}

export default SingleHome