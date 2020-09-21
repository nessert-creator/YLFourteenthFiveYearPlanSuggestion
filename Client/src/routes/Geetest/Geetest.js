import React from 'react';
import { Form } from 'antd';
const create = Form.create;
import { connect } from 'dva';
class Geetest extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { loading: true };
    }
    componentDidMount() {
        this.props.dispatch({
            type: 'geetest/getCaptcha',
            payload: {
                callback: (data) => {
                    initGeetest({
                        gt: data.gt,
                        challenge: data.challenge,
                        product: 'embed',
                        offline: !data.success,
                        new_captcha: data.new_captcha,
                        width: '100%'
                        // 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config
                    }, (captchaObj) => {
                        this.setState({ loading: false });
                        captchaObj.props = this.props;
                        window.captchaObj = captchaObj;
                        captchaObj.appendTo('#' + this.props.captchaHtmlId);
                        captchaObj.onSuccess(() => {
                            var result = captchaObj.getValidate();
                            this.props.onChange(JSON.stringify({
                                challenge: result.geetest_challenge,
                                validate: result.geetest_validate,
                                seccode: result.geetest_seccode
                            }));
                        });
                    });
                }
            }
        });
    }
    render() {
        return <div>{this.state.loading ? <div>正在加载验证码......</div> : <div id={this.props.captchaHtmlId}/>}</div>;
    }
}
Geetest.defaultProps = {
    captchaHtmlId: '#embed-captcha'
};
Geetest = Form.create()(Geetest);
export default connect((state) => {
    return Object.assign({}, state.geetest);
})(Geetest);
