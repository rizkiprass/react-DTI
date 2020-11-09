import React, { useEffect, useState } from 'react';
import app from '../../services/firebase';
import 'firebase/database';
import Cards from './Cards';

const CoronaNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
      setIsLoading(false);
    });
  }, []);

  // console.log(news);

  return (
    <div>
      <h2>Berita Corona</h2>
      {isLoading ? <p>loading</p> : news.map((nws) => { return <Cards data={nws} />; })}
    </div>
  );
};

export default CoronaNews;
