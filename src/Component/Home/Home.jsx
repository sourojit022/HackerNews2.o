import { React, useEffect, useState } from 'react'
import axios from 'axios'
import SingleHome from "./SingleHome/SingleHome";
import Header from '../Layout/Header/Header'
import { Col, Row, Container } from 'react-bootstrap'
import { Button } from 'bootstrap';
import Footer from '../Layout/Footer/Footer';


export default function Home() {

    let TestforGit = "TEST GIT"


    let [allIds, setallIds] = useState([])

    let resArray = []
    let resArray1 = []

    let [defaultArrSize, setdefaultArrSize] = useState(20)


    let addpages = (val) => {

        setdefaultArrSize(defaultArrSize + val)

    }


    useEffect(() => {

        axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
            .then(res => {

                console.log(res.data.map(e => {
                    resArray.push(e)

                }));



                resArray1 = resArray.slice(0, defaultArrSize)
                console.log("resArray");

                console.log(resArray);
                console.log(resArray1);

                setallIds(resArray1)

            }).catch(err => { console.log(err) })


    }, [defaultArrSize])



    return (
        <>

            <Header />
            <Container >
                <Row>
                <div style={{ margin: "0rem 0.5rem" }} className="StoryDiv" >
                    {
                        allIds?.length > 0 &&
                        allIds?.map((id, index) => {
                            return (
                                <div style={{ margin: "0.5rem 0" }} key={index}>
                                    <SingleHome id={id} />
                                </div>
                            )
                        })

                    }

                </div>
            </Row>
                <button type="button" class="btn btn-secondary" id="btnnn" onClick={() => setdefaultArrSize(defaultArrSize + 10)}>More</button>
            </Container>
            <Footer/>
        </>
    )
}