import { routerRedux } from 'dva/router';
import * as api from './../api/api';
import {message} from 'antd';
import { createApiAuthParam } from './../api/apiUtil.js';
export default {
  namespace: 'notice',
  state: {
    loading:false,
    notice:{}
  },
  reducers: {
    setState(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  },
  effects: {
    *getUsingNotice({ payload }, { call, put }) {
      const { success, result } = yield call(
        ...createApiAuthParam({
          method: new api.NoticeApi().appNoticeGetUsingNotice,
          payload: payload
        })
      );
      if (success) {
        yield put({
            type:"setState",
            payload:{
                notice:result
            }
        })
      }
    },
    *editNotice({ payload }, { call, put }) {
      const { success, result } = yield call(
        ...createApiAuthParam({
          method: new api.NoticeApi().appNoticeCreate,
          payload: payload,
        })
      );
      if (success) {
        message.success('保存成功');
      }else{
        message.error('保存失败，请检查内容后重试');
      }
      
      yield put({
        type:"setState",
        payload:{
          loading:false
        }
      })
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, state }) => { 

        if (pathname.toLowerCase() == '/notice'.toLowerCase()) {
            dispatch({
              type: 'getUsingNotice'
            });
          }

      });
    }
  }
};
