import React from 'react'
import { useParams } from 'react-router-dom'

function Carddata() {

    const { id } = useParams();

    const data = [{
        id: 1,
        title: "card1",
        content: "content of card1"
    },
    {
        id: 2,
        title: "card2",
        content: "content of card2"
    },
    {
        id: 3,
        title: "card3",
        content: "content of card3"
    },
    {
        id: 4,
        title: "card4",
        content: "content of card4"
    },]

    const cdata= data.filter((e)=>e.title === id);
    return (
       <div>
        <h1>{cdata[0].title}</h1>
        <p>{cdata[0].content}</p>
       </div>
    )
}

export default Carddata;