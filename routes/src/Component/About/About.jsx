import React from 'react'
import './About.css'
import { Link } from 'react-router-dom';


function About() {

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
  },
  ]
  return (
    <div className='container'>
      <div className='box1'>
        <div className="row col-md-12">
          {data.map((val, ind) => {
            return (
              <div class="card" style={{ width: "18rem" }} key={ind}>
                <img src='https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/intro-1662064407.jpg' alt=''/>
                <div class="card-body">
                  <h5 class="card-title">{val.title}</h5>
                  <p class="card-text">{val.content}</p>
                  <Link to={`/${val.title}`} class="btn btn-primary">
                    view
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default About
