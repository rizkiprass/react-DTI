import React from 'react';
import './style.css';

const Cards = ({ data }) => {
  return (
    <div className="container">
      <p className="title">{data.activity[0].title}</p>
      <p className="date">
        Tanggal:
        {new Date(data.date).toDateString()}
      </p>
    </div>
  );
};

export default Cards;
