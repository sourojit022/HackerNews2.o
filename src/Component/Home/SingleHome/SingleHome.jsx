import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs"
import { Button } from 'react-bootstrap'

const SingleHome = ({ id }) => {
    // console.log({id});
    const [sData, setSData] = useState("")
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

                    <a href="#" style={{ textDecoration: "none", color: "black" }} ><BsFillCaretUpFill /> </a>
                    <a href="#" style={{ textDecoration: "none" }} >    <BsFillCaretDownFill style={{ marginRight: "18px" }} /> </a>
                    <a href={sData.url}
                        className="LinkClicked" style={{ textDecoration: "none" }}>
                        {sData.title}
                    </a>

                    <p className="SingleDataPara" ><b>By </b> : <span style={{ fontWeight: "bold", color: "#0A1931" }}> {sData.by} </span>

                    </p>



                </div>
            }


        </>
    )
}

export default SingleHome