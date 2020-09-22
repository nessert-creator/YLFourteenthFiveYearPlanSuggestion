import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form} from 'antd';

const create = Form.create;
import * as api from '../../api/api';

import CRUD from '../CRUD/CRUD';

function Demo({ form, record }) {
	const columns = [
		{
			title: '姓名',
			dataIndex: 'name'
		},
		{
			title: '邮箱地址',
			dataIndex: 'email'
		},
		{
			title: '电话号码',
			dataIndex: 'phoneNumber'
		},
		{
			title: '身份类别',
			dataIndex: 'identityType',
			render:(t, r)=>{
				return r.identityType == 1?(<span>教职工</span>)
					:r.identityType == 2?(<span>学生</span>)
					:r.identityType == 3?(<span>校友</span>):(<span>其他</span>)
			}
		},
		{
			title: '所在单位',
			dataIndex: 'organization'
		}
	];
	const formNode = (<Form></Form>);
	const filters = [
		{
			name: 'name',
			displayName: '姓名',
			option: 'like'
		}
	];

	return (
		<CRUD
			form={form}
			getAllApi={new api.MessagerApi().appMessagerGetAll}
			columns={columns}
			formNode={formNode}
			filterProps={{
				filters,
				searchProvide: 'sql'
			}}
		/>
	);
}

Demo = connect((state) => {
	return {
		...state.crud
	};
})(Demo);
export default create()(Demo);
