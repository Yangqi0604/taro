import {getResultData_servers} from '../servers/servers'
const defaultState = {
    dataList: [],
}
export default {
    namespace: "global",
    state: defaultState,
    effects: {
        * AddArticle({ payload }, { put, select, call }) {
            return yield call(getResultData_servers, payload);
        },
    },
    reducers: {
        dataList(state, { payload }) {
            return {
                ...state,
                dataList: payload
            }
        },
    }
}