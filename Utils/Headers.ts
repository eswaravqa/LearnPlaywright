import { API_CONFIG } from './apiConfig';

export const API_HEADERS = {
  Authorization: `Bearer ${API_CONFIG.TOKEN}`,
  'Content-Type': 'application/json'
};
export { API_CONFIG };

