import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Activity = (props) => {
  const { data } = props;
  return (
    <div>
      <a href={data.url}>
        <h4>{data.title}</h4>
      </a>
      <p>{data.desc}</p>
    </div>
  );
};

const Cards = ({ data, test1 }) => {
  // console.log(data);
  return (
    <div className="container">
      {data.activity.map((nws) => {
        // console.log(nws);
        return <Activity key={nws.url} data={nws} />;
      })}
      {/* <h3 className="title">{data.activity[0].title}</h3>
      <p className="desc">{data.activity[0].desc}</p> */}
      <Link to={`/infoCorona/${data.date}`}>
        <p className="date">
          Tanggal:
          {new Date(data.date).toDateString()}
        </p>
      </Link>
      <p>{test1}</p>
    </div>
  );
};

export default Cards;
