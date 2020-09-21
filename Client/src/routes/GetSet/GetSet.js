import React from 'react';
import { connect } from 'dva';
import { Table, Button, Input, Modal } from 'antd';
const { Column, ColumnGroup } = Table;
const Search = Input.Search;
const confirm = Modal.confirm;
class GetSet extends React.Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'getSet/get',
            payload: {
                api: this.props.getApi
            }
        });
    }
    render() {
        const { dispatch, data, form, formNode, setApi, getApi } = this.props;
        return (<div>
				{formNode}
				<center>
					<Button key="back" type="primary" onClick={() => {
            form.validateFields((err, values) => {
                if (!err) {
                    dispatch({
                        type: 'getSet/set',
                        payload: {
                            data: values,
                            api: setApi
                        }
                    });
                }
            });
        }}>
						保存
					</Button>
				</center>
			</div>);
    }
}
GetSet = connect((state) => {
    return Object.assign({}, state.getSet);
})(GetSet);
export default GetSet;
