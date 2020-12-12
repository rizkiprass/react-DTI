export default {
  LOGIN: 'api/login',
  PRODUCT: 'api/product',
  USERBYID: (userId) => {
    return `users/${userId}`;
  },
};
