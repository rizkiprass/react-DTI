import React, { useContext } from 'react';
import UserContext from '../userContext';

const Achievement = () => {
  const { value } = useContext(UserContext);
  return (
    <div>
      <div className="content-wrapper">
        <h2>ACHIEVEMENTS</h2>
        <hr />
        <p>CCNA: Introduction to Networks | Aug 2020</p>
        <ul>
          <li>Networking Training</li>
        </ul>
        <p>
          Seminar Nasional Microwave, Antena dan Propagasi (SMAP) | Oct 2019
        </p>
        <ul>
          <li>Publication Paper</li>
        </ul>
        <p>
          2nd Symposium of Future Telecommunication and Technologies (SOFTT) |
          Dec 2018
        </p>
        <ul>
          <li>Presentation Poster 5G Network</li>
        </ul>
      </div>
      <div>{value}</div>
    </div>
  );
};

export default Achievement;
