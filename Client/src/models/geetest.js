import * as api from './../api/api';
import { createApiAuthParam } from './../api/apiUtil.js';
export default {
    namespace: 'geetest',
    state: {},
    reducers: {
        setState(state, { payload }) {
            return Object.assign({}, state, payload);
        }
    },
    effects: {
        *getCaptcha({ payload }, { call, put }) {
            const { success, result } = yield call(...createApiAuthParam({
                method: new api.GeetestApi().appGeetestGetCaptcha
            }));
            if (success) {
                payload.callback(JSON.parse(result));
            }
        },
        *check({ payload }, { call, put, select }) {
            const { success, result } = yield call(...createApiAuthParam({
                method: new api.GeetestApi().appGeetestCheck,
                payload: Object.assign({}, payload)
            }));
            if (success) {
                if (result.success) {
                    payload.callback(result.token);
                }
            }
        },
        *reset({ payload }, { call, put, select }) {
            window.captchaObj.reset();
            window.captchaObj.props.onChange('');
        }
    }
};
