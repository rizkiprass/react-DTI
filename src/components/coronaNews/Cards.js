import React from 'react';
import './style.css';

const Cards = ({ data }) => {
  return (
    <div className="container">
      <h3 className="title">{data.activity[0].title}</h3>
      <p className="desc">{data.activity[0].desc}</p>
      <p className="date">
        Tanggal:
        {new Date(data.date).toDateString()}
      </p>
    </div>
  );
};

export default Cards;
