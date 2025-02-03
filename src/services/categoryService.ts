import { api } from './api';
import { Category, Product } from './schemas';

const PREFIX = '/category';

export const categoryService = {
  async getAll(): Promise<Category[]> {
    const response = await api.get(`${PREFIX}/get_all`);
    return response.data;
  },

  async getById(id: number): Promise<Category> {
    const response = await api.get(`${PREFIX}/get_by_id/${id}`);
    return response.data;
  },

  async getProducts(id: number): Promise<Product[]> {
    const response = await api.get(`${PREFIX}/get_products/${id}`);
    return response.data;
  },
}
