// import './App.css'

import axios from "axios"
import { useEffect, useState, useRef } from "react";

function App() {

  const [data, setdata] = useState([]);

  const title = useRef();
  const author = useRef();

  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((res) => {
      console.log(res);
      setdata(res.data);
    },);
  }, [])

  // console.log(data);

  function handlesub() {
    const data = {
      title: title.current.value,
      author: author.current.value,
    };

    axios.post("http://localhost:3001/posts", data).then((res) => {
      console.log(res.data);

      setdata([res.data]);
    });
  }
  // console.log(data);

  return (
    <>
      <input type="text" name="title" ref={title} placeholder="Enter a author"></input>
      <input type="text" name="auther" ref={author} placeholder="Enter a title"></input>
      <button onClick={handlesub}>submit</button>
      {
        data?.map((val) => {
          return (
            <>
              <h1>{val.id}</h1>
              <h3>{val.title}</h3>
              <h2>{val.author}</h2>
            </>
          )
        })
      }
    </>
  )
}

export default App
