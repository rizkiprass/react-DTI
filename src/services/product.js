import BaseService from './baseService';
import API from '../config/rest';

const Product = () => {
  return BaseService.get(API.PRODUCT);
};

export default { Product };
