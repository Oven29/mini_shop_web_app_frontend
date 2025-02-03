import { api } from './api';
import { Product } from './schemas';

const PREFIX = '/product';

const cache: Record<number, Product | undefined> = {};

const updateCache = (products: Product[]) => {
  products.forEach((product) => {
    cache[product.id] = product;
  })
}

export const productService = {
  async getAll(): Promise<Product[]> {
    const response = await api.get(`${PREFIX}/get_all`);
    updateCache(response.data);
    return response.data;
  },

  async getById(id: number): Promise<Product> {
    if (cache[id]) {
      return cache[id];
    }

    const response = await api.get(`${PREFIX}/get_by_id/${id}`);
    cache[id] = response.data;
    return response.data;
  },

  async search(query: string): Promise<Product[]> {
    const response = await api.get(`${PREFIX}/search/${query}`);
    updateCache(response.data);
    return response.data;
  },
}
