import { api } from './api';
import { Media } from './schemas';

const PREFIX = '/media';

const cache: Record<string, Media | undefined> = {};

export const mediaService = {
  async getFileUrl(id: string): Promise<Media> {
    if (cache[id]) {
      return cache[id];
    }

    const response = await api.get(`${PREFIX}/get_file_url/${id}`);
    cache[id] = response.data;
    return response.data;
  }
}
