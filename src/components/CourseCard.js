import React from 'react'

export default class CourseCard
  extends React.Component {
  // eslint-disable-next-line
  render() {
    return (
      <div className="card .col-lg-7-*"
           styles={{width: '18rem'}}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200" alt="Course Img"/>
        <div className="card-body">
          <h5 className="card-title">
            Card title
          </h5>
          <p className="card-text">
            Card text.
          </p>
          <a href="#/.." className="btn btn-primary" type="button">
            More...
          </a>
        </div>
      </div>)
}}