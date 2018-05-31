import request from '../utils/request';

export async function queryMyTrainingClubs() {
  return request('/api/training-clubs');
}
