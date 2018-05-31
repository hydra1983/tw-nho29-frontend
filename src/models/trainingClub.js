import { queryMyTrainingClubs } from '../services/trainingClub';

export default {
  namespace: 'trainingClub',

  state: {
    list: [],
  },

  effects: {
    *fetchList({ payload }, { call, put }) {
      const response = yield call(queryMyTrainingClubs, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response.data) ? response.data : [],
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
