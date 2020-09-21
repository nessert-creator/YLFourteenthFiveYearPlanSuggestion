export default {
    namespace: 'confirmsucess',
    state: {
        en: false,
    },
    reducers: {
        setState(state, { payload }) {
            return Object.assign({}, state, payload);
        },
    },
    effects: {},
    subscriptions: {
        setup({ dispatch, history }) {
            window.dispatch = dispatch;
            return history.listen(({ pathname, state }) => {
                if (pathname.toLowerCase() == '/confirm'.toLowerCase()) {
                    dispatch({
                        type: 'setlogin'
                    });
                }
            });
        },
    },
};
