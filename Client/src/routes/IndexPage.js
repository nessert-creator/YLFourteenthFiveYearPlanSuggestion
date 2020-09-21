import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
import { remoteUrl } from '../utils/url';
import { Form, Icon, Input, Button, Checkbox, Tooltip } from 'antd';
import { routerRedux } from 'dva/router';
const FormItem = Form.Item;
import Geetest from './Geetest/Geetest';
class Indexpage extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            captcha: `${remoteUrl}/Captcha/GetCaptchaImage?t=${Math.random()}`
        };
        this.refreshCaptcha = () => {
            // this.setState({
            // 	captcha: `${remoteUrl}/Captcha/GetCaptchaImage?t=${Math.random()}`
            // });
            // this.props.dispatch({
            // 	type: 'dragVerification/getDragVerificationCode'
            // });
            this.props.dispatch({
                type: 'geetest/reset'
            });
        };
        this.handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    // console.log('Received values of form: ', values);
                    this.props.dispatch({
                        type: 'indexpage/login',
                        payload: { values: values, callback: this.refreshCaptcha }
                    });
                }
            });
        };
    }
    componentDidMount() {
        this.props.dispatch({
            type: 'indexpage/thirdPartyList'
        });
        var paramString = decodeURI(location.search);
        var match = /(code|app_auth_code)=([a-zA-Z0-9]*)/;
        if (match.test(paramString)) {
            var code = paramString.match(match)[2];
            var type = paramString.match(/(state|type)=([A-Za-z\|]*)/)[2];
            var routerMatch = /(state|type)=([A-Za-z]*)[\||_]([a-z]*)/;
            if (routerMatch.test(paramString)) {
                var router = paramString.match(routerMatch)[3];
                this.props.dispatch(routerRedux.push('/' + router));
            }
            else {
                this.props.dispatch({
                    type: 'indexpage/thirdPartyLogin',
                    payload: { code: code, thirdParty: type }
                });
            }
        }
    }
    render() {
        const { form, setting, thirdPartyList } = this.props;
        const { getFieldDecorator } = form;
        return (<div className={styles.navbox}>
				<div className={styles.logologin}>{setting.systemName || '后台管理系统'}</div>
				<div className={styles.indexbox}>
					<div style={{ position: 'absolute', right: '24px' }}>
						<Tooltip placement="left" title="二维码登录">
							<Link to="/qrLogin">
								<Icon type="qrcode" style={{ fontSize: 30, color: '#08c' }}/>
							</Link>
						</Tooltip>
					</div>
					<header className={styles.headerbox}>请登录</header>
					<Form onSubmit={this.handleSubmit} className={`${styles.formbox} login-form`}>
						<FormItem>
							<div className={styles.colorsize}>用户名：</div>
							{getFieldDecorator('usernameOrEmailAddress', {
            rules: [{ required: true, message: '请输入用户名！' }]
        })(<Input prefix={<Icon type="user" style={{ fontSize: 13 }}/>} placeholder="用户名" style={{ marginTop: '5px', height: 40 }}/>)}
						</FormItem>
						<FormItem>
							<span className={styles.colorsize}>登录密码：</span>
							<Link to="backknow" className={styles.forgetpassword} href="">
								忘记密码？
							</Link>
							{getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码！' }]
        })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }}/>} type="password" placeholder="密码" style={{ marginTop: '5px', height: 40 }}/>)}
						</FormItem>
						
						
						<FormItem>
							<span className={styles.colorsize}>验证码：</span>
							<center>
								{getFieldDecorator('captcha', {
            rules: [{ required: true, message: '请点击验证！' }]
        })(<Geetest />)}
							</center>
						</FormItem>
						<FormItem>
							{getFieldDecorator('rememberMe', {
            valuePropName: 'checked',
            initialValue: true
        })(<Checkbox>记住密码</Checkbox>)}

							<Button type="primary" loading={this.props.loading} htmlType="submit" className={styles.login}>
								登录
							</Button>
						</FormItem>
						<div className={styles.otherbox} style={{ display: thirdPartyList && thirdPartyList.length ? '' : 'none' }}>
							<span>第三方登录:</span>
							{thirdPartyList ? (thirdPartyList.map((data, index) => {
            return (<a href={data.authUrl} key={index}>
											<img src={`${remoteUrl}` + data.iconUrl} style={{ marginLeft: 10, height: 14, width: 14 }}/>
										</a>);
        })) : null}
						</div>
					</Form>
					<div className={styles.reB}>
						{setting && setting.allowSelfRegistration ? (<div className={styles.reBL}>
								<span>还没有账号？</span>
								<Link to="/register" className={styles.newuser}>
									马上注册
								</Link>
							</div>) : (<div className={styles.reBL}/>)}
						<Link to={{
            pathname: `/active`,
            state: {
                goToCode: 3
            }
        }} style={{ float: 'right' }}>
							激活
						</Link>
					</div>
				</div>
			</div>);
    }
}
const IndexPage = Form.create()(Indexpage);
export default connect((state) => {
    return Object.assign({ loading: state.loading.models.indexpage }, state.indexpage);
})(IndexPage);
