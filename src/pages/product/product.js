import React, { useEffect, useState } from 'react';
import { productService } from '../../services';
// import { getCookie } from '../../utils/cookie';

const Product = () => {
  const [userDataLoading, setUserDataLoading] = useState(false);

  useEffect(() => {
    setUserDataLoading(true);
    productService
      .Product()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        setUserDataLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Welocome Poduct</h1>
      {userDataLoading ? <span>Loading...</span> : <div>test</div>}
    </div>
  );
};

export default Product;
