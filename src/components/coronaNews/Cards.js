import React from 'react';
import './style.css';
// import { Link } from 'react-router-dom';

const Cards = ({ data, test1 }) => {
  return (
    <div className="container">
      <h3 className="title">{data.activity[0].title}</h3>
      <p className="desc">{data.activity[0].desc}</p>
      <p className="date">
        Tanggal:
        {new Date(data.date).toDateString()}
      </p>
      <p>{test1}</p>
    </div>
  );
};

export default Cards;
